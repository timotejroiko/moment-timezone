"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Wake"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Wake", { offset: true, expect: "Pacific/Fiji" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Wake", { abbr: true, expect: "Pacific/Fiji" }),

	"1900" : helpers.makeTestYear("Pacific/Wake", [
		["1900-12-31T12:53:31+00:00", "23:59:59", "LMT", -39988 / 60],
		["1900-12-31T12:53:32+00:00", "00:53:32", "+12", -720]
	])
};