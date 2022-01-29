module.exports = {
    plugins: ['eslint-comments'],
    rules: {
        'eslint-comments/disable-enable-pair': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        // eslint-comments/no-unlimited-disable is a duplicate of unicorn/no-abusive-eslint-disable
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
    },
};
