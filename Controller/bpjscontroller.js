var Bpjs = require("../Model/bpjsmodel");

exports.validate_bpjs = function(req, res) {
  Bpjs.getBpjsByNIK(req.params.nik, function(err, task) {
    if (err) res.send({error:true, message : err});
    else {
      if (task[0] == null) {
        res.send({ error: false, validate: false, message: "Bpjs not found" });
      } else {
        res.json({ error: false, validate: true, data: task });
      }
    }
  });
};
