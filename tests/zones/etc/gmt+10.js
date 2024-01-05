"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+10"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+10", { offset: true, expect: "Pacific/Honolulu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+10", { abbr: true, expect: "Pacific/Honolulu" }),

	"1970" : helpers.makeTestYear("Etc/GMT+10", [
		["1970-01-01T00:00:00+00:00", "14:00:00", "-10", 600]
	])
};