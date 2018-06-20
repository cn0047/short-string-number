short-string-number
-

[![CircleCI](https://circleci.com/gh/cn007b/short-string-number.svg?style=svg)](https://circleci.com/gh/cn007b/short-string-number)
[![Maintainability](https://api.codeclimate.com/v1/badges/acb8351b4e4c5b91fea8/maintainability)](https://codeclimate.com/github/cn007b/short-string-number/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fc344c605a2740fe8e8257fc875e94ca)](https://www.codacy.com/app/cn007b/short-string-number)

Convert number into short string.

-

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
