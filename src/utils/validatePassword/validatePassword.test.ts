import { isValidPassword } from './validatePassword';

describe('Validate Password', () => {
  it('Should be a valid password, inculdes number and special char', () => {
    const result = isValidPassword('passw0rd!');
    expect(result[0]).toEqual(true);
  });
  it('Should not be a valid password', () => {
    const result = isValidPassword('password');
    expect(result[0]).toEqual(false);
  });
  it('Should not be a valid password because lenght < 8', () => {
    const result = isValidPassword('p1ss!');
    expect(result[0]).toEqual(false);
  });
});
