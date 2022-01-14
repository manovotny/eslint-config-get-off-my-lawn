const {join} = require('node:path');
const {cwd} = require('node:process');

const {existsSync, readJsonSync} = require('fs-extra');

const locate = (paths) => {
    for (const path of paths) {
        if (existsSync(join(cwd(), path))) {
            return path;
        }
    }

    return undefined;
};
const pkg = readJsonSync(join(cwd(), 'package.json'), {throws: false}) || {};
const tsconfig = readJsonSync(join(cwd(), 'tsconfig.json'), {throws: false}) || {};

module.exports = {
    locate,
    pkg,
    tsconfig,
};
