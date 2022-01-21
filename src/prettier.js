const config = require('eslint-config-prettier');

const {prettier} = require('./utils/dependencies');
const {locate, pkg} = require('./utils/files');

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

module.exports = prettier || prettierConfig ? config : {};
