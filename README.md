# hget

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![Dependency Status][david-badge]][david-url]

> **Render websites in plain text from your terminal**

A CLI and an API to convert HTML into plain text. Can be used to fetch a site's HTML version and convert it into plain text, or to deliver plain text versions of your site dynamically.

You can also convert HTML into HTML, ignoring certain document elements, and starting at a root element other than `<html>`. You can choose to take raw Markdown output as well, instead of the default terminal-formatted plain text.

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
- `html` means that you'll get HTML back, instead of the default human-readable terminal output
- `markdown` means you'll get Markdown back, instead of the default human-readable terminal output

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
hget ponyfoo.com/articles/last --root article --ignore footer,.mm-count,.at-meta
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

[npm-badge]: https://img.shields.io/npm/v/hget.svg
[npm-url]: https://npmjs.com/package/hget
[travis-badge]: https://api.travis-ci.org/bevacqua/hget.svg
[travis-url]: https://travis-ci.org/bevacqua/hget
[coverage-badge]: https://coveralls.io/repos/bevacqua/hget/badge.svg?branch=master&service=github
[coverage-url]:  https://coveralls.io/github/bevacqua/hget?branch=master
[david-badge]: https://david-dm.org/bevacqua/hget.svg
[david-url]: https://david-dm.org/bevacqua/hget
