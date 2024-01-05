"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Dar_es_Salaam"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Dar_es_Salaam", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Dar_es_Salaam", { abbr: true, expect: "Africa/Nairobi" }),

	"1930" : helpers.makeTestYear("Africa/Dar_es_Salaam", [
		["1930-12-31T21:22:51+00:00", "23:59:59", "LMT", -9428 / 60],
		["1930-12-31T21:22:52+00:00", "00:22:52", "EAT", -180]
	]),

	"1947" : helpers.makeTestYear("Africa/Dar_es_Salaam", [
		["1947-12-31T20:59:59+00:00", "23:59:59", "EAT", -180],
		["1947-12-31T21:00:00+00:00", "23:45:00", "+0245", -165]
	]),

	"1960" : helpers.makeTestYear("Africa/Dar_es_Salaam", [
		["1960-12-31T21:14:59+00:00", "23:59:59", "+0245", -165],
		["1960-12-31T21:15:00+00:00", "00:15:00", "EAT", -180]
	])
};