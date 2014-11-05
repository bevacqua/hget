# hget

> Render HTML in your terminal prettily

A CLI and an API to render HTML in your terminal.

# Install

Globally or locally.

```shell
npm install hget --save
```

```shell
npm install hget -g
```

# API

The API exports a function that takes in HTML and returns a formatted plain text string. It uses colors and formatting provided by [`chalk`][1].

```js
var hget = require('hget');
var html = '<p>Hello <b>Nico</b>!</p>';

hget(html);
// <- 'Hello Nico!'
```

You can also pass in a few options.

## `hget(html, options)`

The options are as follows.

- `root` sets the context root, it defaults to `'body'`. Maybe you want to use `'main'` or something akin to that.
- `ignore` can be a single selector or an array of selectors. Any elements that match the provided selectors will be removed from the document before rendering the terminal-printable output. Keep in mind that these selectors will be rooted in the `root` element.

# CLI

Easy and flexible to use!

```shell
hget ponyfoo.com
```

```shell
hget file.html
```

```shell
cat file.html | hget
```

# Example usage

Ooh, the CLI also follows redirects.

```
hurl ponyfoo.com/articles/last --root article --ignore footer,.mm-count,.at-meta
```

Also, the output will be paged using `$PAGER` for convenience. You can turn this off using `--no-paging`.

It works well on most sites. Here's just the news links from EchoJS.

```shell
hget echojs.com --root #newslist --ignore "article>:not(h2)"
```

![echojs-output.png][2]

# License

MIT

[1]: https://www.npmjs.org/package/chalk
[2]: http://i.imgur.com/SlwwrqL.png
