"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Luanda"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Luanda", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Luanda", { abbr: true, expect: "Africa/Lagos" }),

	"1891" : helpers.makeTestYear("Africa/Luanda", [
		["1891-12-31T23:07:03+00:00", "23:59:59", "LMT", -3176 / 60],
		["1891-12-31T23:07:04+00:00", "23:59:08", "LMT", -3124 / 60]
	]),

	"1911" : helpers.makeTestYear("Africa/Luanda", [
		["1911-12-31T22:59:59+00:00", "23:52:03", "LMT", -3124 / 60],
		["1911-12-31T23:00:00+00:00", "00:00:00", "WAT", -60]
	])
};