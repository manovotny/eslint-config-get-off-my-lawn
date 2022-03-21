describe('import/extensions', () => {
    beforeEach(() => {
        jest.resetModules();
    });

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
});

describe('import/no-useless-path-segments', () => {
    beforeEach(() => {
        jest.resetModules();
    });

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
});
