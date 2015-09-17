"use strict";

var testutils = require("eyeglass-dev-testutils");

describe("timer", function () {
  it("can calculate deltas", function (done) {
    var options = {
      data: "@import 'timer'; $timer: timer-start();" +
            "/*! Elapsed Time: #{elapsed-time($timer)} */"
    };
    var expectedOutput = "/*! Elapsed Time: 0ms */\n";
    testutils.assertCompiles(options, expectedOutput, done);
  });

  it("can calculate delta from import", function (done) {
    var options = {
      data: "@import 'timer';" +
            "/*! Elapsed Time: #{elapsed-time($timer-imported-at)} */"
    };
    var expectedOutput = new RegExp("^/\\*! Elapsed Time: \\dms \\*/$", "m");
    testutils.assertCompiles(options, expectedOutput, done);
  });
});
