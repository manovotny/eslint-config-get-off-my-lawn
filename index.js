const eslint = require('./src/eslint');
const react = require('./src/react');

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
        'react'
    ],
    rules: Object.assign(
        eslint,
        react
    )
};
