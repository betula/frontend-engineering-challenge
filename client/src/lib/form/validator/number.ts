
export const numberValidator = (value: string) => {
  if (value === '' || /^[0-9]+$/.test(value)) {
    return '';
  } else {
    return 'Should be a number';
  }
}