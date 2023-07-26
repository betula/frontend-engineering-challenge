import { computed, makeObservable } from "mobx";
import { FormControl, Validator } from "./FormControl";

type GroupOptions = {
  [key: string]: string | [string, Validator] | FormControl;
}
type Group<T extends GroupOptions> = {
  [P in keyof T]: FormControl;
}
type Value<T extends GroupOptions> = {
  [P in keyof T]: string;
}

type UntypedValue = { [key: string]: string; }
type UntypedGroup = { [key: string]: FormControl; }

export class FormGroupControl<T extends GroupOptions> {
  fields: Group<T>;

  get invalid() {
    return Object.keys(this.fields).some((key) => (
      this.fields[key].error
    ));
  }
  get value() {
    const data: UntypedValue = {};
    Object.keys(this.fields).forEach((key) => {
      data[key] = this.fields[key].value;
    });

    return data as Value<T>;
  }

  constructor(options: T) {
    const group: UntypedGroup = {};
    Object.keys(options).forEach((key) => {
      if (typeof options[key] === 'string') {
        group[key] = new FormControl(options[key] as string);
      } 
      else if (Array.isArray(options[key])) {
        const [value, validator] = options[key] as [string, Validator];
        group[key] = new FormControl(value, validator);
      } 
      else {
        group[key] = options[key] as FormControl;
      }
    });

    this.fields = group as Group<T>;

    makeObservable(this, {
      invalid: computed,
      value: computed.struct
    });
  }

  validate() {
    Object.keys(this.fields).forEach((key) => (
      this.fields[key].validate()
    ));
  }
}