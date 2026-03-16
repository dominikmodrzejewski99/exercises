import {AbstractControl, ValidatorFn} from '@angular/forms';

export function nameValidator(firstNameKey: string, lastNameKey: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const firstNameValue = control.get(firstNameKey)?.value;
    const lastNameValue = control.get(lastNameKey)?.value;

    if (!firstNameValue || !lastNameValue) {
      return null;
    }

    return firstNameValue.toLowerCase() === lastNameValue.toLowerCase()
      ? { nameError: true }
      : null;
  };
}
