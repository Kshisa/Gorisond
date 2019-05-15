const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = foto = (req) => {
  var first = yaml.safeLoad(fs.readFileSync('/home/marat/app/base/3', 'utf8'));
  var numb = Number(req.query.numb);
  var doc = [first[numb][5][0]];
  return doc
}
