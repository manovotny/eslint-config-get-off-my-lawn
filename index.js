// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const {cwd} = require('node:process');

const dotProp = require('dot-prop');
const semver = require('semver');
const prettier = require('eslint-config-prettier').rules;

const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
const jsonc = require('./src/jsonc');
const jsxA11y = require('./src/jsx-a11y');
const jest = require('./src/jest');
const jestFormatting = require('./src/jest-formatting');
const next = require('./src/next');
const node = require('./src/node');
const objects = require('./src/objects');
const react = require('./src/react');
const reactHooks = require('./src/react-hooks');
const reactNative = require('./src/react-native');
const security = require('./src/security');
const typescript = require('./src/typescript');
const unicorn = require('./src/unicorn');
const {locate, pkg} = require('./src/utils/files');

const babelConfig = locate(['.babelrc', '.babelrc.json', 'babel.config.json']);
const electronDependency = pkg.dependencies?.electron || pkg.devDependencies?.electron;
const jestDependency = pkg.dependencies?.jest || pkg.devDependencies?.jest;
const nextDependency = pkg.dependencies?.next || pkg.devDependencies?.next;
const prettierDependency = pkg.dependencies?.prettier || pkg.devDependencies?.prettier;
const reactDependency = pkg.dependencies?.react || pkg.devDependencies?.react;
const reactNativeDependency = pkg.dependencies?.['react-native'] || pkg.devDependencies?.['react-native'];

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
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: cwd(),
            },
            plugins: ['@typescript-eslint'],
            rules: {
                ...typescript,
                ...prettier,
            },
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

if (electronDependency) {
    dotProp.set(config, 'settings.node.allowModules', ['electron']);
}

if (jestDependency) {
    dotProp.set(config, 'env.jasmine', true);
    dotProp.set(config, 'env.jest', true);
    config.plugins.push('jest', 'jest-formatting');
    config.rules = {
        ...config.rules,
        ...jest,
        ...jestFormatting,
    };
}

if (reactDependency) {
    dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
    dotProp.set(config, 'settings.react.version', 'detect');
    config.plugins.push('react');
    config.rules = {
        ...config.rules,
        ...react,
    };

    if (semver.gte(reactDependency, '16.8.0')) {
        config.plugins.push('react-hooks');
        config.rules = {
            ...config.rules,
            ...reactHooks,
        };
    }

    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    if (semver.gte(reactDependency, '17.0.0')) {
        config.rules = {
            ...config.rules,
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
        };
    }

    if (reactNativeDependency) {
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

    if (nextDependency) {
        dotProp.set(config, 'settings.linkComponents', ['Link']);
        config.plugins.push('@next/next');
        config.rules = {
            ...config.rules,
            ...next,
        };
    }
}

if (babelConfig) {
    dotProp.set(config, 'parserOptions.babelOptions.configFile', babelConfig);
    dotProp.set(config, 'parserOptions.requireConfigFile', true);
} else if (nextDependency) {
    dotProp.set(config, 'parserOptions.babelOptions.presets', ['next/babel']);
} else if (reactDependency) {
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

if (prettierDependency) {
    config.rules = {
        ...config.rules,
        ...require('eslint-plugin-jsonc').configs.prettier.rules,
        ...prettier,
    };
}

module.exports = config;
