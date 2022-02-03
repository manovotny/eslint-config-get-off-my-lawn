describe('import/extensions', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    [
        {
            expectedConfiguration: 'never',
            expectedExtensions: {mjs: 'ignorePackages'},
            mockType: undefined,
        },
        {
            expectedConfiguration: 'ignorePackages',
            expectedExtensions: {cjs: 'never'},
            mockType: 'module',
        },
    ].forEach(({expectedConfiguration, expectedExtensions, mockType}) => {
        test(`packageJson.type: ${mockType}`, () => {
            jest.doMock('./utils/files/contents', () => ({
                packageJson: {type: mockType},
            }));

            const {rules} = require('./import');

            const [, configuraton, extensions] = rules['import/extensions'];

            expect(configuraton).toBe(expectedConfiguration);
            expect(extensions).toStrictEqual(expectedExtensions);
        });
    });
});
