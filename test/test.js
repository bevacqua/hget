var Lab = require('lab');
var Code = require('code');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

var fs = require('fs');
var hget = require('..');

describe('hget', function () {
  it('work has expected', function (done) {

    var html = hget(fs.readFileSync(__dirname + '/fixture/npm-chalk.html', 'utf8'), {});

    var output = fs.readFileSync(__dirname + '/fixture/expected-output.txt', 'utf8')

    expect(html.replace(/\s+/g, ' ') + ' ').to.equal(output.replace(/\s+/g, ' '))
    done()
  });

});
