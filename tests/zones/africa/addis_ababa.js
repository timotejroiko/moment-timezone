"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Addis_Ababa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Addis_Ababa", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Addis_Ababa", { abbr: true, expect: "Africa/Nairobi" }),

	"1869" : helpers.makeTestYear("Africa/Addis_Ababa", [
		["1869-12-31T21:25:11+00:00", "23:59:59", "LMT", -9288 / 60],
		["1869-12-31T21:25:12+00:00", "00:00:32", "ADMT", -9320 / 60]
	]),

	"1936" : helpers.makeTestYear("Africa/Addis_Ababa", [
		["1936-05-04T21:24:39+00:00", "23:59:59", "ADMT", -9320 / 60],
		["1936-05-04T21:24:40+00:00", "00:24:40", "EAT", -180]
	])
};