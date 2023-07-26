
export interface Errors {
  [key: string]: string;
}

export class ValidatorErrors {
  constructor(public errors: Errors) {}
}