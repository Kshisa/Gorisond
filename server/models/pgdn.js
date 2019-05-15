const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = foto = () => {
  var ft = yaml.safeLoad(fs.readFileSync('/home/marat/app/base/3', 'utf8'));
  var sd = yaml.safeLoad(fs.readFileSync('/home/marat/app/base/users/1', 'utf8'));
  var ur = sd[0];
  var ln = ft.length;
  if (ur === 0) {
    doc = [[ln - 10, ft[ln - 10][0][0]], [ln - 9, ft[ln - 9][0][0]],
           [ln - 8,  ft[ln - 8][0][0]],  [ln - 7, ft[ln - 7][0][0]],
           [ln - 6,  ft[ln - 6][0][0]]]
    sd[0] = ln - 5;
  }
  else if (ur === 5) {
    doc = [[ln - 5, ft[ln - 5][0][0]], [ln - 4, ft[ln - 4][0][0]],
           [ln - 3, ft[ln - 3][0][0]], [ln - 2, ft[ln - 2][0][0]],
           [ln - 1, ft[ln - 1][0][0]]]
    sd[0] = 0;
  }
  else {
    doc = [[ur - 10, ft[ur - 10][0][0]], [ur -  9, ft[ur - 9][0][0]],
           [ur -  8, ft[ur - 8][0][0]],  [ur -  7, ft[ur - 7][0][0]],
           [ur -  6, ft[ur - 6][0][0]]];
    sd[0] = sd[0] - 5;
  }
  fs.writeFile('/home/marat/app/base/users/1', yaml.safeDump(sd), 'utf8', err => {if (err) console.log(err) })
  return doc
}
