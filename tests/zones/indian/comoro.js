"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Comoro"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Comoro", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Comoro", { abbr: true, expect: "Africa/Nairobi" }),

	"1911" : helpers.makeTestYear("Indian/Comoro", [
		["1911-06-30T21:06:55+00:00", "23:59:59", "LMT", -10384 / 60],
		["1911-06-30T21:06:56+00:00", "00:06:56", "EAT", -180]
	])
};