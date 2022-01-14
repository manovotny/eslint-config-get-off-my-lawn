const unicorn = require('./unicorn');

describe('unicorn/string-content', () => {
    const patterns = Object.entries(unicorn.rules['unicorn/string-content'][1].patterns);

    patterns.forEach(([key, value]) => {
        if (value.suggest === 'https:') {
            const regex = new RegExp(key, 'u');

            describe('https', () => {
                /* eslint-disable-next-line unicorn/string-content */
                ['http://test.com', 'http://test.com/path', 'http://www.test.com', 'http://www.test.com/path'].forEach(
                    (url) => {
                        test(`invalid url: ${url}`, () => {
                            const result = regex.test(url);

                            expect(result).toBe(true);
                        });
                    }
                );

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
