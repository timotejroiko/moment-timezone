"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Blantyre"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Blantyre", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Blantyre", { abbr: true, expect: "Africa/Khartoum" }),

	"1911" : helpers.makeTestYear("Africa/Blantyre", [
		["1911-07-23T21:39:59+00:00", "23:59:59", "LMT", -140],
		["1911-07-23T21:40:00+00:00", "00:01:10", "ZMT", -8470 / 60]
	]),

	"1914" : helpers.makeTestYear("Africa/Blantyre", [
		["1914-06-29T21:38:49+00:00", "23:59:59", "ZMT", -8470 / 60],
		["1914-06-29T21:38:50+00:00", "23:59:50", "ZMT", -141]
	]),

	"1925" : helpers.makeTestYear("Africa/Blantyre", [
		["1925-06-30T21:38:59+00:00", "23:59:59", "ZMT", -141],
		["1925-06-30T21:39:00+00:00", "23:39:00", "CAT", -120]
	])
};