"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lubumbashi"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lubumbashi", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lubumbashi", { abbr: true, expect: "Africa/Khartoum" }),

	"1897" : helpers.makeTestYear("Africa/Lubumbashi", [
		["1897-11-08T22:10:07+00:00", "23:59:59", "LMT", -6592 / 60],
		["1897-11-08T22:10:08+00:00", "23:10:08", "WAT", -60]
	]),

	"1920" : helpers.makeTestYear("Africa/Lubumbashi", [
		["1920-04-24T22:59:59+00:00", "23:59:59", "WAT", -60],
		["1920-04-24T23:00:00+00:00", "01:00:00", "CAT", -120]
	])
};