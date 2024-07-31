export const validateAlphabetic = (val: string) => /^[a-zA-Z\s]+$/.test(val);
export const validateStringRequired = (val: string) => val && val.length > 0;
export const validateRequired = (val: unknown) => !!val;
export const validatePasswordConfirmation = (passVal: string, confPassVal: string) => passVal === confPassVal;
export const validateAlphanumeric = (val: string) => /^[a-zA-Z0-9]+$/.test(val);
