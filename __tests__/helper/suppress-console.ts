/* istanbul ignore file */

// enough to provide 4-5 words from the error to make it distinguishable from others
// matching is case sensitive, make sure to use correct case
export const errorsToBeSuppressed: readonly string[] = [
  '{"context":"Error'
];

// enough to provide 4-5 words from the warning to make it distinguishable from others
// matching is case sensitive, make sure to use correct case
export const warningsToBeSuppressed: readonly string[] = [

];

// suppress unnecessary console warnings during tests (i.e. due to 3rd library)
// not necessary to include whole text, enough that warning starts with the provided text
export const consoleWarn = console.warn.bind(console);
console.warn = (message: any, ...args: any[]) => {
  if (typeof message === 'string') {
    if (warningsToBeSuppressed.some((warning) => message.startsWith(warning))) {
      return null;
    }
  }

  return consoleWarn(message, ...args);
};

// suppress unnecessary console errors during tests (i.e. due to 3rd library)
// not necessary to include whole text, enough that warning starts with the provided text
export const consoleError = console.error.bind(console);
console.error = (message: any, ...args: any[]) => {
  if (typeof message === 'string') {
    if (errorsToBeSuppressed.some((warning) => message.startsWith(warning))) {
      return null;
    }
  }

  return consoleError(message, ...args);
};
