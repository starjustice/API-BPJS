var sql = require("./db.js");

var Bpjs = function(kk) {
  this.nik = kk.NIK;
};

Bpjs.getBpjsByNIK = function getbpjs(nik, result) {
  sql.query("Select * from Bpjs where NIK = ?", nik, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Bpjs;
