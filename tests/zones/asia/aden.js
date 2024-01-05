"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Aden"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Aden", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Aden", { abbr: true, expect: "Europe/Moscow" }),

	"1949" : helpers.makeTestYear("Asia/Aden", [
		["1949-12-31T21:00:05+00:00", "23:59:59", "LMT", -10794 / 60],
		["1949-12-31T21:00:06+00:00", "00:00:06", "+03", -180]
	])
};