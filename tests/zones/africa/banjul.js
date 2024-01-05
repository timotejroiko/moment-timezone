"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Banjul"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Banjul", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Banjul", { abbr: true, expect: "Africa/Abidjan" }),

	"1912" : helpers.makeTestYear("Africa/Banjul", [
		["1912-01-01T01:06:35+00:00", "23:59:59", "LMT", 3996 / 60],
		["1912-01-01T01:06:36+00:00", "00:00:00", "BMT", 3996 / 60]
	]),

	"1933" : helpers.makeTestYear("Africa/Banjul", [
		["1933-04-01T01:06:35+00:00", "23:59:59", "BMT", 3996 / 60],
		["1933-04-01T01:06:36+00:00", "00:06:36", "-01", 60]
	]),

	"1942" : helpers.makeTestYear("Africa/Banjul", [
		["1942-02-01T00:59:59+00:00", "23:59:59", "-01", 60],
		["1942-02-01T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};