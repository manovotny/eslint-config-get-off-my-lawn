const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');

const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
const jsxA11y = require('./src/jsx-a11y');
const jestRules = require('./src/jest');
const node = require('./src/node');
const objects = require('./src/objects');
const react = require('./src/react');
const reactHooks = require('./src/react-hooks');
const reactNative = require('./src/react-native');
const security = require('./src/security');
const unicorn = require('./src/unicorn');

const pkg = readPkgUp.sync() || {};

const detectUsage = (dependency) =>
    dotProp.get(pkg, `pkg.dependencies.${dependency}`) || dotProp.get(pkg, `pkg.devDependencies.${dependency}`);

const config = {
    env: {
        browser: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2019,
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

if (detectUsage('electron')) {
    dotProp.set(config, 'settings.node.allowModules', ['electron']);
}

if (detectUsage('jest')) {
    dotProp.set(config, 'env.jasmine', true);
    dotProp.set(config, 'env.jest', true);
    config.plugins.push('jest');
    config.rules = {
        ...config.rules,
        ...jestRules
    };
}

if (detectUsage('react')) {
    dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
    dotProp.set(config, 'settings.react.version', 'detect');
    config.plugins.push('react');
    config.plugins.push('react-hooks');
    config.rules = {
        ...config.rules,
        ...react,
        ...reactHooks
    };

    if (detectUsage('react-native')) {
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

if (detectUsage('prettier')) {
    config.rules = {
        ...config.rules,
        ...require('eslint-config-prettier'),
        ...require('eslint-config-prettier/babel'),
        ...require('eslint-config-prettier/react'),
        ...require('eslint-config-prettier/unicorn')
    };
}

module.exports = config;
