const imprt = require('eslint-plugin-import/config/react-native');

const {reactNative} = require('./utils/dependencies');

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

module.exports = reactNative ? config : {};
