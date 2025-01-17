"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Saipan"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Saipan", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Saipan", { abbr: true, expect: "Pacific/Guam" }),

	"1844" : helpers.makeTestYear("Pacific/Saipan", [
		["1844-12-31T14:16:59+00:00", "23:59:59", "LMT", 857],
		["1844-12-31T14:17:00+00:00", "00:00:00", "LMT", -583]
	]),

	"1900" : helpers.makeTestYear("Pacific/Saipan", [
		["1900-12-31T14:16:59+00:00", "23:59:59", "LMT", -583],
		["1900-12-31T14:17:00+00:00", "23:17:00", "+09", -540]
	]),

	"1944" : helpers.makeTestYear("Pacific/Saipan", [
		["1944-07-08T14:59:59+00:00", "23:59:59", "+09", -540],
		["1944-07-08T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"1959" : helpers.makeTestYear("Pacific/Saipan", [
		["1959-06-26T15:59:59+00:00", "01:59:59", "GST", -600],
		["1959-06-26T16:00:00+00:00", "03:00:00", "GDT", -660]
	]),

	"1961" : helpers.makeTestYear("Pacific/Saipan", [
		["1961-01-28T14:59:59+00:00", "01:59:59", "GDT", -660],
		["1961-01-28T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"1967" : helpers.makeTestYear("Pacific/Saipan", [
		["1967-08-31T15:59:59+00:00", "01:59:59", "GST", -600],
		["1967-08-31T16:00:00+00:00", "03:00:00", "GDT", -660]
	]),

	"1969" : helpers.makeTestYear("Pacific/Saipan", [
		["1969-01-25T13:00:59+00:00", "00:00:59", "GDT", -660],
		["1969-01-25T13:01:00+00:00", "23:01:00", "GST", -600],
		["1969-06-21T15:59:59+00:00", "01:59:59", "GST", -600],
		["1969-06-21T16:00:00+00:00", "03:00:00", "GDT", -660],
		["1969-08-30T14:59:59+00:00", "01:59:59", "GDT", -660],
		["1969-08-30T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"1970" : helpers.makeTestYear("Pacific/Saipan", [
		["1970-04-25T15:59:59+00:00", "01:59:59", "GST", -600],
		["1970-04-25T16:00:00+00:00", "03:00:00", "GDT", -660],
		["1970-09-05T14:59:59+00:00", "01:59:59", "GDT", -660],
		["1970-09-05T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"1971" : helpers.makeTestYear("Pacific/Saipan", [
		["1971-04-24T15:59:59+00:00", "01:59:59", "GST", -600],
		["1971-04-24T16:00:00+00:00", "03:00:00", "GDT", -660],
		["1971-09-04T14:59:59+00:00", "01:59:59", "GDT", -660],
		["1971-09-04T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"1973" : helpers.makeTestYear("Pacific/Saipan", [
		["1973-12-15T15:59:59+00:00", "01:59:59", "GST", -600],
		["1973-12-15T16:00:00+00:00", "03:00:00", "GDT", -660]
	]),

	"1974" : helpers.makeTestYear("Pacific/Saipan", [
		["1974-02-23T14:59:59+00:00", "01:59:59", "GDT", -660],
		["1974-02-23T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"1976" : helpers.makeTestYear("Pacific/Saipan", [
		["1976-05-25T15:59:59+00:00", "01:59:59", "GST", -600],
		["1976-05-25T16:00:00+00:00", "03:00:00", "GDT", -660],
		["1976-08-21T15:00:59+00:00", "02:00:59", "GDT", -660],
		["1976-08-21T15:01:00+00:00", "01:01:00", "GST", -600]
	]),

	"1977" : helpers.makeTestYear("Pacific/Saipan", [
		["1977-04-23T15:59:59+00:00", "01:59:59", "GST", -600],
		["1977-04-23T16:00:00+00:00", "03:00:00", "GDT", -660],
		["1977-08-27T14:59:59+00:00", "01:59:59", "GDT", -660],
		["1977-08-27T15:00:00+00:00", "01:00:00", "GST", -600]
	]),

	"2000" : helpers.makeTestYear("Pacific/Saipan", [
		["2000-12-22T13:59:59+00:00", "23:59:59", "GST", -600],
		["2000-12-22T14:00:00+00:00", "00:00:00", "ChST", -600]
	])
};