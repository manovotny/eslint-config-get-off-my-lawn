const {join} = require('path');
const {cwd} = require('process');

const {existsSync} = require('fs-extra');

const arraify = (value) => (Array.isArray(value) ? value : [value]);

module.exports = (paths) => {
    for (const path of arraify(paths)) {
        const absolutePath = join(cwd(), path);

        if (existsSync(absolutePath)) {
            return absolutePath;
        }
    }

    return undefined;
};
