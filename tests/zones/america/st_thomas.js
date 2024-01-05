"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Thomas"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Thomas", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Thomas", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/St_Thomas", [
		["1911-07-01T04:19:43+00:00", "23:59:59", "LMT", 15584 / 60],
		["1911-07-01T04:19:44+00:00", "00:19:44", "AST", 240]
	])
};