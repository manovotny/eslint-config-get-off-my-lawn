describe('unicorn', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    describe('no-null', () => {
        test('should remove rule when using graphql', () => {
            jest.doMock('./utils/dependencies', () => ({
                graphql: true,
            }));

            const {rules} = require('./unicorn');

            expect(rules['unicorn/no-null']).toBe(undefined);
        });
    });

    describe('prefer-node-protocol', () => {
        [
            {
                expectedCheckRequire: true,
                mockEnginesVersion: undefined,
                mockProcessVersion: '14.19.0',
            },
            {
                expectedCheckRequire: true,
                mockEnginesVersion: undefined,
                mockProcessVersion: '14.18.0',
            },
            {
                expectedCheckRequire: false,
                mockEnginesVersion: undefined,
                mockProcessVersion: '14.17.9',
            },
            {
                expectedCheckRequire: false,
                mockEnginesVersion: '10.0.0',
                mockProcessVersion: '14.19.0',
            },
            {
                expectedCheckRequire: false,
                mockEnginesVersion: '>=12.20.0',
                mockProcessVersion: '14.19.0',
            },
            {
                expectedCheckRequire: true,
                mockEnginesVersion: '^16.0.0',
                mockProcessVersion: '14.19.0',
            },
        ].forEach(({expectedCheckRequire, mockEnginesVersion, mockProcessVersion}) => {
            test(`checkRequire; engines: ${mockEnginesVersion}; process: ${mockProcessVersion}`, () => {
                jest.doMock('process', () => ({
                    version: mockProcessVersion,
                }));
                jest.doMock('./utils/files/contents', () => ({
                    packageJson: {engines: {node: mockEnginesVersion}},
                }));

                const {rules} = require('./unicorn');
                const [, {checkRequire}] = rules['unicorn/prefer-node-protocol'];

                expect(checkRequire).toBe(expectedCheckRequire);
            });
        });

        test('should remove rule when using next', () => {
            jest.doMock('./utils/dependencies', () => ({
                next: true,
            }));

            const {rules} = require('./unicorn');

            expect(rules['unicorn/prefer-node-protocol']).toBe(undefined);
        });
    });

    describe('string-content', () => {
        const unicorn = require('./unicorn');
        const patterns = Object.entries(unicorn.rules['unicorn/string-content'][1].patterns);

        patterns.forEach(([key, value]) => {
            if (value.suggest === 'https:') {
                const regex = new RegExp(key, 'u');

                describe('https', () => {
                    /* eslint-disable-next-line unicorn/string-content */
                    [
                        'http://test.com',
                        'http://test.com/path',
                        'http://www.test.com',
                        'http://www.test.com/path',
                    ].forEach((url) => {
                        test(`invalid url: ${url}`, () => {
                            const result = regex.test(url);

                            expect(result).toBe(true);
                        });
                    });

                    [
                        'http://localhost',
                        'http://localhost/',
                        'http://localhost/path',
                        'http://localhost:8080',
                        'http://localhost:8080/',
                        'http://test@localhost/',
                        'http://test.localhost',
                        'http://test.localhost/',
                        'http://test.localhost/path',
                        'http://127.0.0.1:8080',
                        'http://127.0.0.1:8080/',
                        'http://test@127.0.0.1/',
                        'http://0.0.0.0:8080',
                        'http://0.0.0.0:8080/',
                        'http://test@0.0.0.0/',
                        'https://test.com',
                        'https://test.com/path',
                        'https://localhost',
                        'https://localhost/',
                        'https://localhost/path',
                        'https://localhost:8080',
                        'https://localhost:8080/',
                        'https://test@localhost/',
                        'https://www.test.com',
                        'https://www.test.com/path',
                        'https://test.localhost',
                        'https://test.localhost/',
                        'https://test.localhost/path',
                    ].forEach((url) => {
                        test(`valid url: ${url}`, () => {
                            const result = regex.test(url);

                            expect(result).toBe(false);
                        });
                    });
                });
            }
        });
    });
});
