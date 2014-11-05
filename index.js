'use strict';

var ultramarked = require('ultramarked');
var cheerio = require('cheerio');
var htmlmd = require('html-md');
var he = require('he');

function filterInput (input, options) {
  if (!options.ignore && !options.root) {
    return input;
  }
  var $ = cheerio.load(input);
  var ignored;
  var ignores = options.ignore;
  var rooted = $;
  var root = options.root;
  if (root) {
    rooted = rooted(root).eq(0);
  }
  if (ignores) {
    ignored = Array.isArray(ignores) ? ignores.join(',') :  ignores;
    rooted.find(ignored).remove();
  }
  var html = rooted.html();
  return html;
}

function parse (input, options) {
  var o = options || {};
  if (!o.root) { o.root = 'body'; }
  var html = filterInput(input, o);
  var md = htmlmd(html);
  var term = ultramarked(md, { terminal: true });
  var decoded = he.decode(term);
  return decoded;
}

module.exports = parse;
