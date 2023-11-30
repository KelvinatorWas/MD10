// eslint-disable-next-line import/prefer-default-export
export const isValidName = (name:string):boolean => {
  if (name.length < 2 || name.length > 50) return false;
  return !/[^A-Za-z\s.]/gm.test(name);
};
