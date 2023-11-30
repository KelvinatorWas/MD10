// eslint-disable-next-line import/prefer-default-export
export const isValidPassword = (password: string): [boolean, string] => {
  if (password.length < 8) return [false, 'Password is too short!'];
  if (!/\d/.test(password)) return [false, 'Password doesnt include any numbers'];
  if (!/[!@#$%^&*]/.test(password)) return [false, 'Password doesnt contain any special char'];
  return [true, 'passed'];
};
