const {readJsonSync} = require('fs-extra');

const locate = require('./locate');

const packageJson = readJsonSync(locate('package.json'), {throws: false}) || {};
const jestConfigLocation = locate(['jest.config.cjs', 'jest.config.js', 'jest.config.ts']);
const jestConfig = jestConfigLocation ? require(jestConfigLocation) : {};
const tsConfig = readJsonSync(locate('tsconfig.json'), {throws: false}) || {};

module.exports = {
    jestConfig,
    packageJson,
    tsConfig,
};
