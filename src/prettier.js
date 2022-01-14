const prettier = require('eslint-config-prettier');

const {locate, pkg} = require('./utils/files');

const prettierDependency = pkg.dependencies?.prettier || pkg.devDependencies?.prettier;
const prettierConfig =
    pkg.prettier ||
    locate([
        '.prettierrc',
        '.prettierrc.json',
        '.prettierrc.yml',
        '.prettierrc.yaml',
        '.prettierrc.json5',
        '.prettierrc.js',
        '.prettierrc.cjs',
        'prettier.config.js',
        'prettier.config.cjs',
        '.prettierrc.toml',
    ]);

module.exports = prettierDependency || prettierConfig ? prettier : {};
