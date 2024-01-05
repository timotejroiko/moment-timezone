"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Minsk"] = {

	"guess:by:offset" : helpers.makeTestGuess("Europe/Minsk", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Europe/Minsk", { abbr: true, expect: "Europe/Moscow" }),

	"1879" : helpers.makeTestYear("Europe/Minsk", [
		["1879-12-31T22:09:43+00:00", "23:59:59", "LMT", -6616 / 60],
		["1879-12-31T22:09:44+00:00", "23:59:44", "MMT", -110]
	]),

	"1924" : helpers.makeTestYear("Europe/Minsk", [
		["1924-05-01T22:09:59+00:00", "23:59:59", "MMT", -110],
		["1924-05-01T22:10:00+00:00", "00:10:00", "EET", -120]
	]),

	"1930" : helpers.makeTestYear("Europe/Minsk", [
		["1930-06-20T21:59:59+00:00", "23:59:59", "EET", -120],
		["1930-06-20T22:00:00+00:00", "01:00:00", "MSK", -180]
	]),

	"1941" : helpers.makeTestYear("Europe/Minsk", [
		["1941-06-27T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1941-06-27T21:00:00+00:00", "23:00:00", "CEST", -120]
	]),

	"1942" : helpers.makeTestYear("Europe/Minsk", [
		["1942-11-02T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1942-11-02T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1943" : helpers.makeTestYear("Europe/Minsk", [
		["1943-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1943-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1943-10-04T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1943-10-04T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1944" : helpers.makeTestYear("Europe/Minsk", [
		["1944-04-03T00:59:59+00:00", "01:59:59", "CET", -60],
		["1944-04-03T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1944-07-02T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1944-07-02T22:00:00+00:00", "01:00:00", "MSK", -180]
	]),

	"1981" : helpers.makeTestYear("Europe/Minsk", [
		["1981-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1981-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1981-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1981-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1982" : helpers.makeTestYear("Europe/Minsk", [
		["1982-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1982-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1982-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1982-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1983" : helpers.makeTestYear("Europe/Minsk", [
		["1983-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1983-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1983-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1983-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1984" : helpers.makeTestYear("Europe/Minsk", [
		["1984-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1984-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1984-09-29T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1984-09-29T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1985" : helpers.makeTestYear("Europe/Minsk", [
		["1985-03-30T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1985-03-30T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1985-09-28T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1985-09-28T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1986" : helpers.makeTestYear("Europe/Minsk", [
		["1986-03-29T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1986-03-29T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1986-09-27T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1986-09-27T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1987" : helpers.makeTestYear("Europe/Minsk", [
		["1987-03-28T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1987-03-28T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1987-09-26T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1987-09-26T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1988" : helpers.makeTestYear("Europe/Minsk", [
		["1988-03-26T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1988-03-26T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1988-09-24T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1988-09-24T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1989" : helpers.makeTestYear("Europe/Minsk", [
		["1989-03-25T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1989-03-25T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1989-09-23T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1989-09-23T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1991" : helpers.makeTestYear("Europe/Minsk", [
		["1991-03-30T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1991-03-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1991-09-28T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1991-09-29T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1992" : helpers.makeTestYear("Europe/Minsk", [
		["1992-03-28T23:59:59+00:00", "01:59:59", "EET", -120],
		["1992-03-29T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1992-09-26T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1992-09-27T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1993" : helpers.makeTestYear("Europe/Minsk", [
		["1993-03-27T23:59:59+00:00", "01:59:59", "EET", -120],
		["1993-03-28T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1993-09-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1993-09-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1994" : helpers.makeTestYear("Europe/Minsk", [
		["1994-03-26T23:59:59+00:00", "01:59:59", "EET", -120],
		["1994-03-27T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1994-09-24T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1994-09-25T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1995" : helpers.makeTestYear("Europe/Minsk", [
		["1995-03-25T23:59:59+00:00", "01:59:59", "EET", -120],
		["1995-03-26T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1995-09-23T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1995-09-24T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Europe/Minsk", [
		["1996-03-30T23:59:59+00:00", "01:59:59", "EET", -120],
		["1996-03-31T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1996-10-26T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1996-10-27T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1997" : helpers.makeTestYear("Europe/Minsk", [
		["1997-03-29T23:59:59+00:00", "01:59:59", "EET", -120],
		["1997-03-30T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1997-10-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1997-10-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Europe/Minsk", [
		["1998-03-28T23:59:59+00:00", "01:59:59", "EET", -120],
		["1998-03-29T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1998-10-24T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1998-10-25T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1999" : helpers.makeTestYear("Europe/Minsk", [
		["1999-03-27T23:59:59+00:00", "01:59:59", "EET", -120],
		["1999-03-28T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1999-10-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1999-10-31T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2000" : helpers.makeTestYear("Europe/Minsk", [
		["2000-03-25T23:59:59+00:00", "01:59:59", "EET", -120],
		["2000-03-26T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2000-10-28T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2000-10-29T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2001" : helpers.makeTestYear("Europe/Minsk", [
		["2001-03-24T23:59:59+00:00", "01:59:59", "EET", -120],
		["2001-03-25T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2001-10-27T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2001-10-28T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2002" : helpers.makeTestYear("Europe/Minsk", [
		["2002-03-30T23:59:59+00:00", "01:59:59", "EET", -120],
		["2002-03-31T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2002-10-26T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2002-10-27T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Europe/Minsk", [
		["2003-03-29T23:59:59+00:00", "01:59:59", "EET", -120],
		["2003-03-30T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2003-10-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2003-10-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Europe/Minsk", [
		["2004-03-27T23:59:59+00:00", "01:59:59", "EET", -120],
		["2004-03-28T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2004-10-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2004-10-31T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Europe/Minsk", [
		["2005-03-26T23:59:59+00:00", "01:59:59", "EET", -120],
		["2005-03-27T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2005-10-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2005-10-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Europe/Minsk", [
		["2006-03-25T23:59:59+00:00", "01:59:59", "EET", -120],
		["2006-03-26T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2006-10-28T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2006-10-29T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Europe/Minsk", [
		["2007-03-24T23:59:59+00:00", "01:59:59", "EET", -120],
		["2007-03-25T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2007-10-27T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2007-10-28T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Europe/Minsk", [
		["2008-03-29T23:59:59+00:00", "01:59:59", "EET", -120],
		["2008-03-30T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2008-10-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2008-10-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Europe/Minsk", [
		["2009-03-28T23:59:59+00:00", "01:59:59", "EET", -120],
		["2009-03-29T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2009-10-24T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2009-10-25T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Europe/Minsk", [
		["2010-03-27T23:59:59+00:00", "01:59:59", "EET", -120],
		["2010-03-28T00:00:00+00:00", "03:00:00", "EEST", -180],
		["2010-10-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["2010-10-31T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"2011" : helpers.makeTestYear("Europe/Minsk", [
		["2011-03-26T23:59:59+00:00", "01:59:59", "EET", -120],
		["2011-03-27T00:00:00+00:00", "03:00:00", "+03", -180]
	])
};