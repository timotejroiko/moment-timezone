"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Cocos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Cocos", { offset: true, expect: "Asia/Rangoon" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Cocos", { abbr: true, expect: "Asia/Rangoon" }),

	"1899" : helpers.makeTestYear("Indian/Cocos", [
		["1899-12-31T17:32:19+00:00", "23:59:59", "LMT", -23260 / 60],
		["1899-12-31T17:32:20+00:00", "00:02:20", "+0630", -390]
	])
};