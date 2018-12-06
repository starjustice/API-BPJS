var Ktp = require("../Model/ktpmodel.js");

exports.read_a_ktp = function(req, res) {
  Ktp.getKtpByNIK(req.params.nik, function(err, task) {
    if (err) res.send(err);
    else {
      if (task[0] == null) {
        res.status(400).send({ error: true, message: "Ktp not found" });
      } else {
        res.json(task);
      }
    }
  });
};

exports.list_ktp = function(req, res) {
  Ktp.getAllKtp(function(err, ktp) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", ktp);
    res.json(ktp);
  });
};
