"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guadeloupe"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Guadeloupe", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Guadeloupe", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/Guadeloupe", [
		["1911-06-08T04:06:07+00:00", "23:59:59", "LMT", 14768 / 60],
		["1911-06-08T04:06:08+00:00", "00:06:08", "AST", 240]
	])
};