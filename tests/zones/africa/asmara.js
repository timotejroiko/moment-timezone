"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Asmara"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Asmara", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Asmara", { abbr: true, expect: "Africa/Nairobi" }),

	"1869" : helpers.makeTestYear("Africa/Asmara", [
		["1869-12-31T21:24:27+00:00", "23:59:59", "LMT", -9332 / 60],
		["1869-12-31T21:24:28+00:00", "00:00:00", "AMT", -9332 / 60]
	]),

	"1889" : helpers.makeTestYear("Africa/Asmara", [
		["1889-12-31T21:24:27+00:00", "23:59:59", "AMT", -9332 / 60],
		["1889-12-31T21:24:28+00:00", "23:59:48", "ADMT", -9320 / 60]
	]),

	"1936" : helpers.makeTestYear("Africa/Asmara", [
		["1936-05-04T21:24:39+00:00", "23:59:59", "ADMT", -9320 / 60],
		["1936-05-04T21:24:40+00:00", "00:24:40", "EAT", -180]
	])
};