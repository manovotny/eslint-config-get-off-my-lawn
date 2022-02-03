const process = require('process');

const semver = require('semver');

const {packageJson} = require('./utils/files/contents');
const {graphql, next} = require('./utils/dependencies');

const nodeVersion = process.version;
const nodeEnginesVersion = packageJson.engines?.node ? semver.minVersion(packageJson.engines.node).version : undefined;

const config = {
    plugins: ['unicorn'],
    rules: {
        'unicorn/better-regex': 'error',
        'unicorn/catch-error-name': 'error',
        'unicorn/consistent-destructuring': 'error',
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/empty-brace-spaces': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    kebabCase: true,
                    pascalCase: true,
                },
            },
        ],
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-method-this-argument': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-array-reduce': 'error',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-document-cookie': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-invalid-remove-event-listener': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-nested-ternary': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-null': [
            'error',
            {
                checkStrictEquality: true,
            },
        ],
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-thenable': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-unused-properties': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/numeric-separators-style': 'error',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-at': 'error',
        'unicorn/prefer-code-point': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-default-parameters': 'error',
        'unicorn/prefer-dom-node-append': 'error',
        'unicorn/prefer-dom-node-dataset': 'error',
        'unicorn/prefer-dom-node-remove': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-export-from': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-json-parse-buffer': 'error',
        'unicorn/prefer-keyboard-event-key': 'error',
        'unicorn/prefer-math-trunc': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-node-protocol': [
            'error',
            {
                checkRequire: nodeEnginesVersion
                    ? semver.gte(nodeEnginesVersion, '14.18.0')
                    : semver.gte(nodeVersion, '14.18.0'),
            },
        ],
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-object-from-entries': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-prototype-methods': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-regexp-test': 'error',
        'unicorn/prefer-set-has': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-string-replace-all': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-ternary': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/relative-url-style': 'error',
        'unicorn/require-array-join-separator': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'error',
        'unicorn/require-post-message-target-origin': 'error',
        'unicorn/string-content': [
            'error',
            {
                patterns: {
                    '(?!(?=.*(localhost|0.0.0.0|127.0.0.1)))^http:': {
                        message: 'Please use `https` for better security.`.',
                        suggest: 'https:',
                    },
                },
            },
        ],
        'unicorn/template-indent': 'error',
        'unicorn/throw-new-error': 'error',
    },
};

if (next) {
    // Known issue with node protocol and Next.js.
    // https://github.com/vercel/next.js/issues/28774
    delete config.rules['unicorn/prefer-node-protocol'];
}

if (graphql) {
    // The use of `null` is a GraphQL standard / best practice.
    // https://github.com/manovotny/eslint-config-get-off-my-lawn/issues/154
    delete config.rules['unicorn/no-null'];
}

module.exports = config;
