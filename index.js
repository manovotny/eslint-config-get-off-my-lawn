// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const {mergeAndConcat} = require('merge-anything');

const babel = require('./src/babel');
const electron = require('./src/electron');
const eslint = require('./src/eslint');
const comments = require('./src/comments');
const getOffMyLawn = require('./src/get-off-my-lawn');
const imprt = require('./src/import');
const jest = require('./src/jest');
const json = require('./src/json');
const next = require('./src/next');
const node = require('./src/node');
const objects = require('./src/objects');
const prettier = require('./src/prettier');
const react = require('./src/react');
const reactNative = require('./src/react-native');
const security = require('./src/security');
const typescript = require('./src/typescript');
const unicorn = require('./src/unicorn');

const config = mergeAndConcat(
    // Order of these doesn't matter.
    comments,
    babel,
    electron,
    eslint,
    getOffMyLawn,
    imprt,
    jest,
    json,
    next,
    node,
    objects,
    react,
    reactNative,
    security,
    unicorn,
    // These need to be listed last, and in this order, to override
    // or modify rules in the various configs above, as needed.
    typescript,
    prettier
);

module.exports = config;
