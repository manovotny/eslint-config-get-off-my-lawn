const imprt = require('eslint-plugin-import/config/electron');

const {electron} = require('./utils/dependencies');

const config = {
    settings: {
        ...imprt.settings,
        node: {
            allowModules: ['electron'],
        },
    },
};

module.exports = electron ? config : {};
