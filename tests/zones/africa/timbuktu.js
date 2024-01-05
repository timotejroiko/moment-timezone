"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Timbuktu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Timbuktu", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Timbuktu", { abbr: true, expect: "Africa/Abidjan" }),

	"1912" : helpers.makeTestYear("Africa/Timbuktu", [
		["1912-01-01T00:31:59+00:00", "23:59:59", "LMT", 32],
		["1912-01-01T00:32:00+00:00", "00:32:00", "GMT", 0]
	]),

	"1934" : helpers.makeTestYear("Africa/Timbuktu", [
		["1934-02-25T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1934-02-26T00:00:00+00:00", "23:00:00", "-01", 60]
	]),

	"1960" : helpers.makeTestYear("Africa/Timbuktu", [
		["1960-06-20T00:59:59+00:00", "23:59:59", "-01", 60],
		["1960-06-20T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};