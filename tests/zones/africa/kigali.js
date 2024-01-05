"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kigali"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Kigali", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Kigali", { abbr: true, expect: "Africa/Khartoum" }),

	"1935" : helpers.makeTestYear("Africa/Kigali", [
		["1935-05-31T21:59:43+00:00", "23:59:59", "LMT", -7216 / 60],
		["1935-05-31T21:59:44+00:00", "23:59:44", "CAT", -120]
	])
};