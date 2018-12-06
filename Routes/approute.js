module.exports = function(app) {
  var ktplist = require("../Controller/ktpcontroller.js");
  var kklist = require("../Controller/kkcontroller.js");
  var bpjs = require("../Controller/bpjscontroller.js");

  app.route("/ktp").get(ktplist.list_ktp);
  app.route("/ktp/:nik").get(ktplist.read_a_ktp);

  app.route("/kknumber/:nik").get(kklist.getkknumber);
  app.route("/kkdata").post(kklist.getkkdata);
  app.route("/kkfamily").post(kklist.getkkfamily);

  app.route("/bpjs/:nik").get(bpjs.validate_bpjs);
};
