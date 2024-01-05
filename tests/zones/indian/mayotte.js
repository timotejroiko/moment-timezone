"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Mayotte"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Mayotte", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Mayotte", { abbr: true, expect: "Africa/Nairobi" }),

	"1911" : helpers.makeTestYear("Indian/Mayotte", [
		["1911-06-30T20:59:03+00:00", "23:59:59", "LMT", -10856 / 60],
		["1911-06-30T20:59:04+00:00", "23:59:04", "EAT", -180]
	])
};