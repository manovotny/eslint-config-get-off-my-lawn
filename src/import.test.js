describe('import/no-useless-path-segments', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    test('packageJson.type = "module"', () => {
        jest.doMock('./utils/files/contents', () => ({
            packageJson: {type: 'module'},
        }));

        const {rules} = require('./import');

        const [, options] = rules['import/no-useless-path-segments'];
        const {commonjs, noUselessIndex} = options;

        expect(commonjs).toBe(false);
        expect(noUselessIndex).toStrictEqual(false);
    });
});
