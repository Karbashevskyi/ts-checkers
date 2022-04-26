# package-ts-decorators-asserts
Package with decorators in typescript language.

Import
```typescript
import {ArgumentsIsNotNullOrUndefined} from "package-ts-decorators-asserts";
```

Enum for type of showing error or ignore.
```typescript
export enum TypeOfErrorEnum {
    IGNORE,
    THROW,
    CONSOLE,
}
```

Interface for configuration decorator
```typescript
export interface IConfig {
    count?: number;
    typeOfError?: TypeOfErrorEnum;
    itemCheckedList?: any[]; // Default is [undefined, null]
}
```

Example for using
```typescript
  class Model {

    @ArgumentsIsNotNullOrUndefined()
    testMethod(argumentOne: string, argumentTwo: number, argumentThree: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 2 // Check only argumentOne and argumentTwo
    })
    testMethodTwo(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 1 // Check only argumentOne
    })
    testMethodThree(argumentOne: string, argumentTwo?: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 1, // Check only argumentOne
        typeOfError: TypeOfErrorEnum.IGNORE // Not showing error
    })
    testMethodFour(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 2, // Check only argumentOne and argumentTwo
        typeOfError: TypeOfErrorEnum.CONSOLE // Showing error in console
    })
    testMethodFive(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

}

```
