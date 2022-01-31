const {cwd} = require('process');

const semver = require('semver');
const imprt = require('eslint-plugin-import/config/typescript');

const eslint = require('./eslint');
const {jest, prettier, react, typescript} = require('./utils/dependencies');
const {jestConfig, tsConfig} = require('./utils/files/contents');

const prettierRules = prettier ? require('./prettier').rules : {};

const modifiedRulesToSupportTypeScript = {
    ...imprt.rules,
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'func-call-spacing': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default-member': 'off',
    indent: 'off',
    'keyword-spacing': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-loss-of-precision': 'off',
    'no-redeclare': 'off',
    'no-restricted-imports': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    quotes: 'off',
    'react/jsx-filename-extension': [
        'error',
        {
            extensions: ['.jsx', '.tsx'],
        },
    ],
    'require-await': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    // Adds support for triple-slash directives.
    'spaced-comment': [
        'error',
        'always',
        {
            markers: ['/'],
        },
    ],
};

const config = {
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: cwd(),
    },
    plugins: ['@typescript-eslint'],
    rules: {
        ...modifiedRulesToSupportTypeScript,
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/brace-style': eslint.rules['brace-style'],
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/comma-dangle': eslint.rules['comma-dangle'],
        '@typescript-eslint/comma-spacing': eslint.rules['comma-spacing'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'never',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-exports': [
            'error',
            {
                fixMixedExportsWithInlineTypeSpecifier: false,
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
        '@typescript-eslint/default-param-last': eslint.rules['default-param-last'],
        '@typescript-eslint/dot-notation': eslint.rules['dot-notation'],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/func-call-spacing': eslint.rules['func-call-spacing'],
        '@typescript-eslint/indent': eslint.rules.indent,
        '@typescript-eslint/keyword-spacing': eslint.rules['keyword-spacing'],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                multilineDetection: 'brackets',
                singleline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
            },
        ],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-array-constructor': eslint.rules['no-array-constructor'],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-dupe-class-members': eslint.rules['no-dupe-class-members'],
        '@typescript-eslint/no-duplicate-imports': eslint.rules['no-duplicate-imports'],
        '@typescript-eslint/no-empty-function': eslint.rules['no-empty-function'],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-parens': eslint.rules['no-extra-parens'],
        '@typescript-eslint/no-extra-semi': eslint.rules['no-extra-semi'],
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': [
            'error',
            {
                ignoreIIFE: false,
                ignoreVoid: true,
            },
        ],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': eslint.rules['no-implied-eval'],
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-invalid-this': eslint.rules['no-invalid-this'],
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-loop-func': eslint.rules['no-loop-func'],
        '@typescript-eslint/no-loss-of-precision': eslint.rules['no-loss-of-precision'],
        '@typescript-eslint/no-meaningless-void-operator': [
            'error',
            {
                checkNever: true,
            },
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-redeclare': [
            'error',
            {
                ...eslint.rules['no-redeclare'][1],
                ignoreDeclarationMerge: false,
            },
        ],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-imports': [
            'error',
            {
                paths: eslint.rules['no-restricted-imports'][1].paths.map((path) => ({
                    ...path,
                    allowTypeImports: true,
                })),
            },
        ],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': [
            'error',
            {
                allowThrowingAny: false,
                allowThrowingUnknown: false,
            },
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
            'error',
            {
                allowComparingNullableBooleansToFalse: true,
                allowComparingNullableBooleansToTrue: false,
            },
        ],
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unused-expressions': eslint.rules['no-unused-expressions'],
        '@typescript-eslint/no-unused-vars': eslint.rules['no-unused-vars'],
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                enums: true,
                ignoreTypeReferences: false,
                typedefs: true,
            },
        ],
        '@typescript-eslint/no-useless-constructor': eslint.rules['no-useless-constructor'],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/object-curly-spacing': eslint.rules['object-curly-spacing'],
        '@typescript-eslint/padding-line-between-statements': [
            ...eslint.rules['padding-line-between-statements'],
            {
                blankLine: 'always',
                next: ['interface', 'type'],
                prev: '*',
            },
        ],
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        // Possible conflict with `unicorn/prefer-includes`?
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-return-this-type': 'error',
        // Possible conflict with `unicorn/prefer-string-starts-ends-with`?
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/quotes': eslint.rules.quotes,
        '@typescript-eslint/require-array-sort-compare': [
            'error',
            {
                ignoreStringArrays: true,
            },
        ],
        '@typescript-eslint/require-await': eslint.rules['require-await'],
        '@typescript-eslint/restrict-plus-operands': [
            'error',
            {
                checkCompoundAssignments: true,
            },
        ],
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': eslint.rules.semi,
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        '@typescript-eslint/space-before-function-paren': eslint.rules['space-before-function-paren'],
        '@typescript-eslint/space-infix-ops': eslint.rules['space-infix-ops'],
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': [
            'error',
            {
                ignoreStatic: true,
            },
        ],
        '@typescript-eslint/unified-signatures': 'error',
        // Since rules from `overrides` come after the base rules specified in the ESLint
        // config, we need to reapply the prettier rules.
        ...prettierRules,
    },
    settings: {
        ...imprt.settings,
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};

if (!react) {
    // Need to remove if React isn't used, otherwise ESLint will error.
    delete config.rules['react/jsx-filename-extension'];
}

if (typescript && semver.lt(typescript, '3.4.0')) {
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-as-const.md#when-not-to-use-it
    delete config.rules['@typescript-eslint/prefer-as-const'];
}

if (typescript && semver.lt(typescript, '3.7.0')) {
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md#when-not-to-use-it
    delete config.rules['@typescript-eslint/prefer-nullish-coalescing'];
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md#when-not-to-use-it
    delete config.rules['@typescript-eslint/prefer-optional-chain'];
}

if (typescript && semver.lt(typescript, '3.8.0')) {
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md#when-not-to-use-it
    delete config.rules['@typescript-eslint/consistent-type-exports'];
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md#when-not-to-use-it
    delete config.rules['@typescript-eslint/consistent-type-imports'];
}

if (typescript && semver.lt(typescript, '3.9.0')) {
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md#when-not-to-use-it
    delete config.rules['@typescript-eslint/prefer-ts-expect-error'];
}

if (!tsConfig.compilerOptions?.strict && !tsConfig.compilerOptions?.strictNullChecks) {
    // Warning: Do not use this rule when `strictNullChecks` is disabled.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md#rule-details
    delete config.rules['@typescript-eslint/no-unnecessary-boolean-literal-compare'];
}

const overrides = [config];

if (jest) {
    const testMatch = jestConfig?.testMatch || ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'];

    overrides.push({
        files: testMatch,
        rules: {
            // If you're working with `jest`, you can use eslint-plugin-jest's version of this rule
            // to lint your test files, which knows when it's ok to pass an unbound method to
            // `expect` calls.
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.md
            '@typescript-eslint/unbound-method': 'off',
            'jest/unbound-method': [
                'error',
                {
                    ignoreStatic: true,
                },
            ],
        },
    });
}

module.exports = typescript ? {overrides} : {};
