const semver = require('semver');
const imprt = require('eslint-plugin-import/config/react');

const {react} = require('./utils/dependencies');

const config = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['jsx-a11y', 'react', 'react-hooks'],
    rules: {
        'jsx-a11y/accessible-emoji': 'error',
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/lang': 'error',
        'jsx-a11y/media-has-caption': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
        'jsx-a11y/no-noninteractive-tabindex': 'error',
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',
        'react/button-has-type': 'error',
        'react/display-name': [
            'error',
            {
                ignoreTranspilerName: false,
            },
        ],
        'react/forbid-elements': [
            'error',
            {
                forbid: [
                    'acronym',
                    'applet',
                    'b',
                    'basefont',
                    'bgsound',
                    'big',
                    'blink',
                    'br',
                    'center',
                    'command',
                    'content',
                    'dir',
                    'element',
                    'font',
                    'frame',
                    'frameset',
                    'i',
                    'image',
                    'isindex',
                    'keygen',
                    'listing',
                    'marquee',
                    'multicol',
                    'nextid',
                    'nobr',
                    'noembed',
                    'plaintext',
                    'shadow',
                    'spacer',
                    'strike',
                    'tt',
                    'xmp',
                ],
            },
        ],
        'react/forbid-foreign-prop-types': 'error',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-boolean-value': 'error',
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                children: 'always',
                props: 'never',
            },
        ],
        'react/jsx-curly-newline': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx'],
            },
        ],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-indent': [
            'error',
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true,
            },
        ],
        'react/jsx-indent-props': 'error',
        'react/jsx-key': [
            'error',
            {
                checkKeyMustBeforeSpread: true,
            },
        ],
        'react/jsx-max-props-per-line': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react/jsx-no-script-url': [
            'error',
            [
                {
                    name: 'Link',
                    props: ['to'],
                },
            ],
        ],
        'react/jsx-no-target-blank': [
            'error',
            {
                forms: true,
                warnOnSpreadAttributes: true,
            },
        ],
        'react/jsx-no-undef': [
            'error',
            {
                allowGlobals: true,
            },
        ],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': [
            'error',
            {
                allow: 'single-child',
            },
        ],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': 'error',
        'react/jsx-tag-spacing': [
            'error',
            {
                afterOpening: 'never',
                beforeClosing: 'never',
                beforeSelfClosing: 'always',
                closingSlash: 'never',
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
        'react/no-did-update-set-state': ['error', 'disallow-in-func'],
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-invalid-html-attribute': 'error',
        'react/no-is-mounted': 'error',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': [
            'error',
            {
                noTemplateLiterals: true,
            },
        ],
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],
        'react/prefer-es6-class': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': [
            'error',
            {
                ignorePureComponents: true,
            },
        ],
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': [
            'error',
            {
                sortShapeProp: true,
            },
        ],
        'react/state-in-constructor': ['error', 'always'],
        'react/static-property-placement': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
        ...imprt.settings,
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
};

// React version when hooks were added.
// https://reactjs.org/docs/hooks-intro.html
if (react && semver.lt(react, '16.8.0')) {
    config.plugins = config.plugins.filter((plugin) => plugin !== 'react-hooks');
    delete config.rules['react-hooks/exhaustive-deps'];
    delete config.rules['react-hooks/rules-of-hooks'];
}

// React versions where JSX transform is automatically handled.
// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
if (react && semver.satisfies(react, '>=17.0.0 || ^16.14.0 || ^15.7.0 || ^0.14.10')) {
    delete config.rules['react/jsx-uses-react'];
    delete config.rules['react/react-in-jsx-scope'];
}

module.exports = react ? config : {};
