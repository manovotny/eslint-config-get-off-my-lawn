const imprt = require('eslint-plugin-import/config/react-native');

const {pkg} = require('./utils/files');

const reactNativeDependency = pkg.dependencies?.['react-native'] || pkg.devDependencies?.['react-native'];

const config = {
    env: {
        'react-native/react-native': true,
    },
    plugins: ['react-native'],
    rules: {
        'react-native/no-single-element-style-arrays': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/sort-styles': 'error',
    },
    settings: {
        ...imprt.settings,
    },
};

module.exports = reactNativeDependency ? config : {};
