const {locate, pkg} = require('./utils/files');

const babelConfig = locate(['.babelrc', '.babelrc.json', 'babel.config.json']);
const nextDependency = pkg.dependencies?.next || pkg.devDependencies?.next;
const reactDependency = pkg.dependencies?.react || pkg.devDependencies?.react;

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
} else if (nextDependency) {
    config = {
        parserOptions: {
            babelOptions: {
                presets: ['next/babel'],
            },
        },
    };
} else if (reactDependency) {
    config = {
        parserOptions: {
            babelOptions: {
                presets: ['@babel/preset-react'],
            },
        },
    };
}

module.exports = config;
