describe('unicorn', () => {
    describe('no-null', () => {
        test('should remove rule when using graphql', () => {
            jest.doMock('./utils/dependencies', () => ({
                graphql: true,
            }));

            const {rules} = require('./unicorn');

            expect(rules['unicorn/no-null']).toBeUndefined();
        });
    });

    describe('prefer-node-protocol', () => {
        [
            {
                expectedCheckRequire: false,
                mockEnginesVersion: '12.20.0',
            },
            {
                expectedCheckRequire: false,
                mockEnginesVersion: '14.17.0',
            },
            {
                expectedCheckRequire: true,
                mockEnginesVersion: '~14.18.0',
            },
            {
                expectedCheckRequire: true,
                mockEnginesVersion: '^16.0.0',
            },
        ].forEach(({expectedCheckRequire, mockEnginesVersion}) => {
            test(`checkRequire; engines: ${mockEnginesVersion}`, () => {
                jest.doMock('./utils/files/contents', () => ({
                    packageJson: {engines: {node: mockEnginesVersion}},
                }));

                const {rules} = require('./unicorn');
                const [, {checkRequire}] = rules['unicorn/prefer-node-protocol'];

                expect(checkRequire).toBe(expectedCheckRequire);
            });
        });

        [
            {
                expectedToHaveRuleDefined: false,
                mockEnginesVersion: undefined,
            },
            {
                expectedToHaveRuleDefined: false,
                mockEnginesVersion: '^10.0.0',
            },
            {
                expectedToHaveRuleDefined: false,
                mockEnginesVersion: '12.19.0',
            },
            {
                expectedToHaveRuleDefined: false,
                mockEnginesVersion: '13.0.0',
            },
            {
                expectedToHaveRuleDefined: false,
                mockEnginesVersion: '14.13.0',
            },
            {
                expectedToHaveRuleDefined: true,
                mockEnginesVersion: '14.13.1',
            },
            {
                expectedToHaveRuleDefined: false,
                mockEnginesVersion: '^15.0.0',
            },
            {
                expectedToHaveRuleDefined: true,
                mockEnginesVersion: '16.0.0',
            },
        ].forEach(({expectedToHaveRuleDefined, mockEnginesVersion}) => {
            test(`to have rule defined; engines: ${mockEnginesVersion}`, () => {
                jest.doMock('./utils/files/contents', () => ({
                    packageJson: {engines: {node: mockEnginesVersion}},
                }));

                const {rules} = require('./unicorn');

                expect(Object.hasOwn(rules, 'unicorn/prefer-node-protocol')).toBe(expectedToHaveRuleDefined);
            });
        });

        test('should remove rule when using next', () => {
            jest.doMock('./utils/dependencies', () => ({
                next: '12.0.0',
            }));

            const {rules} = require('./unicorn');

            expect(rules['unicorn/prefer-node-protocol']).toBeUndefined();
        });
    });

    describe('string-content', () => {
        const unicorn = require('./unicorn');
        const patterns = Object.entries(unicorn.rules['unicorn/string-content'][1].patterns);

        patterns.forEach(([key, value]) => {
            if (value.suggest === 'https:') {
                const regex = new RegExp(key, 'u');

                describe('https', () => {
                    /* eslint-disable unicorn/string-content */
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
                    /* eslint-enable */

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
                        // Valid namespace urls when working with html and svg.
                        'http://www.w3.org/1999/xhtml',
                        'http://www.w3.org/2000/svg',
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
