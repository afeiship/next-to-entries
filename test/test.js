var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-to-entries');

describe('next/toEntries', function () {

  it('nx.toEntries', function () {
    var obj = {
      nomral: [
        'sljflsdjf.jpg',
        'bb.jpg',
        'bc.jpg',
        'ccsdf.jpg',
        'ccsdf.jpg',
        'sldjfsld.jpg'
      ],
      http: ['http://www.agc.cn/1.jpg'],
      wx: ['wx://localResource']
    };

    var result1 = nx.toEntries( 'nomral', obj.nomral);
    var result2 = nx.toEntries( 'http', obj.http);
    var result3 = nx.toEntries( 'wx', obj.wx);

    assert.equal(result1.length, 6);
    assert.equal(result2.length, 1);
    assert.equal(result3.length, 1);
    // assert.equal(result.email, obj2.email);
  });

});
