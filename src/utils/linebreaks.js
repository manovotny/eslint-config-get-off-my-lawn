const blocks = [
    {
        blankLine: 'always',
        next: 'block-like',
        prev: '*',
    },
    {
        blankLine: 'always',
        next: '*',
        prev: 'block-like',
    },
    {
        blankLine: 'always',
        next: 'multiline-block-like',
        prev: '*',
    },
];

const breaks = [
    {
        blankLine: 'always',
        next: 'break',
        prev: '*',
    },
];

const classes = [
    {
        blankLine: 'always',
        next: 'class',
        prev: '*',
    },
];

const continues = [
    {
        blankLine: 'always',
        next: 'continue',
        prev: '*',
    },
];

const declarations = [
    {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var'],
    },
    {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
    },
];

const directives = [
    {
        blankLine: 'always',
        next: '*',
        prev: 'directive',
    },
    {
        blankLine: 'any',
        next: 'directive',
        prev: 'directive',
    },
];

const dos = [
    {
        blankLine: 'always',
        next: 'do',
        prev: '*',
    },
];

const fors = [
    {
        blankLine: 'always',
        next: 'for',
        prev: '*',
    },
];

const functions = [
    {
        blankLine: 'always',
        next: 'function',
        prev: '*',
    },
];

const ifs = [
    {
        blankLine: 'always',
        next: 'if',
        prev: '*',
    },
];

const returns = [
    {
        blankLine: 'always',
        next: 'return',
        prev: '*',
    },
];

const switches = [
    {
        blankLine: 'always',
        next: 'switch',
        prev: '*',
    },
];

const tries = [
    {
        blankLine: 'always',
        next: 'try',
        prev: '*',
    },
];

const whiles = [
    {
        blankLine: 'always',
        next: 'while',
        prev: '*',
    },
];

module.exports = [
    ...blocks,
    ...breaks,
    ...classes,
    ...continues,
    ...declarations,
    ...directives,
    ...dos,
    ...fors,
    ...functions,
    ...ifs,
    ...returns,
    ...switches,
    ...tries,
    ...whiles,
];
