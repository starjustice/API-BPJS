var sql = require("./db.js");

var KK = function(kk) {
  this.nomorkk = kk.NomorKK;
};

KK.getKKByNIK = function getkk(nik, result) {
  sql.query("Select Nomor_KK from hubungan_kk_ktp where NIK = ?", nik, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

KK.getfamily = function getfamilymember(kk, result) {
  sql.query(
    "SELECT ktp.Nama, ktp.NIK, ktp.Jenis_Kelamin, ktp.Tempat_Lahir, ktp.Tanggal_Lahir, ktp.Agama, hubungan_kk_ktp.Pendidikan, ktp.Pekerjaan, ktp.Status_Perkawinan, hubungan_kk_ktp.Status_hubungan_dalam_keluarga, ktp.Kewarganegaraan, hubungan_kk_ktp.Ayah,hubungan_kk_ktp.Ibu FROM hubungan_kk_ktp INNER JOIN ktp ON ktp.NIK = hubungan_kk_ktp.NIK WHERE Nomor_KK = ?",
    kk.nomorkk,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

KK.getkkdetail = function getkkdetail(kk, result) {
  sql.query(
    "Select * from kartu_keluarga where Nomor_KK = ?",
    kk.nomorkk,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = KK;
