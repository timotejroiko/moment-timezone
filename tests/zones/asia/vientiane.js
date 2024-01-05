"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Vientiane"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Vientiane", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Vientiane", { abbr: true, expect: "Asia/Jakarta" }),

	"1906" : helpers.makeTestYear("Asia/Vientiane", [
		["1906-06-30T17:09:35+00:00", "23:59:59", "LMT", -24624 / 60],
		["1906-06-30T17:09:36+00:00", "00:16:06", "PLMT", -25590 / 60]
	]),

	"1911" : helpers.makeTestYear("Asia/Vientiane", [
		["1911-04-30T16:53:29+00:00", "23:59:59", "PLMT", -25590 / 60],
		["1911-04-30T16:53:30+00:00", "23:53:30", "+07", -420]
	]),

	"1942" : helpers.makeTestYear("Asia/Vientiane", [
		["1942-12-31T15:59:59+00:00", "22:59:59", "+07", -420],
		["1942-12-31T16:00:00+00:00", "00:00:00", "+08", -480]
	]),

	"1945" : helpers.makeTestYear("Asia/Vientiane", [
		["1945-03-14T14:59:59+00:00", "22:59:59", "+08", -480],
		["1945-03-14T15:00:00+00:00", "00:00:00", "+09", -540],
		["1945-09-01T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-01T15:00:00+00:00", "22:00:00", "+07", -420]
	]),

	"1947" : helpers.makeTestYear("Asia/Vientiane", [
		["1947-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1947-03-31T17:00:00+00:00", "01:00:00", "+08", -480]
	]),

	"1955" : helpers.makeTestYear("Asia/Vientiane", [
		["1955-04-14T15:59:59+00:00", "23:59:59", "+08", -480],
		["1955-04-14T16:00:00+00:00", "23:00:00", "+07", -420]
	])
};