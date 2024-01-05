"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Anguilla"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Anguilla", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Anguilla", { abbr: true, expect: "America/Santo_Domingo" }),

	"1912" : helpers.makeTestYear("America/Anguilla", [
		["1912-03-02T04:12:15+00:00", "23:59:59", "LMT", 15136 / 60],
		["1912-03-02T04:12:16+00:00", "00:12:16", "AST", 240]
	])
};