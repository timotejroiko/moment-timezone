"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Bahrain"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Bahrain", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Bahrain", { abbr: true, expect: "Europe/Moscow" }),

	"1941" : helpers.makeTestYear("Asia/Bahrain", [
		["1941-07-19T20:37:39+00:00", "23:59:59", "LMT", -12140 / 60],
		["1941-07-19T20:37:40+00:00", "00:07:40", "+0330", -210]
	]),

	"1943" : helpers.makeTestYear("Asia/Bahrain", [
		["1943-12-31T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1943-12-31T20:30:00+00:00", "00:30:00", "+04", -240]
	]),

	"1972" : helpers.makeTestYear("Asia/Bahrain", [
		["1972-05-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1972-05-31T20:00:00+00:00", "23:00:00", "+03", -180]
	])
};