const eslint = require('./src/eslint');

module.exports = {
    ecmaFeatures: {
        jsx: true,
        modules: true
    },
    env: {
        browser: true,
        es6: true,
        mocha: true,
        node: true
    },
    parser: 'babel-eslint',
    plugins: [
        'react'
    ],
    rules: Object.assign(
        eslint
    )
};
