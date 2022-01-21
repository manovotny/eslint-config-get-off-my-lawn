const {pkg} = require('./files');

const find = (dependency) => pkg.dependencies?.[dependency] || pkg.devDependencies?.[dependency];

module.exports = {
    electron: find('electron'),
    jest: find('jest'),
    next: find('next'),
    prettier: find('prettier'),
    react: find('react'),
    reactNative: find('react-native'),
    typescript: find('typescript'),
};
