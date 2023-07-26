import { computed, makeObservable } from "mobx";
import { FormControl } from "./FormControl";

export type Validator<T> = (value: T) => boolean;

type GroupOptions = {
  [key: string]: string | FormControl<string>;
}
type Group<T extends GroupOptions> = {
  [P in keyof T]: FormControl<string>;
}
type Value<T extends GroupOptions> = {
  [P in keyof T]: string;
}

type UntypedValue = { [key: string]: string; }
type UntypedGroup = { [key: string]: FormControl<string>; }

export class FormGroupControl<T extends GroupOptions> {
  fields: Group<T>;

  get valid() {
    return Object.keys(this.fields).every((key) => (
      this.fields[key].valid
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
      } else {
        group[key] = options[key] as FormControl<string>;
      }
    });

    this.fields = group as Group<T>;

    makeObservable(this, {
      valid: computed,
      value: computed.struct
    });
  }

  validate() {
    Object.keys(this.fields).forEach((key) => (
      this.fields[key].validate()
    ));
  }
}