import { makeObservable, observable } from "mobx";

export type Validator = (value: string) => string;

export class FormControl {
  _value: string;
  _validator?: Validator

  error = '';
  
  get value() {
    return this._value;
  }
  set value(value: string) {
    this._value = value;

    if (this.error) {
      this.validate();
    }
  }

  constructor(value: string, validator?: Validator) {
    this._value = value;
    this._validator = validator;

    makeObservable(this, {
      _value: observable.ref,
      error: observable.ref
    })
  }

  validate() {
    this.error = this._validator
      ? this._validator(this._value)
      : '';
  }

  setValue = (value: string) => {
    this.value = value;
  }
}