
export const requiredValidator = (value: string) => {
  if (value !== '') {
    return '';
  } else {
    return 'The value is required';
  }
}