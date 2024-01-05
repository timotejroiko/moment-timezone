"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Christmas"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Christmas", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Christmas", { abbr: true, expect: "Asia/Jakarta" }),

	"1895" : helpers.makeTestYear("Indian/Christmas", [
		["1895-01-31T16:57:07+00:00", "23:59:59", "LMT", -25372 / 60],
		["1895-01-31T16:57:08+00:00", "23:57:08", "+07", -420]
	])
};