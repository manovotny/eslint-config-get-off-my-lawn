const {readJsonSync} = require('fs-extra');

const locate = require('./locate');

const packageJson = readJsonSync(locate('package.json'), {throws: false}) || {};
const tsConfig = readJsonSync(locate('tsconfig.json'), {throws: false}) || {};

module.exports = {
    packageJson,
    tsConfig,
};
