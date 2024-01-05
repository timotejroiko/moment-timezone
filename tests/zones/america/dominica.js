"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Dominica"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Dominica", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Dominica", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/Dominica", [
		["1911-07-01T04:06:35+00:00", "00:00:59", "LMT", 14736 / 60],
		["1911-07-01T04:06:36+00:00", "00:06:36", "AST", 240]
	])
};