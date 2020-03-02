# reliable-round

A reliable rounding library for JavaScript/TypeScript that actually behaves predictably (unlike Math.round).

[![npm version](https://badge.fury.io/js/reliable-round.svg)](https://badge.fury.io/js/reliable-round)
[![Build Status](https://travis-ci.org/codeandcats/reliable-round.svg?branch=master)](https://travis-ci.org/codeandcats/reliable-round)
[![Coverage Status](https://coveralls.io/repos/github/codeandcats/reliable-round/badge.svg?branch=master)](https://coveralls.io/github/codeandcats/reliable-round?branch=master)

## Install

```sh
npm install reliable-round --save
```

## Usage

```javascript
import { round } from "reliable-round";

console.log(round(1.005)); // Rounds to a whole integer, returning 1

console.log(round(1.005, 2)); // Rounds to 2 decimal places returning 1.01
```

## Why do I need this?

Because JavaScript floating point math often results in quirky and unpredictable results.

The classic JS WTF example is:

```javascript
console.log(0.1 + 0.2);

// Evaluates to 0.30000000000000004
```

Maybe not what you expected right?

As for rounding, lets say you need to round to 2 decimal places then you can create your own function like this:

```javascript
function roundToTwoDecimalPlaces(value) {
  return Math.round(value * 100) / 100;
}

console.log(roundToTwoDecimalPlaces(1.006));

// Returns 1.01 - Correct!
```

At first glace, the output of the above function looks correct. But unfortunately its only correct some of the time!

```javascript
console.log(roundToTwoDecimalPlaces(1.005));

// Returns 1 - Wrong!

// The correct answer is 1.01
```

If you deal with rounding many floats in JS you will inevitably encounter many quirky inconsistencies like this.

[**reliable-round**](https://www.npmjs.com/package/reliable-round) to the rescue!

```javascript
import { round } from "reliable-round";

console.log(round(1.005, 2));

// Correctly returns 1.01
```

While you will get predictable, reliable results using `reliable-round` be aware that it is at the expense of performance. Traditional methods of rounding that use the `Math` class are much faster but at the expense of accuracy. You need to decide what's more important for your use-case.

## Contributing

Got an issue or a feature request? [Log it](https://github.com/codeandcats/reliable-round/issues).

[Pull-requests](https://github.com/codeandcats/reliable-round/pulls) are also welcome. 😸
