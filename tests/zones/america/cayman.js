"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayman"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Cayman", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Cayman", { abbr: true, expect: "America/Panama" }),

	"1890" : helpers.makeTestYear("America/Cayman", [
		["1890-01-01T05:25:31+00:00", "23:59:59", "LMT", 19532 / 60],
		["1890-01-01T05:25:32+00:00", "00:18:22", "KMT", 18430 / 60]
	]),

	"1912" : helpers.makeTestYear("America/Cayman", [
		["1912-02-01T05:07:09+00:00", "23:59:59", "KMT", 18430 / 60],
		["1912-02-01T05:07:10+00:00", "00:07:10", "EST", 300]
	])
};