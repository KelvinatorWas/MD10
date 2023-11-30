import { isValidName } from '../validName/validName';
import { validateEmail } from '../validateEmail/validateEmail';
import { isValidPassword } from '../validatePassword/validatePassword';

// eslint-disable-next-line import/prefer-default-export, max-len
export const validateFormInput = (em:string, na:string, pas:string, rpas:string, test = false): boolean => {
  if (!validateEmail(em)) {
    if (!test) alert('Invalid Email Adresss');
    return false;
  }

  if (!isValidName(na)) {
    // eslint-disable-next-line no-nested-ternary
    const t = (na.length < 2) ? 'Name should be > 2 char' : (na.length > 50) ? 'Name should be < 50 chars' : 'Invalid Characters';
    if (!test) alert(`Invalid name, because ${t}`);
    return false;
  }

  const passCheck = isValidPassword(pas);
  if (!passCheck[0]) {
    if (!test) alert(passCheck[1]);
    return false;
  }

  if (rpas !== pas) {
    if (!test) alert('Passwords dont match!');
    return false;
  }
  return true;
};
