"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Phnom_Penh"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Phnom_Penh", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Phnom_Penh", { abbr: true, expect: "Asia/Jakarta" }),

	"1906" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1906-06-30T17:00:19+00:00", "23:59:59", "LMT", -25180 / 60],
		["1906-06-30T17:00:20+00:00", "00:06:50", "PLMT", -25590 / 60]
	]),

	"1911" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1911-04-30T16:53:29+00:00", "23:59:59", "PLMT", -25590 / 60],
		["1911-04-30T16:53:30+00:00", "23:53:30", "+07", -420]
	]),

	"1942" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1942-12-31T15:59:59+00:00", "22:59:59", "+07", -420],
		["1942-12-31T16:00:00+00:00", "00:00:00", "+08", -480]
	]),

	"1945" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1945-03-14T14:59:59+00:00", "22:59:59", "+08", -480],
		["1945-03-14T15:00:00+00:00", "00:00:00", "+09", -540],
		["1945-09-01T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-01T15:00:00+00:00", "22:00:00", "+07", -420]
	])
};