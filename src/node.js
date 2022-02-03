module.exports = {
    plugins: ['node'],
    rules: {
        'node/callback-return': 'error',
        'node/exports-style': 'error',
        'node/handle-callback-err': 'error',
        'node/no-callback-literal': 'error',
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-extraneous-import': 'error',
        'node/no-extraneous-require': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-sync': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'error',
        'node/no-unpublished-require': 'error',
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-unsupported-features/node-builtins': 'error',
        // While the `Buffer` class is available within the global scope, it is still recommended to explicitly reference it via an import or require statement.
        // https://nodejs.org/api/buffer.html#buffer
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/console': ['error', 'always'],
        // The `process` object provides information about, and control over, the current Node.js process. While it is available as a global, it is recommended to explicitly access it via require or import.
        // https://nodejs.org/api/process.html#process
        'node/prefer-global/process': ['error', 'never'],
        'node/prefer-global/text-decoder': ['error', 'always'],
        'node/prefer-global/text-encoder': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error',
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
    },
};
