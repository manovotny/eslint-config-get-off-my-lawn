const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');
const semver = require('semver');

const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
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

const getUsage = (dependency) =>
    dotProp.get(pkg, `package.dependencies.${dependency}`) || dotProp.get(pkg, `package.devDependencies.${dependency}`);

const config = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['eslint-comments', 'get-off-my-lawn', 'import', 'json', 'node', 'objects', 'security', 'unicorn'],
    rules: {
        ...eslint,
        ...eslintComments,
        ...getOffMyLawn,
        ...imprt,
        ...node,
        ...objects,
        ...security,
        ...unicorn
    }
};

if (getUsage('electron')) {
    dotProp.set(config, 'settings.node.allowModules', ['electron']);
}

if (getUsage('jest')) {
    dotProp.set(config, 'env.jasmine', true);
    dotProp.set(config, 'env.jest', true);
    config.plugins.push('jest');
    config.rules = {
        ...config.rules,
        ...jest
    };
}

const reactUsage = getUsage('react');
const reactVersion = reactUsage ? semver.coerce(reactUsage).version : undefined;

if (reactVersion) {
    dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
    dotProp.set(config, 'settings.react.version', 'detect');
    config.plugins.push('react');
    config.rules = {
        ...config.rules,
        ...react
    };

    if (semver.gte(reactVersion, '16.8.0')) {
        config.plugins.push('react-hooks');
        config.rules = {
            ...config.rules,
            ...reactHooks
        };
    }

    if (getUsage('react-native')) {
        dotProp.set(config, 'env.react-native/react-native', true);
        config.plugins.push('react-native');
        config.rules = {
            ...config.rules,
            ...reactNative
        };
    } else {
        config.plugins.push('jsx-a11y');
        config.rules = {
            ...config.rules,
            ...jsxA11y
        };
    }
}

if (getUsage('prettier')) {
    config.rules = {
        ...config.rules,
        ...require('eslint-config-prettier').rules,
        ...require('eslint-config-prettier/babel').rules,
        ...require('eslint-config-prettier/react').rules,
        ...require('eslint-config-prettier/unicorn').rules
    };
}

module.exports = config;
