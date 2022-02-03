const {jest} = require('./utils/dependencies');

const config = {
    env: {
        jasmine: true,
        jest: true,
    },
    plugins: ['jest', 'jest-formatting'],
    rules: {
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'test',
                withinDescribe: 'test',
            },
        ],
        'jest/expect-expect': [
            'error',
            {
                assertFunctionNames: ['**.assert*', '**.expect*', 'assert*', 'expect*'],
            },
        ],
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-restricted-matchers': [
            'error',
            {
                toBeFalsy: 'Use `.toBe(false)` instead.',
                toBeTruthy: 'Use `.toBe(true)` instead.',
            },
        ],
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': [
            'error',
            {
                alwaysAwait: true,
            },
        ],
        'jest/valid-title': 'error',
        'jest-formatting/padding-around-after-all-blocks': 'error',
        'jest-formatting/padding-around-after-each-blocks': 'error',
        'jest-formatting/padding-around-before-all-blocks': 'error',
        'jest-formatting/padding-around-before-each-blocks': 'error',
        'jest-formatting/padding-around-describe-blocks': 'error',
        'jest-formatting/padding-around-expect-groups': 'error',
        'jest-formatting/padding-around-test-blocks': 'error',
    },
};

module.exports = jest ? config : {};
