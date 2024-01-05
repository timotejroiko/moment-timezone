"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kinshasa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Kinshasa", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Kinshasa", { abbr: true, expect: "Africa/Lagos" }),

	"1897" : helpers.makeTestYear("Africa/Kinshasa", [
		["1897-11-08T22:58:47+00:00", "23:59:59", "LMT", -3672 / 60],
		["1897-11-08T22:58:48+00:00", "23:58:48", "WAT", -60]
	])
};