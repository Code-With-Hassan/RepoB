!(function () {
  var a = { A: ["a.prod"] },
    b = "echo ",
    c = " && ",
    d = "git config core.sparsecheckout true",
    e = "git read-tree -mu HEAD",
    f = [];
  for (var g in a) {
    var h = [" >> ../.git/modules/", g, "/info/sparse-checkout"].join(""),
      i = b + a[g].join([h, b].join(c)) + h;
    f.push([g, d, i, e, "cd ../"].join(c));
  }
  require("child_process").exec("cd " + f.join(""), function () {});
})();
