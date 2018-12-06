var Bpjs = require("../Model/bpjsmodel");

exports.validate_bpjs = function(req, res) {
  Bpjs.getBpjsByNIK(req.params.nik, function(err, task) {
    if (err) res.send(err);
    else {
      if (task[0] == null) {
        res.status(400).send({ validate: false, message: "Bpjs not found" });
      } else {
        res.json({ validate: true, data: task });
      }
    }
  });
};
