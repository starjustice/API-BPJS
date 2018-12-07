var KK = require("../Model/kkmodel");

exports.getkknumber = function(req, res) {
  KK.getKKByNIK(req.params.nik, function(err, task) {
    if (err) res.send(err);
    else {
      if (task[0] == null) {
        res.send({ error: true, message: "KK Not Found" });
      } else {
        res.json({ error: false, data: task });
      }
    }
  });
};

exports.getkkdata = function(req, res) {
  var kknumber = new KK(req.body);

  if (kknumber.nomorkk == null) {
    res.send({ error: true, message: "kk number cannot null" });
  } else {
    KK.getkkdetail(kknumber, function(err, data) {
      if (err) res.send(err);
      res.json({ error: false, data: data });
    });
  }
};

exports.getkkfamily = function(req, res) {
  var kknumber = new KK(req.body);

  if (kknumber.nomorkk == null) {
    res.send({ error: true, message: "kk number cannot null" });
  } else {
    KK.getfamily(kknumber, function(err, data) {
      if (err) res.send(err);
      res.json({ error: false, data: data });
    });
  }
};
