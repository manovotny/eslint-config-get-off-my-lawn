const {readJsonSync} = require('fs-extra');

const locate = require('./locate');

const jestConfigLocation = locate(['jest.config.cjs', 'jest.config.js', 'jest.config.ts']);

const getJestConfig = () => {
    if (jestConfigLocation) {
        try {
            require(jestConfigLocation);
        } catch {
            return {};
        }
    }

    return {};
};

const packageJson = readJsonSync(locate('package.json'), {throws: false}) || {};
const jestConfig = getJestConfig();
const tsConfig = readJsonSync(locate('tsconfig.json'), {throws: false}) || {};

module.exports = {
    jestConfig,
    packageJson,
    tsConfig,
};
