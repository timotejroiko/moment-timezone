"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Montserrat"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Montserrat", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Montserrat", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/Montserrat", [
		["1911-07-01T04:09:51+00:00", "00:00:59", "LMT", 14932 / 60],
		["1911-07-01T04:09:52+00:00", "00:09:52", "AST", 240]
	])
};