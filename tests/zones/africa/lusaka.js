"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lusaka"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lusaka", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lusaka", { abbr: true, expect: "Africa/Khartoum" }),

	"1903" : helpers.makeTestYear("Africa/Lusaka", [
		["1903-02-28T22:06:51+00:00", "23:59:59", "LMT", -6788 / 60],
		["1903-02-28T22:06:52+00:00", "00:06:52", "CAT", -120]
	])
};