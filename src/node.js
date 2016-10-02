module.exports = {
    'node/exports-style': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-missing-import': [
        'error',
        {
            'allowModules': [
                'electron'
            ]
        }
    ],
    'node/no-missing-require': [
        'error',
        {
            'allowModules': [
                'electron'
            ]
        }
    ],
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': [
        'error',
        {
            'allowModules': [
                'electron'
            ]
        }
    ],
    'node/no-unpublished-require': [
        'error',
        {
            'allowModules': [
                'electron'
            ]
        }
    ],
    'node/no-unsupported-features': 'error',
    'node/shebang': 'error'
};
