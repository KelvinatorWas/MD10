import { validateEmail } from './validateEmail';

describe('Vaild Email', () => {
  it('Should be a valid email', () => {
    const result = validateEmail('example@example.com');
    expect(result).toEqual(true);
  });
  it('Should not be a valid email', () => {
    const result = validateEmail('example@ex1a-mple.com');
    expect(result).toEqual(false);
  });
});
