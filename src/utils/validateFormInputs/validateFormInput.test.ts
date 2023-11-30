import { validateFormInput } from './validateFormInputs';

describe('Validate Form', () => {
  it('Its a valid form', () => {
    const result = validateFormInput('jeff@gmail.com', 'John Mc Large', 'Passw0rd!', 'Passw0rd!', true);
    expect(result).toEqual(true);
  });
  it('Its a invalid form, because email doesnt contain @', () => {
    const result = validateFormInput('jeffgmail.com', 'John Mc Large', 'Passw0rd!', 'Passw0rd!', true);
    expect(result).toEqual(false);
  });
  it('Its a invalid form, because name contains numbers', () => {
    const result = validateFormInput('jeff@gmail.com', 'J0j0', 'Passw0rd!', 'Passw0rd!', true);
    expect(result).toEqual(false);
  });
  it('Its a invalid form, because password contains no special char', () => {
    const result = validateFormInput('jeffgmail.com', 'John Mc Large', 'Passw0rd', 'Passw0rd', true);
    expect(result).toEqual(false);
  });
  it('Its a invalid form, because passwords do not match!', () => {
    const result = validateFormInput('jeffgmail.com', 'John Mc Large', 'Passw0rd!', 'notpassword!', true);
    expect(result).toEqual(false);
  });
});
