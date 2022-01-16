import { JsonCustomConvert } from "json2typescript";

export class EnumConverter<T> implements JsonCustomConvert<T> {
  validValues: string[];

  constructor(private enumType: unknown, private enumName: string) {
    this.validValues = Object.values(
      Object.getOwnPropertyDescriptors(enumType)
    ).map((value) => value.value);
  }

  deserialize(value: string | string[]): T {
    if (Array.isArray(value)) {
      const ar: unknown[] = [];
      for (const valueItem of value) {
        ar.push(this.deserialize(valueItem));
      }
      return ar as unknown as T;
    } else {
      console.log("Values");
      if (!this.validValues.includes(value)) {
        throw new Error(
          `JsonConvert error; invalid value for enum ${this.enumName}, expected one of '${this.validValues}', found '${value}'`
        );
      }
      return value as unknown as T;
    }
  }

  serialize(data: T): unknown {
    return data;
  }
}
