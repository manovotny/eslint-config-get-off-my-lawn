# eslint-config-get-off-my-lawn

> A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

![eslint-config-get-off-my-lawn](assets/logo.jpg)

As developers, we spend more time reading code than writing it. These rules aim to make reading JavaScript a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can get off my lawn! ... Or extend the rules and override them with the ones that bother you. Either way.

This config also comes with the following plugins, and corresponding rules, baked in.

* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
* [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) (which also works well for linting [Jest](https://facebook.github.io/jest/))
* [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
* [eslint-plugin-objects](https://www.npmjs.com/package/eslint-plugin-objects)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

Each and every single rule has been meticulously poured over and purposefully hand picked or excluded.

## Install

```
$ npm i --save-dev eslint-config-get-off-my-lawn
```

## Usage

Create an ESLint config in your `package.json` or `.eslintrc.js` file.

### package.json

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "get-off-my-lawn"
	}
}
```

### .eslintrc.js

```js
module.exports = {
    extends: 'get-off-my-lawn'
};
```

## Related

* [stylelint-config-get-off-my-lawn](https://www.npmjs.com/package/stylelint-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

## License

MIT © [Michael Novotny](http://manovotny.com)
