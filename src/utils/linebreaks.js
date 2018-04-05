/* eslint-disable sort-keys */
const blocks = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'block-like'
    },
    {
        blankLine: 'always',
        prev: 'block-like',
        next: '*'
    },
    {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-block-like'
    }
];

const breaks = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'break'
    }
];

const classes = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'class'
    }
];

const continues = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'continue'
    }
];

const declarations = [
    {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
    },
    {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
    }
];

const directives = [
    {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
    },
    {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
    }
];

const dos = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'do'
    }
];

const fors = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'for'
    }
];

const functions = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'function'
    }
];

const ifs = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'if'
    }
];

const returns = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'return'
    }
];

const switches = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'switch'
    }
];

const tries = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'try'
    }
];

const whiles = [
    {
        blankLine: 'always',
        prev: '*',
        next: 'while'
    }
];
/* eslint-enable */

module.exports = Array.prototype.concat(
    'error',
    blocks,
    breaks,
    classes,
    continues,
    declarations,
    directives,
    dos,
    fors,
    functions,
    ifs,
    returns,
    switches,
    tries,
    whiles
);
