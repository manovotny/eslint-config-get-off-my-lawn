const eslint = require('./src/eslint');
const importt = require('./src/import');
const jest = require('./src/jest');
const mocha = require('./src/mocha');
const node = require('./src/node');
const objects = require('./src/objects');
const react = require('./src/react');
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
        'json',
        'import',
        'jest',
        'mocha',
        'node',
        'objects',
        'react',
        'unicorn'
    ],
    rules: Object.assign(
        {},
        eslint,
        importt,
        jest,
        mocha,
        node,
        objects,
        react,
        unicorn
    ),
    settings: {
        node: {
            allowModules: [
                'electron'
            ]
        }
    }
};
