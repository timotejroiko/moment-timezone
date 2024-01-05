"use strict";

var path = require('path'),
	execFile = require('child_process').execFile;

module.exports = function (grunt) {
	grunt.registerTask('data-download', '1. Download data from iana.org/time-zones.', function (version) {
		version = version || 'latest';
		const done  = this.async();

		fetch("https://api.github.com/repos/JodaOrg/global-tz/releases/latest").then(x => x.json()).then(json => {
			const v = json.tag_name.replace("gtz","");
			const current = require("../data/packed/latest.json").version;
			if(v === current) {
				grunt.log.ok("Already up to date, exiting...");
				process.exit(0);
				return;
			}
			grunt.log.ok('Update found: ' + v);
			var src = `https://github.com/JodaOrg/global-tz/releases/download/${v}/tzcode${v}.tar.gz`,
			src2 = `https://github.com/JodaOrg/global-tz/releases/download/${v}/tzdata${v}.tar.gz`,
			curl = path.resolve('temp/curl', version, 'code.tar.gz'),
			curl2 = path.resolve('temp/curl', version, 'data.tar.gz'),
			dest = path.resolve('temp/download', version);

			grunt.file.mkdir(path.dirname(curl));
			grunt.file.mkdir(dest);

			grunt.log.ok('Downloading ' + src);

			execFile('curl', ["--location", src, '-o', curl], function (err) {
				if (err) { throw err; }
				grunt.log.ok('Downloaded ' + curl + ', extracting . . .');
				execFile('tar', ['-xzf', curl], { cwd: dest }, function (err) {
					if (err) { throw err; }

					grunt.log.ok('Extracted ' + dest);
					execFile('curl', ["--location", src2, '-o', curl2], function (err) {
						if (err) { throw err; }
						grunt.log.ok('Downloaded ' + curl2 + ', extracting . . .');
						execFile('tar', ['-xzf', curl2], { cwd: dest }, function (err) {
							if (err) { throw err; }
							grunt.log.ok('Extracted ' + dest);
							execFile('make', { cwd: dest }, function (err) {
								if (err) { throw err; }
								grunt.log.ok('Compiled ' + dest);
								done();
							});
						});
					});
				});
			});
		});
	});
};
