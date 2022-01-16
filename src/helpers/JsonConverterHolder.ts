import { JsonConvert } from "json2typescript";

export default class JsonConverterHolder {
  private static instance?: JsonConvert;
  static getInstance(): JsonConvert {
    if (!this.instance) {
      this.instance = new JsonConvert();
    }
    return this.instance;
  }
}
