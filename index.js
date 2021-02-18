// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const dotProp = require('dot-prop');
const findUp = require('find-up');
const readPkgUp = require('read-pkg-up');
const semver = require('semver');

const babel = require('./src/babel');
const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
const json = require('./src/json');
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
    parser: '@babel/eslint-parser',
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaVersion: 2021,
        requireConfigFile: false,
        sourceType: 'module',
    },
    plugins: [
        '@babel',
        'eslint-comments',
        'get-off-my-lawn',
        'import',
        'json',
        'node',
        'objects',
        'security',
        'unicorn',
    ],
    reportUnusedDisableDirectives: true,
    rules: {
        ...babel,
        ...eslint,
        ...eslintComments,
        ...getOffMyLawn,
        ...imprt,
        ...json,
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
}

if (usesBabelConfig) {
    dotProp.set(config, 'parserOptions.babelOptions.configFile', usesBabelConfig);
    dotProp.set(config, 'parserOptions.requireConfigFile', true);
} else if (usesNext) {
    dotProp.set(config, 'parserOptions.babelOptions.presets', ['next/babel']);
} else if (usesReact) {
    dotProp.set(config, 'parserOptions.babelOptions.presets', ['@babel/preset-react']);
}

if (usesPrettier) {
    config.rules = {
        ...config.rules,
        ...require('eslint-config-prettier').rules,
        ...require('eslint-config-prettier/babel').rules,
        ...require('eslint-config-prettier/react').rules,
        ...require('eslint-config-prettier/unicorn').rules,
    };
}

module.exports = config;
