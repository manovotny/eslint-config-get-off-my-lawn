# eslint-config-get-off-my-lawn

> A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

![eslint-config-get-off-my-lawn](.github/logo.jpg)

As developers, we spend more time reading code than writing it. These rules aim to make reading JavaScript a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can get off my lawn! ... Or extend the rules and override them with the ones that bother you. Either way. 😊

This config also comes with the following plugins, and corresponding rules, baked in.

-   [eslint](https://www.npmjs.com/package/eslint)
-   [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
-   [eslint-plugin-get-off-my-lawn](https://www.npmjs.com/package/eslint-plugin-get-off-my-lawn)
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
-   [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
-   [eslint-plugin-jest-formatting](https://www.npmjs.com/package/eslint-plugin-jest-formatting)
-   [eslint-plugin-jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc)
-   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
-   [eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next)
-   [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
-   [eslint-plugin-objects](https://www.npmjs.com/package/eslint-plugin-objects)
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
-   [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)
-   [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
-   [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
-   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

Each and every single rule has been meticulously poured over and purposefully hand picked or excluded.

eslint-config-get-off-my-lawn will automatically enable and disable plugins (and thus rules) based on your `package.json` dependencies. Not using React? Cool. eslint-plugin-jsx-a11y, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-react-native won't be included. Not using a React version that supports hooks? eslint-plugin-react-hooks will be disabled. Not a React Native project? No problem. Those rules won't be included. I think you get the idea... 😉

## Install

### NPM

```
$ npm i eslint eslint-config-get-off-my-lawn --save-dev
```

### Yarn

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
    },
};
```

Once your rules are configured, we recommend running the following command in your `package.json` as an [npm script](https://docs.npmjs.com/cli/v7/using-npm/scripts).

```
eslint . --ext .js,.json
```

Supported extensions:

-   `.js`
-   `.jsx`
-   `.json`
-   `.json5`
-   `.jsonc`
-   `.ts`
-   `.tsx`

## Usage With Prettier

Love eslint-config-get-off-my-lawn? Love [prettier](https://prettier.io/)? Well you're in luck!

eslint-config-get-off-my-lawn will automatically detect if your project is using prettier and it will apply [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with prettier.

## Usage With TypeScript

But what about TypeScript? Don't worry, we got you!

eslint-config-get-off-my-lawn will automatically detect if your project is using TypeScript and it will configure and enable [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) for you. How's that for handy?

## Related

-   [prettier-config-get-off-my-lawn](https://www.npmjs.com/package/prettier-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) of Prettier rules to produce beautiful, readable code.
-   [stylelint-config-get-off-my-lawn](https://www.npmjs.com/package/stylelint-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

## License

MIT © [Michael Novotny](http://manovotny.com)
