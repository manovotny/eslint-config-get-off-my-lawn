const {packageJson} = require('./utils/files/contents');

const config = {
    plugins: ['import'],
    rules: {
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'error',
        'import/extensions': [
            'error',
            'never',
            {
                mjs: 'ignorePackages',
            },
        ],
        'import/first': 'error',
        'import/group-exports': 'error',
        'import/named': 'error',
        'import/namespace': [
            'error',
            {
                allowComputed: true,
            },
        ],
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-amd': 'error',
        'import/no-deprecated': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-import-module-exports': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-relative-packages': 'error',
        'import/no-self-import': 'error',
        'import/no-unresolved': [
            'error',
            {
                amd: true,
                caseSensitive: true,
                caseSensitiveStrict: true,
                commonjs: true,
            },
        ],
        'import/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true,
            },
        ],
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
            },
        ],
    },
};

if (packageJson.type === 'module') {
    // Supporting this interally until the issue is fixed natively.
    // https://github.com/import-js/eslint-plugin-import/issues/2104
    config.rules['import/extensions'] = [
        'error',
        'ignorePackages',
        {
            cjs: 'never',
        },
    ];
}

module.exports = config;
