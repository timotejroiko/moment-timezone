"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Kitts"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Kitts", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Kitts", { abbr: true, expect: "America/Santo_Domingo" }),

	"1912" : helpers.makeTestYear("America/St_Kitts", [
		["1912-03-02T04:10:51+00:00", "23:59:59", "LMT", 15052 / 60],
		["1912-03-02T04:10:52+00:00", "00:10:52", "AST", 240]
	])
};