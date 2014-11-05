var fs = require('fs');
var htmlterminal = require('..');
var html = htmlterminal(fs.readFileSync(__dirname + '/fixture/npm-chalk.html', 'utf8'), {});

console.log(html);
