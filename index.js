const eslint = require('./src/eslint');
const eslintComments = require('./src/eslint-comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
const jsxA11y = require('./src/jsx-a11y');
const jest = require('./src/jest');
const node = require('./src/node');
const objects = require('./src/objects');
const react = require('./src/react');
const security = require('./src/security');
const unicorn = require('./src/unicorn');

module.exports = {
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true
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
        'security',
        'unicorn'
    ],
    rules: {
        ...eslint,
        ...eslintComments,
        ...getOffMyLawn,
        ...imprt,
        ...jest,
        ...jsxA11y,
        ...node,
        ...objects,
        ...react,
        ...security,
        ...unicorn
    },
    settings: {
        node: {
            allowModules: ['electron']
        }
    }
};
