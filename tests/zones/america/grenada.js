"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Grenada"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Grenada", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Grenada", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/Grenada", [
		["1911-07-01T04:06:59+00:00", "23:59:59", "LMT", 247],
		["1911-07-01T04:07:00+00:00", "00:07:00", "AST", 240]
	])
};