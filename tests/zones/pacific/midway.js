"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Midway"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Midway", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Midway", { abbr: true, expect: "Pacific/Pago_Pago" }),

	"1901" : helpers.makeTestYear("Pacific/Midway", [
		["1901-01-01T11:49:27+00:00", "23:59:59", "LMT", 42568 / 60],
		["1901-01-01T11:49:28+00:00", "00:49:28", "-11", 660]
	]),

	"1956" : helpers.makeTestYear("Pacific/Midway", [
		["1956-06-03T10:59:59+00:00", "23:59:59", "-11", 660],
		["1956-06-03T11:00:00+00:00", "01:00:00", "-10", 600],
		["1956-09-02T09:59:59+00:00", "23:59:59", "-10", 600],
		["1956-09-02T10:00:00+00:00", "23:00:00", "SST", 660]
	])
};