# eslint-config-get-off-my-lawn [![Build Status](https://travis-ci.org/manovotny/eslint-config-get-off-my-lawn.svg?branch=master)](https://travis-ci.org/manovotny/eslint-config-get-off-my-lawn)

> A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

![eslint-config-get-off-my-lawn](assets/logo.jpg)

As developers, we spend more time reading code than writing it. These rules aim to make reading JavaScript a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can get off my lawn! ... Or extend the rules and override them with the ones that bother you. Either way.

This config also comes with the following plugins, and corresponding rules, baked in.

-   [babel-eslint](https://www.npmjs.com/package/babel-eslint)
-   [eslint](https://www.npmjs.com/package/eslint)
-   [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
-   [eslint-plugin-get-off-my-lawn](https://www.npmjs.com/package/eslint-plugin-get-off-my-lawn)
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
-   [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
-   [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
-   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
-   [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
-   [eslint-plugin-objects](https://www.npmjs.com/package/eslint-plugin-objects)
-   [eslint-plugin-prefer-object-spread](https://www.npmjs.com/package/eslint-plugin-prefer-object-spread)
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
-   [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
-   [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

Each and every single rule has been meticulously poured over and purposefully hand picked or excluded.

## Install

```
$ yarn add eslint eslint-config-get-off-my-lawn --dev
```

## Usage

Create an ESLint config in your `package.json` or `.eslintrc.js` file.

### package.json

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "extends": "get-off-my-lawn",
        "rules": {
            // enable additional rules, override rule options, or disable rules
        }
    }
}
```

### .eslintrc.js

```js
module.exports = {
    extends: 'get-off-my-lawn',
    rules: {
        // enable additional rules, override rule options, or disable rules
    }
};
```

## Usage With Prettier

Love eslint-config-get-off-my-lawn? Love [prettier](https://prettier.io/)? Well you're in luck!

Get the best of both worlds with [eslint-config-get-off-my-lawn-prettier](https://github.com/manovotny/eslint-config-get-off-my-lawn-prettier).

## Related

-   [stylelint-config-get-off-my-lawn](https://www.npmjs.com/package/stylelint-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

## License

MIT © [Michael Novotny](http://manovotny.com)
