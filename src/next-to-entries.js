(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.toEntries = function (inKey, inArray) {
    return nx.map( inArray, function(_,item){
      return { key: inKey, value: item };
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toEntries;
  }

}());
