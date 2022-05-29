# ts-checkers
![NPM Latest Version](https://img.shields.io/npm/v/ts-checkers)
![Downloads Count](https://img.shields.io/npm/dm/ts-checkers.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=ts-checkers)
![Test Status](https://img.shields.io/travis/karbashevskyi/ts-checkers/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/karbashevskyi/ts-checkers)
![Project License](https://img.shields.io/github/license/karbashevskyi/ts-checkers)

## Article on the medium.com
[![](https://miro.medium.com/max/1400/1*Nr3ayecYqgKJwOqumJHXsw.jpeg)](https://medium.com/@ivankarbashevskyi/reduce-method-declarations-with-javascript-proxy-62fbfeeb4e12)
[https://medium.com/@ivankarbashevskyi/reduce-method-declarations-with-javascript-proxy-62fbfeeb4e12](https://medium.com/@ivankarbashevskyi/reduce-method-declarations-with-javascript-proxy-62fbfeeb4e12)

## Installation

```bash
$ npm install ts-checkers
```

## Import
```typescript
import {Is} from "ts-checkers";
```

## This is library can help you to check some data.
- Where you can use it?
  - In typescript or javascript.
- What kind of data can the library check?
  - Now is not more, but in the future the library will be growing.
  - List:
    - Is.Array($variable)
    - Is.BigInt($variable)
    - Is.Boolean($variable)
    - Is.Compare($variable)
      - For compare two objects.
    - Is.EmptyObject($variable)
    - Is.EmptyString($variable)
    - Is.False($variable)
    - Is.Null($variable)
      - Check if null or "null" is null.
    - Is.NullOrUndefined($variable)
    - Is.NullOrUndefinedOrEmpty($variable)
    - Is.Number($variable)
    - Is.String($variable)
    - Is.Object($variable)
    - Is.True($variable)
    - Is.Undefined($variable)
      - Check if undefined or "undefined" is undefined.
    - Is.UniversalEmptyChecker($variable)
      - The method is used inside other methods.
  - All the methods can be reverse result, just use prefix Not, Is.Not.Null().


## Examples:
```typescript

    Is.Null("unknown") // Return false
    Is.Not.Null("unknown") // Return true
    Is.Number(0) // Return true
    Is.Number("0") // Return false
    Is.Not.Number(0) // Return false
    Is.Not.Number("0") // Return true
    Is.Not.Number(NaN) // Return true
    Is.Number(NaN) // Return false

```

## Now you can check array
```typescript

  Is.All.Boolean([true, false, [true, [false]], 0]) // Result is false beacouse in array exist 0
  Is.All.Not.Boolean([true, false, [true, [false]], 0]) // Result is true beacouse in array exist 0

```


## My Social Network Links
[Twitter Profile](https://twitter.com/Karbashevskyi)

[LinkedIn Profile](https://www.linkedin.com/in/ivan-karbashevskyi/)

[GitHub Profile](https://github.com/Karbashevskyi)

[medium.com Profile](https://medium.com/@ivankarbashevskyi)
