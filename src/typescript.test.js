describe('import/extensions', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    test('commonjs', () => {
        jest.doMock('./utils/dependencies', () => ({
            typescript: '4.0.0',
        }));
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {},
            tsConfig: {},
        }));

        const {overrides} = require('./typescript');
        const {rules} = overrides[0];

        expect(rules['import/extensions']).toBeUndefined();
    });

    test('esm', () => {
        jest.doMock('./utils/dependencies', () => ({
            typescript: '4.0.0',
        }));
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {type: 'module'},
            tsConfig: {},
        }));

        const {overrides} = require('./typescript');
        const {rules} = overrides[0];

        const level = rules['import/extensions'];

        expect(level).toBe('off');
    });
});
