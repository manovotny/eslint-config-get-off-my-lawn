const chaiExpect = require('./src/chai-expect');
const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const imprt = require('./src/import');
const jsxA11y = require('./src/jsx-a11y');
const jest = require('./src/jest');
const mocha = require('./src/mocha');
const node = require('./src/node');
const objects = require('./src/objects');
const preferObjectSpread = require('./src/prefer-object-spread');
const react = require('./src/react');
const security = require('./src/security');
const unicorn = require('./src/unicorn');

module.exports = {
    env: {
        browser: true,
        es6: true,
        jasmine: true,
        jest: true,
        mocha: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: [
        'chai-expect',
        'eslint-comments',
        'import',
        'jest',
        'json',
        'jsx-a11y',
        'mocha',
        'node',
        'objects',
        'prefer-object-spread',
        'react',
        'security',
        'unicorn'
    ],
    rules: {
        ...chaiExpect,
        ...eslint,
        ...eslintComments,
        ...imprt,
        ...jest,
        ...jsxA11y,
        ...mocha,
        ...node,
        ...objects,
        ...preferObjectSpread,
        ...react,
        ...security,
        ...unicorn
    },
    settings: {
        node: {
            allowModules: [
                'electron'
            ]
        }
    }
};
