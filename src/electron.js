const imprt = require('eslint-plugin-import/config/electron');

const {pkg} = require('./utils/files');

const electronDependency = pkg.dependencies?.electron || pkg.devDependencies?.electron;

const config = {
    settings: {
        ...imprt.settings,
        node: {
            allowModules: ['electron'],
        },
    },
};

module.exports = electronDependency ? config : {};
