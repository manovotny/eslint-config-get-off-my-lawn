// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const dotProp = require('dot-prop');
const findUp = require('find-up');
const readPkgUp = require('read-pkg-up');
const semver = require('semver');

const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
const jsonc = require('./src/jsonc');
const jsxA11y = require('./src/jsx-a11y');
const jest = require('./src/jest');
const node = require('./src/node');
const objects = require('./src/objects');
const react = require('./src/react');
const reactHooks = require('./src/react-hooks');
const reactNative = require('./src/react-native');
const security = require('./src/security');
const unicorn = require('./src/unicorn');

const pkg = readPkgUp.sync() || {};

const packageJsonContains = (dependency) =>
    dotProp.get(pkg, `packageJson.dependencies.${dependency}`) ||
    dotProp.get(pkg, `packageJson.devDependencies.${dependency}`);

const usesBabelConfig = findUp.sync(['.babelrc', '.babelrc.json', 'babel.config.json']);
const usesElectron = packageJsonContains('electron');
const usesJest = packageJsonContains('jest');
const usesNext = packageJsonContains('next');
const usesPrettier = packageJsonContains('prettier');
const usesReact = packageJsonContains('react');
const usesReactNative = packageJsonContains('react-native');
const reactVersion = usesReact ? semver.coerce(usesReact).version : undefined;

const config = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        'shared-node-browser': true,
    },
    overrides: [
        {
            files: ['*.json'],
            parser: 'jsonc-eslint-parser',
            rules: jsonc.json,
        },
        {
            files: ['*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: jsonc.json5,
        },
        {
            files: ['*.jsonc'],
            parser: 'jsonc-eslint-parser',
        },
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
    },
    plugins: ['eslint-comments', 'get-off-my-lawn', 'import', 'jsonc', 'node', 'objects', 'security', 'unicorn'],
    reportUnusedDisableDirectives: true,
    rules: {
        ...eslint,
        ...eslintComments,
        ...getOffMyLawn,
        ...imprt,
        ...jsonc.default,
        ...node,
        ...objects,
        ...security,
        ...unicorn,
    },
};

if (usesElectron) {
    dotProp.set(config, 'settings.node.allowModules', ['electron']);
}

if (usesJest) {
    dotProp.set(config, 'env.jasmine', true);
    dotProp.set(config, 'env.jest', true);
    config.plugins.push('jest');
    config.rules = {
        ...config.rules,
        ...jest,
    };
}

if (usesReact) {
    dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
    dotProp.set(config, 'settings.react.version', 'detect');
    config.plugins.push('react');
    config.rules = {
        ...config.rules,
        ...react,
    };

    if (semver.gte(reactVersion, '16.8.0')) {
        config.plugins.push('react-hooks');
        config.rules = {
            ...config.rules,
            ...reactHooks,
        };
    }

    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    if (semver.gte(reactVersion, '17.0.0')) {
        config.rules = {
            ...config.rules,
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
        };
    }

    if (usesReactNative) {
        dotProp.set(config, 'env.react-native/react-native', true);
        config.plugins.push('react-native');
        config.rules = {
            ...config.rules,
            ...reactNative,
        };
    } else {
        config.plugins.push('jsx-a11y');
        config.rules = {
            ...config.rules,
            ...jsxA11y,
        };
    }

    if (usesNext) {
        dotProp.set(config, 'settings.linkComponents', ['Link']);
    }
}

if (usesBabelConfig) {
    dotProp.set(config, 'parserOptions.babelOptions.configFile', usesBabelConfig);
    dotProp.set(config, 'parserOptions.requireConfigFile', true);
} else if (usesNext) {
    dotProp.set(config, 'parserOptions.babelOptions.presets', ['next/babel']);
} else if (usesReact) {
    dotProp.set(config, 'parserOptions.babelOptions.presets', ['@babel/preset-react']);
}

if (semver.gte(process.version, '14.18.0')) {
    config.rules['unicorn/prefer-node-protocol'] = [
        'error',
        {
            checkRequire: true,
        },
    ];
}

if (usesPrettier) {
    config.rules = {
        ...config.rules,
        ...require('eslint-plugin-jsonc').configs.prettier.rules,
        ...require('eslint-config-prettier').rules,
    };
}

module.exports = config;
