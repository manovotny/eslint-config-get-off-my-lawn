const {pkg} = require('./files');

const find = (dependency) => pkg.dependencies?.[dependency] || pkg.devDependencies?.[dependency];

module.exports = {
    electron: find('electron'),
    graphql: find('graphql'),
    jest: find('jest'),
    next: find('next'),
    prettier: find('prettier'),
    react: find('react'),
    reactNative: find('react-native'),
    typescript: find('typescript'),
};
