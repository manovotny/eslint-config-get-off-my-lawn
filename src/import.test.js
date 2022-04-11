const Chance = require('chance');

const chance = new Chance();

describe('import/extensions', () => {
    test('cjs', () => {
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {},
        }));

        const {rules} = require('./import');

        const [, option, config] = rules['import/extensions'];

        expect(option).toBe('never');
        expect(config.mjs).toBe('ignorePackages');
    });

    test('esm', () => {
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {type: 'module'},
        }));

        const {rules} = require('./import');

        const [, option, config] = rules['import/extensions'];

        expect(option).toBe('ignorePackages');
        expect(config.cjs).toBe('never');
    });

    test('esm + custom specifier resolution algorithm', () => {
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {
                scripts: {
                    start: `${chance.word()} --es-module-specifier-resolution=node ${chance.word()}`,
                },
                type: 'module',
            },
        }));

        const {rules} = require('./import');

        const [, option] = rules['import/extensions'];

        expect(option).toBe('never');
    });
});

describe('import/no-useless-path-segments', () => {
    test('esm', () => {
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {type: 'module'},
        }));

        const {rules} = require('./import');

        const [, options] = rules['import/no-useless-path-segments'];
        const {commonjs, noUselessIndex} = options;

        expect(commonjs).toBe(false);
        expect(noUselessIndex).toBe(false);
    });

    test('esm + custom specifier resolution algorithm', () => {
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {
                scripts: {
                    start: `${chance.word()} --es-module-specifier-resolution=node ${chance.word()}`,
                },
                type: 'module',
            },
        }));

        const {rules} = require('./import');

        const [, options] = rules['import/no-useless-path-segments'];
        const {commonjs, noUselessIndex} = options;

        expect(commonjs).toBe(true);
        expect(noUselessIndex).toBe(true);
    });
});
