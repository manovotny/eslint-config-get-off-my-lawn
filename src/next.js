const {next} = require('./utils/dependencies');

const config = {
    plugins: ['@next/next'],
    rules: {
        '@next/next/google-font-display': 'error',
        '@next/next/google-font-preconnect': 'error',
        '@next/next/inline-script-id': 'error',
        '@next/next/link-passhref': 'error',
        '@next/next/next-script-for-ga': 'error',
        '@next/next/no-css-tags': 'error',
        '@next/next/no-document-import-in-page': 'error',
        '@next/next/no-duplicate-head': 'error',
        '@next/next/no-head-element': 'error',
        '@next/next/no-head-import-in-document': 'error',
        '@next/next/no-html-link-for-pages': 'error',
        '@next/next/no-img-element': 'error',
        '@next/next/no-page-custom-font': 'error',
        '@next/next/no-script-in-document': 'error',
        '@next/next/no-script-in-head': 'error',
        '@next/next/no-server-import-in-page': 'error',
        '@next/next/no-sync-scripts': 'error',
        '@next/next/no-title-in-document-head': 'error',
        '@next/next/no-typos': 'error',
        '@next/next/no-unwanted-polyfillio': 'error',
    },
    settings: {
        linkComponents: ['Link'],
    },
};

module.exports = next ? config : {};
