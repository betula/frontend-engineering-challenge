import { makeObservable, observable } from "mobx";

type Validator<T> = (value: T) => boolean;

export class FormControl<T> {
  _value: T;
  _validator?: Validator<T>

  valid = true;
  
  get value() {
    return this._value;
  }
  set value(value: T) {
    this._value = value;

    if (!this.valid) {
      this.validate();
    }
  }

  constructor(value: T, validator?: Validator<T>) {
    this._value = value;
    this._validator = validator;

    this.validate();

    makeObservable(this, {
      _value: observable.ref,
      valid: observable.ref
    })
  }

  validate() {
    this.valid = this._validator
      ? this._validator(this._value)
      : true;
  }

  setValue = (value: T) => {
    this.value = value;
  }
}