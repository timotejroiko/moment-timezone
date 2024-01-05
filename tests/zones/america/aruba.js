"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Aruba"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Aruba", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Aruba", { abbr: true, expect: "America/Santo_Domingo" }),

	"1912" : helpers.makeTestYear("America/Aruba", [
		["1912-02-12T04:40:23+00:00", "23:59:59", "LMT", 16824 / 60],
		["1912-02-12T04:40:24+00:00", "00:10:24", "-0430", 270]
	]),

	"1965" : helpers.makeTestYear("America/Aruba", [
		["1965-01-01T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1965-01-01T04:30:00+00:00", "00:30:00", "AST", 240]
	])
};