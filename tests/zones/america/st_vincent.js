"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Vincent"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Vincent", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Vincent", { abbr: true, expect: "America/Santo_Domingo" }),

	"1890" : helpers.makeTestYear("America/St_Vincent", [
		["1890-01-01T04:04:55+00:00", "23:59:59", "LMT", 14696 / 60],
		["1890-01-01T04:04:56+00:00", "00:00:00", "KMT", 14696 / 60]
	]),

	"1912" : helpers.makeTestYear("America/St_Vincent", [
		["1912-01-01T04:04:55+00:00", "23:59:59", "KMT", 14696 / 60],
		["1912-01-01T04:04:56+00:00", "00:04:56", "AST", 240]
	])
};