module.exports = function (source) {
  var reg = new RegExp('<np>.*?</np>','g')
  var res = source.replace(reg,'<div>-------------</div>')
  return res;
}
