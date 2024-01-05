"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/St_Helena"] = {

	"guess:by:offset" : helpers.makeTestGuess("Atlantic/St_Helena", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Atlantic/St_Helena", { abbr: true, expect: "Africa/Abidjan" }),

	"1890" : helpers.makeTestYear("Atlantic/St_Helena", [
		["1890-01-01T00:22:47+00:00", "23:59:59", "LMT", 1368 / 60],
		["1890-01-01T00:22:48+00:00", "00:00:00", "JMT", 1368 / 60]
	]),

	"1951" : helpers.makeTestYear("Atlantic/St_Helena", [
		["1951-01-01T00:22:47+00:00", "23:59:59", "JMT", 1368 / 60],
		["1951-01-01T00:22:48+00:00", "00:22:48", "GMT", 0]
	])
};