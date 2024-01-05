"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Douala"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Douala", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Douala", { abbr: true, expect: "Africa/Lagos" }),

	"1911" : helpers.makeTestYear("Africa/Douala", [
		["1911-12-31T23:21:11+00:00", "23:59:59", "LMT", -2328 / 60],
		["1911-12-31T23:21:12+00:00", "00:21:12", "WAT", -60]
	])
};