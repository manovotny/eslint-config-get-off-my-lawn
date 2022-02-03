const {readJsonSync} = require('fs-extra');

const locate = require('./locate');

const packageJson = readJsonSync(locate('package.json'), {throws: false}) || {};
const jestConfig =
    readJsonSync(locate(['jest.config.js', 'jest.config.ts']), {throws: false}) || packageJson.jest || {};
const tsConfig = readJsonSync(locate('tsconfig.json'), {throws: false}) || {};

module.exports = {
    jestConfig,
    packageJson,
    tsConfig,
};
