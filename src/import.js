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
                commonjs: true,
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

if (packageJson.type === 'module' && !packageJson.scripts?.start?.includes('--es-module-specifier-resolution=node')) {
    // Need to modify rules as file extensions are mandatory in ESM, except when
    // using the experimental custom ESM specifier resolution algorithm.
    // https://nodejs.org/api/esm.html#mandatory-file-extensions
    // https://nodejs.org/api/esm.html#customizing-esm-specifier-resolution-algorithm
    config.rules['import/extensions'] = [
        'error',
        'ignorePackages',
        {
            cjs: 'never',
        },
    ];
    config.rules['import/no-useless-path-segments'] = [
        'error',
        {
            commonjs: false,
            noUselessIndex: false,
        },
    ];
}

module.exports = config;
