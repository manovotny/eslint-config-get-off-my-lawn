module.exports = {
    'react/display-name': [
        'error',
        {
            ignoreTranspilerName: false
        }
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
                'div',
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
                'xmp'
            ]
        }
    ],
    'react/forbid-foreign-prop-types': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
        'error',
        {
            children: 'always',
            props: 'always'
        }
    ],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': [
        'error',
        {
            extensions: [
                '.js'
            ]
        }
    ],
    'react/jsx-first-prop-new-line': [
        'error',
        'multiline'
    ],
    'react/jsx-indent': [
        'error',
        4
    ],
    'react/jsx-indent-props': 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': [
        'error',
        {
            ignoreCase: true
        }
    ],
    'react/jsx-no-literals': [
        'error',
        {
            noStrings: true
        }
    ],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': [
        'error',
        {
            allowGlobals: true
        }
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': [
        'error',
        'disallow-in-func'
    ],
    'react/no-did-update-set-state': [
        'error',
        'disallow-in-func'
    ],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [
        'error',
        {
            ignoreStateless: true
        }
    ],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': [
        'error',
        'disallow-in-func'
    ],
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': [
        'error',
        {
            ignorePureComponents: true
        }
    ],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
};
