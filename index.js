const eslint = require('./src/eslint');
const react = require('./src/react');
const mocha = require('./src/mocha');
const unicorn = require('./src/unicorn');

module.exports = {
    env: {
        browser: true,
        es6: true,
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
        'mocha',
        'react',
        'unicorn'
    ],
    rules: Object.assign(
        eslint,
        react,
        mocha,
        unicorn
    )
};
