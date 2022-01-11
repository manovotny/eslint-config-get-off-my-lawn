const semver = require('semver');

const eslint = require('./eslint');
const react = require('./react');
const {pkg, tsconfig} = require('./utils/files');

const typescript = pkg.dependencies?.typescript || pkg.devDependencies?.typescript;
const typescriptVersion = typescript ? semver.coerce(typescript).version : undefined;
const typescriptVersionSpecificRules = {};
const typescriptConfigSpecificRules = {};

if (semver.gte(typescriptVersion, '3.4.0')) {
    typescriptVersionSpecificRules['@typescript-eslint/prefer-as-const'] = 'error';
}

if (semver.gte(typescriptVersion, '3.7.0')) {
    typescriptVersionSpecificRules['@typescript-eslint/prefer-nullish-coalescing'] = 'error';
    typescriptVersionSpecificRules['@typescript-eslint/prefer-optional-chain'] = 'error';
}

if (semver.gte(typescriptVersion, '3.8.0')) {
    typescriptVersionSpecificRules['@typescript-eslint/consistent-type-exports'] = [
        'error',
        {
            fixMixedExportsWithInlineTypeSpecifier: false,
        },
    ];
    typescriptVersionSpecificRules['@typescript-eslint/consistent-type-imports'] = [
        'error',
        {
            prefer: 'type-imports',
        },
    ];
}

if (semver.gte(typescriptVersion, '3.9.0')) {
    typescriptVersionSpecificRules['@typescript-eslint/prefer-ts-expect-error'] = 'error';
}

if (tsconfig.compilerOptions?.strict === false || tsconfig.compilerOptions?.strictNullChecks === false) {
    // Warning: Do not use this rule when `strictNullChecks` is disabled.
    typescriptConfigSpecificRules['@typescript-eslint/no-unnecessary-boolean-literal-compare'] = [
        'error',
        {
            allowComparingNullableBooleansToFalse: true,
            allowComparingNullableBooleansToTrue: false,
        },
    ];
}

const extendRuleOptions = (plugin, rule, optionsOverride) => {
    const value = plugin[rule];
    const valueIsArray = Array.isArray(value);
    const level = valueIsArray ? value[0] : value;
    const options = valueIsArray ? value.slice(1) : undefined;

    if (!options) {
        return [level, optionsOverride];
    }

    if (options.length === 1) {
        return [
            level,
            {
                ...options[0],
                ...optionsOverride,
            },
        ];
    }

    return [level, ...options, ...optionsOverride];
};

const disabledRulesToAvoidConflicts = {
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'func-call-spacing': 'off',
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
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    quotes: 'off',
    'require-await': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
};

const modifiedRulesToSupportTypeScript = {
    // Adds React TypeScript extension.
    'react/jsx-filename-extension': extendRuleOptions(react, 'react/jsx-filename-extension', {
        extensions: [...react['react/jsx-filename-extension'][1].extensions, '.tsx'],
    }),
    // Adds support for triple-slash directives.
    'spaced-comment': [
        'error',
        'always',
        {
            markers: ['/'],
        },
    ],
};

module.exports = {
    ...disabledRulesToAvoidConflicts,
    ...modifiedRulesToSupportTypeScript,
    ...typescriptVersionSpecificRules,
    ...typescriptConfigSpecificRules,
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/brace-style': eslint['brace-style'],
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/comma-dangle': eslint['comma-dangle'],
    '@typescript-eslint/comma-spacing': eslint['comma-spacing'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
        },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/default-param-last': eslint['default-param-last'],
    '@typescript-eslint/dot-notation': eslint['dot-notation'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/func-call-spacing': eslint['func-call-spacing'],
    '@typescript-eslint/indent': eslint.indent,
    '@typescript-eslint/keyword-spacing': eslint['keyword-spacing'],
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
    '@typescript-eslint/no-array-constructor': eslint['no-array-constructor'],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-dupe-class-members': eslint['no-dupe-class-members'],
    '@typescript-eslint/no-duplicate-imports': eslint['no-duplicate-imports'],
    '@typescript-eslint/no-empty-function': eslint['no-empty-function'],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-parens': eslint['no-extra-parens'],
    '@typescript-eslint/no-extra-semi': eslint['no-extra-semi'],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': [
        'error',
        {
            ignoreIIFE: false,
            ignoreVoid: true,
        },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': eslint['no-implied-eval'],
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': eslint['no-invalid-this'],
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': eslint['no-loop-func'],
    '@typescript-eslint/no-loss-of-precision': eslint['no-loss-of-precision'],
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
    '@typescript-eslint/no-redeclare': extendRuleOptions(eslint, 'no-redeclare', {
        ignoreDeclarationMerge: false,
    }),
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-restricted-imports': extendRuleOptions(eslint, 'no-restricted-imports', {
        paths: eslint['no-restricted-imports'][1].paths.map((path) => ({
            ...path,
            allowTypeImports: true,
        })),
    }),
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': [
        'error',
        {
            allowThrowingAny: false,
            allowThrowingUnknown: false,
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
    '@typescript-eslint/no-unused-expressions': eslint['no-unused-expressions'],
    '@typescript-eslint/no-unused-vars': eslint['no-unused-vars'],
    '@typescript-eslint/no-use-before-define': extendRuleOptions(eslint, 'no-use-before-define', {
        enums: true,
        ignoreTypeReferences: false,
        typedefs: true,
    }),
    '@typescript-eslint/no-useless-constructor': eslint['no-useless-constructor'],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/object-curly-spacing': eslint['object-curly-spacing'],
    '@typescript-eslint/padding-line-between-statements': extendRuleOptions(eslint, 'padding-line-between-statements', [
        {
            blankLine: 'always',
            next: ['interface', 'type'],
            prev: '*',
        },
    ]),
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    // Possible conflict with `unicorn/prefer-includes`?
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    // Possible conflict with `unicorn/prefer-string-starts-ends-with`?
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': eslint.quotes,
    '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
            ignoreStringArrays: true,
        },
    ],
    '@typescript-eslint/require-await': eslint['require-await'],
    '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
            checkCompoundAssignments: true,
        },
    ],
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': eslint.semi,
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/space-before-function-paren': eslint['space-before-function-paren'],
    '@typescript-eslint/space-infix-ops': eslint['space-infix-ops'],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    // you should turn the original rule off *only* for test files
    // '@typescript-eslint/unbound-method': 'off',
    // 'jest/unbound-method': 'error',
    '@typescript-eslint/unbound-method': [
        'error',
        {
            ignoreStatic: true,
        },
    ],
    '@typescript-eslint/unified-signatures': 'error',
};
