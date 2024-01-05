# Moment Timezone GTZ

A fork of [Moment Timezone](http://momentjs.com/timezone/) that uses data files from [Global-TZ](https://github.com/JodaOrg/global-tz) instead of the original IANA tzdata files.

[Global-TZ](https://github.com/JodaOrg/global-tz) is a fork of the original IANA timezone database that reverts controversial changes made by the official maintainers such as the merger of zones that agree since 1970. Such changes have caused the loss of important historical timezone data introducing several problems for many people, including dependents like `Moment Timezone`.

As it stands, the official tzdata files, and by extension Moment Timezone, return incorrect results for many historical dates, for example: `Europe/Stockholm` did not observe DST until 1980, but after said changes, it became an alias for `Europe/Berlin` which observes DTS since the early 1940s, returning wrong results for many dates between those years.

This fork of `Moment Timezone` aims to provide a "historically accurate" version by leveraging the work done by [Global-TZ](https://github.com/JodaOrg/global-tz).

No other changes have been made to the library.

## [Moment Timezone](http://momentjs.com/timezone/)

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-download-url]
[![MIT License][license-image]][license-url]
[![Build Status][ci-image]][ci-url]
[![FOSSA Status][fossa-badge-image]][fossa-badge-url]

IANA Time zone support for Moment.js

## Project Status

Moment-Timezone is an add-on for Moment.js.  Both are considered legacy projects, now in maintenance mode.  In most cases, you should choose a different library.

For more details and recommendations, please see [Project Status](https://momentjs.com/docs/#/-project-status/) in the Moment docs.

*Thank you.*

## Resources

- [Documentation](https://momentjs.com/timezone/docs/)
- [Changelog](changelog.md)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/moment-timezone)

## Examples

```js
var june = moment("2014-06-01T12:00:00Z");
june.tz('America/Los_Angeles').format('ha z'); // 5am PDT
june.tz('America/New_York').format('ha z');    // 8am EDT
june.tz('Asia/Tokyo').format('ha z');          // 9pm JST
june.tz('Australia/Sydney').format('ha z');    // 10pm EST

var dec = moment("2014-12-01T12:00:00Z");
dec.tz('America/Los_Angeles').format('ha z');  // 4am PST
dec.tz('America/New_York').format('ha z');     // 7am EST
dec.tz('Asia/Tokyo').format('ha z');           // 9pm JST
dec.tz('Australia/Sydney').format('ha z');     // 11pm EST
```

## License

Moment-timezone is freely distributable under the terms of the [MIT license][license-url].

[![FOSSA Status][fossa-large-image]][fossa-large-url]


[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/moment-timezone
[npm-version-image]: https://img.shields.io/npm/v/moment-timezone.svg?style=flat

[npm-downloads-image]: https://img.shields.io/npm/dm/moment-timezone.svg?style=flat
[npm-download-url]: https://npmcharts.com/compare/moment-timezone?minimal=true

[ci-url]: https://github.com/moment/moment-timezone/actions/workflows/tests.yml?query=branch%253Adevelop
[ci-image]: https://github.com/moment/moment-timezone/actions/workflows/tests.yml/badge.svg?query=branch%253Adevelop

[fossa-badge-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmoment%2Fmoment-timezone.svg?type=shield
[fossa-badge-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmoment%2Fmoment-timezone?ref=badge_shield

[fossa-large-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmoment%2Fmoment-timezone.svg?type=large
[fossa-large-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmoment%2Fmoment-timezone?ref=badge_large
