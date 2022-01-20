const jsonc = require('eslint-plugin-jsonc');

const prettier = require('./prettier');

const rules = {
    'jsonc/array-bracket-newline': 'error',
    'jsonc/array-bracket-spacing': ['error', 'never'],
    'jsonc/comma-dangle': ['error', 'only-multiline'],
    'jsonc/comma-style': ['error', 'last'],
    'jsonc/indent': 'error',
    'jsonc/key-spacing': [
        'error',
        {
            afterColon: true,
            beforeColon: false,
            mode: 'strict',
        },
    ],
    'jsonc/no-bigint-literals': 'error',
    'jsonc/no-binary-expression': 'error',
    'jsonc/no-binary-numeric-literals': 'error',
    'jsonc/no-dupe-keys': 'error',
    'jsonc/no-escape-sequence-in-identifier': 'error',
    'jsonc/no-floating-decimal': 'error',
    'jsonc/no-hexadecimal-numeric-literals': 'error',
    'jsonc/no-multi-str': 'error',
    'jsonc/no-number-props': 'error',
    'jsonc/no-octal': 'error',
    'jsonc/no-octal-escape': 'error',
    'jsonc/no-octal-numeric-literals': 'error',
    'jsonc/no-parenthesized': 'error',
    'jsonc/no-plus-sign': 'error',
    'jsonc/no-regexp-literals': 'error',
    'jsonc/no-sparse-arrays': 'error',
    'jsonc/no-template-literals': 'error',
    'jsonc/no-undefined-value': 'error',
    'jsonc/no-unicode-codepoint-escapes': 'error',
    'jsonc/no-useless-escape': 'error',
    'jsonc/object-curly-newline': [
        'error',
        {
            consistent: true,
        },
    ],
    'jsonc/object-curly-spacing': ['error', 'never'],
    'jsonc/object-property-newline': 'error',
    'jsonc/quote-props': 'error',
    'jsonc/quotes': [
        'error',
        'double',
        {
            avoidEscape: false,
        },
    ],
    'jsonc/space-unary-ops': 'error',
};

const jsonOnly = {
    'jsonc/no-comments': 'error',
    'jsonc/valid-json-number': 'error',
};

const json5Only = {
    'jsonc/no-infinity': 'error',
    'jsonc/no-nan': 'error',
};

const prettierRules = prettier.rules ? jsonc.configs.prettier.rules : {};

module.exports = {
    ignorePatterns: ['package-lock.json'],
    overrides: [
        {
            files: ['*.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                ...rules,
                ...jsonOnly,
                ...prettierRules,
            },
        },
        {
            files: ['*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                ...rules,
                ...json5Only,
                ...prettierRules,
            },
        },
        {
            files: ['*.jsonc'],
            parser: 'jsonc-eslint-parser',
            rules: {
                ...rules,
                ...prettierRules,
            },
        },
    ],
    plugins: ['jsonc'],
};
