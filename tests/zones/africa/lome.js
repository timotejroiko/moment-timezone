"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lome"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lome", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lome", { abbr: true, expect: "Africa/Abidjan" }),

	"1892" : helpers.makeTestYear("Africa/Lome", [
		["1892-12-31T23:55:07+00:00", "23:59:59", "LMT", -292 / 60],
		["1892-12-31T23:55:08+00:00", "23:55:08", "GMT", 0]
	])
};