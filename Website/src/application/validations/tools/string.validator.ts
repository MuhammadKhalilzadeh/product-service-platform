export const validateString = (
  str: string,
  min: number,
  max: number,
  specialChar?: boolean,
  number?: boolean,
  upperCase?: boolean,
  lowerCase?: boolean,
  regex?: RegExp
) => {
  const validationResults = {
    length: str.length >= min && str.length <= max,
    specialChar:
      !specialChar || /[!@#$%^&*()_+{}\[\]:;<>,.?~`\-=/\\|]/.test(str),
    number: !number || /\d/.test(str),
    upperCase: !upperCase || /[A-Z]/.test(str),
    lowerCase: !lowerCase || /[a-z]/.test(str),
    regex: !regex || regex.test(str),
  };

  return validationResults;
};
