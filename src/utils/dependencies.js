const {packageJson} = require('./files/contents');

const find = (dependency) => packageJson.dependencies?.[dependency] || packageJson.devDependencies?.[dependency];

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
