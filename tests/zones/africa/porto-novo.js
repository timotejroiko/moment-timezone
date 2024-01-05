"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Porto-Novo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Porto-Novo", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Porto-Novo", { abbr: true, expect: "Africa/Lagos" }),

	"1911" : helpers.makeTestYear("Africa/Porto-Novo", [
		["1911-12-31T23:49:31+00:00", "23:59:59", "LMT", -628 / 60],
		["1911-12-31T23:49:32+00:00", "23:49:32", "GMT", 0]
	]),

	"1934" : helpers.makeTestYear("Africa/Porto-Novo", [
		["1934-02-25T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1934-02-26T00:00:00+00:00", "01:00:00", "WAT", -60]
	])
};