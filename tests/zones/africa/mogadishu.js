"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Mogadishu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Mogadishu", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Mogadishu", { abbr: true, expect: "Africa/Nairobi" }),

	"1893" : helpers.makeTestYear("Africa/Mogadishu", [
		["1893-10-31T20:58:31+00:00", "23:59:59", "LMT", -10888 / 60],
		["1893-10-31T20:58:32+00:00", "23:58:32", "EAT", -180]
	]),

	"1930" : helpers.makeTestYear("Africa/Mogadishu", [
		["1930-12-31T20:59:59+00:00", "23:59:59", "EAT", -180],
		["1930-12-31T21:00:00+00:00", "23:30:00", "+0230", -150]
	]),

	"1956" : helpers.makeTestYear("Africa/Mogadishu", [
		["1956-12-31T21:29:59+00:00", "23:59:59", "+0230", -150],
		["1956-12-31T21:30:00+00:00", "00:30:00", "EAT", -180]
	])
};