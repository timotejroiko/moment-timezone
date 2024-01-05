"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Lucia"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Lucia", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Lucia", { abbr: true, expect: "America/Santo_Domingo" }),

	"1890" : helpers.makeTestYear("America/St_Lucia", [
		["1890-01-01T04:03:59+00:00", "23:59:59", "LMT", 244],
		["1890-01-01T04:04:00+00:00", "00:00:00", "CMT", 244]
	]),

	"1912" : helpers.makeTestYear("America/St_Lucia", [
		["1912-01-01T04:03:59+00:00", "23:59:59", "CMT", 244],
		["1912-01-01T04:04:00+00:00", "00:04:00", "AST", 240]
	])
};