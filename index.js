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
const reactNative = require('./src/react-native');
const security = require('./src/security');
const unicorn = require('./src/unicorn');

const getReactVesion = () => {
    const pkg = readPkgUp.sync() || {};

    if (dotProp.get(pkg, 'pkg.dependencies.react') || dotProp.get(pkg, 'pkg.devDependencies.react')) {
        return 'detect';
    }

    return '16';
};

module.exports = {
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
        'react-native/react-native': true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    plugins: [
        'eslint-comments',
        'get-off-my-lawn',
        'import',
        'jest',
        'json',
        'jsx-a11y',
        'node',
        'objects',
        'react',
        'react-native',
        'security',
        'unicorn'
    ],
    rules: {
        ...eslint,
        ...eslintComments,
        ...getOffMyLawn,
        ...imprt,
        ...jestRules,
        ...jsxA11y,
        ...node,
        ...objects,
        ...react,
        ...reactNative,
        ...security,
        ...unicorn
    },
    settings: {
        node: {
            allowModules: ['electron']
        },
        react: {
            version: getReactVesion()
        }
    }
};
