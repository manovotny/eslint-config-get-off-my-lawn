describe('react-hooks', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    [
        {
            expectedIncludes: true,
            expectedValue: 'error',
            mockVersion: '16.9.0',
        },
        {
            expectedIncludes: true,
            expectedValue: 'error',
            mockVersion: '16.8.0',
        },
        {
            expectedIncludes: false,
            expectedValue: undefined,
            mockVersion: '16.7.9',
        },
        {
            expectedIncludes: false,
            expectedValue: undefined,
            mockVersion: '15.1.2',
        },
    ].forEach(({expectedIncludes, expectedValue, mockVersion}) => {
        test(`version: ${mockVersion}`, () => {
            jest.doMock('./utils/dependencies', () => ({
                react: mockVersion,
            }));

            const {plugins, rules} = require('./react');

            expect(plugins.includes('react-hooks')).toBe(expectedIncludes);
            expect(rules['react-hooks/exhaustive-deps']).toBe(expectedValue);
            expect(rules['react-hooks/rules-of-hooks']).toBe(expectedValue);
        });
    });
});

describe('jsx-transform', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    [
        {
            expectedValue: undefined,
            mockVersion: '17.0.0',
        },
        {
            expectedValue: undefined,
            mockVersion: '16.15.0',
        },
        {
            expectedValue: undefined,
            mockVersion: '16.14.0',
        },
        {
            expectedValue: 'error',
            mockVersion: '16.13.0',
        },
        {
            expectedValue: undefined,
            mockVersion: '15.8.0',
        },
        {
            expectedValue: undefined,
            mockVersion: '15.7.0',
        },
        {
            expectedValue: 'error',
            mockVersion: '15.6.9',
        },
        {
            expectedValue: 'error',
            mockVersion: '14.1.2',
        },
        {
            expectedValue: 'error',
            mockVersion: '1.0.0',
        },
        {
            expectedValue: 'error',
            mockVersion: '0.15.0',
        },
        {
            expectedValue: undefined,
            mockVersion: '0.14.11',
        },
        {
            expectedValue: undefined,
            mockVersion: '0.14.10',
        },
        {
            expectedValue: 'error',
            mockVersion: '0.14.9',
        },
    ].forEach(({expectedValue, mockVersion}) => {
        test(`version: ${mockVersion}`, () => {
            jest.doMock('./utils/dependencies', () => ({
                react: mockVersion,
            }));

            const {rules} = require('./react');

            expect(rules['react/jsx-uses-react']).toBe(expectedValue);
            expect(rules['react/react-in-jsx-scope']).toBe(expectedValue);
        });
    });
});
