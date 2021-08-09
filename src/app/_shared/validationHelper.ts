import { createConstructor } from "typescript";

export class  ValidationHelper {
  public static GetErrors(err:any): Array<string> {
    const errors: Array<string> = [];
    if (err.status === 400) {
      const validationErrorDictionary = err.error;
      for (const fieldName in validationErrorDictionary) {
        if (validationErrorDictionary.hasOwnProperty(fieldName)) {
          errors.push(validationErrorDictionary[fieldName]);
        }
      }
    } else if (err.status === 401) {
     errors.push('Session is expire please login');
    } else {
       errors.push('something went wrong!');
    }
    console.log(err);
    return errors;
  }
}
