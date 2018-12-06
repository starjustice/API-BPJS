var sql = require("./db.js");

var Ktp = function(ktp) {
  this.nik = ktp.NIK;
};

Ktp.getKtpByNIK = function getktp(nik, result) {
  sql.query("Select * from ktp where NIK = ?", nik, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Ktp.getAllKtp = function getAllKtp(result) {
  sql.query(
    "SELECT NIK,Nama,Tempat_Lahir,Tanggal_Lahir,Jenis_Kelamin,Alamat FROM ktp",
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ktp : ", res);

        result(null, res);
      }
    }
  );
};

module.exports = Ktp;
