"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kuwait"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kuwait", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kuwait", { abbr: true, expect: "Europe/Moscow" }),

	"1949" : helpers.makeTestYear("Asia/Kuwait", [
		["1949-12-31T20:48:03+00:00", "23:59:59", "LMT", -11516 / 60],
		["1949-12-31T20:48:04+00:00", "23:48:04", "+03", -180]
	])
};