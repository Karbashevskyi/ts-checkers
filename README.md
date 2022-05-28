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

## This is library can help you to check some data.
- Where you can use it?
  - In typescript or javascript.
- What kind of data can the library check?
  - Now is not more, but in the future the library will be growing.
  - List: 
    - Is.Collection()
      - For check if value is Array
    - Is.Compare()
      - For compare two objects.
    - Is.EmptyObject()
    - Is.EmptyString()
    - Is.False()
    - Is.Null()
      - Check if null or "null" is null.
    - Is.NullOrUndefined()
    - Is.NullOrUndefinedOrEmpty()
    - Is.Number()
    - Is.Structure()
      - For check if value is Object
    - Is.True()
    - Is.Undefined()
      - Check if undefined or "undefined" is undefined.
    - Is.UniversalEmptyChecker()
      - The method is used inside other methods.
  - All the methods can be reverse result, just use prefix Not, Is.Not.Null().


#Examples:
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


## My Social Network Links
[Twitter Profile](https://twitter.com/Karbashevskyi)

[LinkedIn Profile](https://www.linkedin.com/in/ivan-karbashevskyi/)

[GitHub Profile](https://github.com/Karbashevskyi)

[medium.com Profile](https://medium.com/@ivankarbashevskyi)
