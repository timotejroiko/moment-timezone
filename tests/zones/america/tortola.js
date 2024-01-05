"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Tortola"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Tortola", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Tortola", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/Tortola", [
		["1911-07-01T04:18:27+00:00", "23:59:59", "LMT", 15508 / 60],
		["1911-07-01T04:18:28+00:00", "00:18:28", "AST", 240]
	])
};