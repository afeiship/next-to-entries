# next-to-entries
> Object to entries array for next.


## usage:
```js
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

// normal:
// [ { key: 'nomral', value: 'sljflsdjf.jpg' },
//   { key: 'nomral', value: 'bb.jpg' },
//   { key: 'nomral', value: 'bc.jpg' },
//   { key: 'nomral', value: 'ccsdf.jpg' },
//   { key: 'nomral', value: 'ccsdf.jpg' },
//   { key: 'nomral', value: 'sldjfsld.jpg' } ]

// http:
// [ { key: 'http', value: 'http://www.agc.cn/1.jpg' } ]

// wx:
// [ { key: 'wx', value: 'wx://localResource' } ]
```
