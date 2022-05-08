export class Is {
  /**
   * TODO add test
   * @param value is boolean type
   */
  public static false(value: boolean): boolean {
    return value === false;
  }

  /**
   * TODO add test
   * @param value is boolean type
   */
  public static notFalse(value: boolean): boolean {
    return !this.false(value);
  }

  /**
   * TODO add test
   * @param value is boolean type
   */
  public static true(value: boolean): boolean {
    return value === true;
  }

  /**
   * TODO add test
   * @param value is boolean type
   */
  public static notTrue(value: boolean): boolean {
    return !this.true(value);
  }

  /**
   *
   * @param value is any type
   */
  public static null(value: any): boolean {
    return [null, 'null'].includes(value);
  }

  /**
   *
   * @param value is any type
   */
  public static notNull(value: any): boolean {
    return !this.null(value);
  }

  /**
   *
   * @param value is any type
   */
  public static undefined(value: any): boolean {
    return [undefined, 'undefined'].includes(value);
  }

  /**
   *
   * @param value is any type
   */
  public static notUndefined(value: any): boolean {
    return !this.undefined(value);
  }

  /**
   *
   * @param value is any type
   */
  public static nullOrUndefined(value: any): boolean {
    return this.null(value) || this.undefined(value);
  }

  /**
   *
   * @param value is any type
   */
  public static notNullOrUndefined(value: any): boolean {
    return !this.nullOrUndefined(value);
  }

  /**
   *
   * @param value is any type
   */
  public static number(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   *
   * @param value is any type
   */
  public static notNumber(value: any): boolean {
    return !this.number(value);
  }

  /**
   * TODO add test
   * @param value is any type
   */
  public static universalEmptyChecker(value: any): boolean {
    if (this.nullOrUndefined(value)) {
      return true;
    }

    if (this.number(value)) {
      value = true;
    } else {
      value = Object.keys(value)?.length;
    }

    return value === 0;

    // TODO Add JSON.parse?
  }

  /**
   * TODO add test
   * @param value is object type
   */
  public static emptyObject(value: object): boolean {
    return this.universalEmptyChecker(value);
  }

  /**
   * TODO add test
   * @param value is object type
   */
  public static notEmptyObject(value: object): boolean {
    return !this.emptyObject(value);
  }

  /**
   * TODO add test
   * @param value is string type
   */
  public static emptyString(value: string): boolean {
    return this.universalEmptyChecker(value);
  }

  /**
   * TODO add test
   * @param value is string type
   */
  public static notEmptyString(value: string): boolean {
    return !this.emptyString(value);
  }

  /**
   * TODO add test
   * @param value is any type
   */
  public static nullOrUndefinedOrEmpty(value: any): boolean {
    return this.universalEmptyChecker(value);
  }

  /**
   * TODO add test
   * @param value is any type
   */
  public static notNullOrUndefinedOrEmpty(value: any): boolean {
    return !this.nullOrUndefinedOrEmpty(value);
  }

  /**
   * TODO add test
   * @param objectOne is generic type
   * @param objectTwo is generic type
   */
  public static notCompare<T>(objectOne: T, objectTwo: T): boolean {
    return !this.compare(objectOne, objectTwo);
  }

  /**
   * TODO add test
   * @param objectOne is generic type
   * @param objectTwo is generic type
   */
  public static compare<T>(objectOne: T, objectTwo: T): boolean {
    if (this.nullOrUndefined(objectOne) || this.nullOrUndefined(objectTwo)) {
      return false;
    }

    const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
    const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

    if (!keysOfObjectOne?.length || !keysOfObjectTwo?.length) {
      return false;
    }

    if (keysOfObjectOne.length !== keysOfObjectOne.length) {
      return false;
    }

    for (const keyOfObjectOne of keysOfObjectTwo) {
      switch (typeof (objectOne as any)[keyOfObjectOne]) {
        case 'object':
          if (this.notCompare((objectOne as any)[keyOfObjectOne], (objectTwo as any)[keyOfObjectOne])) {
            return false;
          }
          break;
        default:
          if ((objectOne as any)[keyOfObjectOne] !== (objectTwo as any)[keyOfObjectOne]) {
            return false;
          }
          break;
      }
    }

    return true;
  }
}
