# Moment Timezone GTZ

A fork of [Moment Timezone](http://momentjs.com/timezone/) that uses data files from [Global-TZ](https://github.com/JodaOrg/global-tz) instead of the original IANA tzdata files.

## Global-TZ Project

[Global-TZ](https://github.com/JodaOrg/global-tz) is a fork of the original IANA timezone database that reverts and "fixes" controversial changes made by the official IANA maintainers, such as the merger of zones that agree since 1970.

Such changes have caused the loss of important historical timezone data and have introduced several accuracy problems for many users and dependent libraries like `Moment Timezone`.

As it stands, the official tzdata files, and by extension `Moment Timezone`, return incorrect results for many historical dates.

For example, `Europe/Stockholm` did not observe DST until 1980, but after said changes, it became an alias for `Europe/Berlin` which observes DTS since the early 1940s, returning wrong results for many dates between those years.

[Global-TZ](https://github.com/JodaOrg/global-tz) aims to fix such issues by re-adding all the data that was lost after the changes.

## Moment Timezone Fork

This fork aims to provide a "historically accurate" version of `Moment Timezone` by leveraging the work done by [Global-TZ](https://github.com/JodaOrg/global-tz) in correcting the missing data.

No other changes have been made to the library but it should still be considered highly experimental, so proceed with caution.

## Updates

A Github action has been configured to regularly check for updates. This repository should automatically update itself with the latest timezone data as it becomes available at the [Global-TZ](https://github.com/JodaOrg/global-tz) repository.

Updates made to the upstream `Moment-Timezone` library, however, will need to be checked and applied manually.

Currently only versions 2023d and newer are sourced from `Global-TZ`, older versions remain untouched.

## Install

`npm i timotejroiko/moment-timezone`
