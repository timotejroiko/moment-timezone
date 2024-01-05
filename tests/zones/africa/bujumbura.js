"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bujumbura"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bujumbura", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bujumbura", { abbr: true, expect: "Africa/Khartoum" }),

	"1889" : helpers.makeTestYear("Africa/Bujumbura", [
		["1889-12-31T22:02:31+00:00", "23:59:59", "LMT", -7048 / 60],
		["1889-12-31T22:02:32+00:00", "00:02:32", "CAT", -120]
	])
};