// eslint-disable-next-line import/prefer-default-export
export const validateEmail = (email:string) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.[A-Za-z]/;
  return regex.test(email);
};
