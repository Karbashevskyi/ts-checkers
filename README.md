# ts-checkers
## This is library can help you to check some data.
- Where you can use it?
  - In typescript or javascript.
- What kind of data can the library check?
  - Now is not more, but in the future the library will be growing.
  - List: 
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
