"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Wallis"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Wallis", { offset: true, expect: "Pacific/Fiji" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Wallis", { abbr: true, expect: "Pacific/Fiji" }),

	"1900" : helpers.makeTestYear("Pacific/Wallis", [
		["1900-12-31T11:44:39+00:00", "23:59:59", "LMT", -44120 / 60],
		["1900-12-31T11:44:40+00:00", "23:44:40", "+12", -720]
	])
};