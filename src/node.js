module.exports = {
    'node/exports-style': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': [
        'error',
        {
            allowModules: [
                'electron'
            ]
        }
    ],
    'node/no-missing-require': [
        'error',
        {
            allowModules: [
                'electron'
            ]
        }
    ],
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error'
};
