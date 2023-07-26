
export const requiredValidator = (value: string) => {
  if (value !== '') {
    return '';
  } else {
    return 'Value is required';
  }
}