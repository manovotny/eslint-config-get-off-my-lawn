const {next, react} = require('./utils/dependencies');
const locate = require('./utils/files/locate');

const babelConfig = locate(['.babelrc', '.babelrc.json', 'babel.config.json']);

let config = {};

if (babelConfig) {
    config = {
        parserOptions: {
            babelOptions: {
                configFile: babelConfig,
            },
            requireConfigFile: true,
        },
    };
} else if (next) {
    config = {
        parserOptions: {
            babelOptions: {
                presets: ['next/babel'],
            },
        },
    };
} else if (react) {
    config = {
        parserOptions: {
            babelOptions: {
                presets: ['@babel/preset-react'],
            },
        },
    };
}

module.exports = config;
