short-string-number
-

[![CircleCI](https://circleci.com/gh/cn007b/short-string-number.svg?style=svg)](https://circleci.com/gh/cn007b/short-string-number)
[![Maintainability](https://api.codeclimate.com/v1/badges/acb8351b4e4c5b91fea8/maintainability)](https://codeclimate.com/github/cn007b/short-string-number/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2bc7fbf0446f48a289c2682e448725e4)](https://www.codacy.com/gh/cn007b/short-string-number/dashboard)
[![Coverage Status](https://coveralls.io/repos/github/cn007b/short-string-number/badge.svg?branch=master)](https://coveralls.io/github/cn007b/short-string-number?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

Convert number into short string.

## Installation

`yarn add short-string-number`

## Usage

````js
const ssn = require('short-string-number');

ssn(1024)    // 1024
ssn(41939)   // 41.9k
ssn(201305)  // 201.3k
ssn(1033183) // 1.03m
````

## Tests

`yarn test`
