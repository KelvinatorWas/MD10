import { isValidName } from './validName';

describe('Validate Name', () => {
  it('Name "John Doe" should be valid', () => {
    const result = isValidName('Joe Doe');
    expect(result).toEqual(true);
  });
  it('Name "Joe-21Doz12" should be invalid', () => {
    const result = isValidName('Joe-21Doz12');
    expect(result).toEqual(false);
  });
  it('Name length < 2 should be invalid', () => {
    const result = isValidName('J');
    expect(result).toEqual(false);
  });
  it('Name length > 50 should be invalid', () => {
    const result = isValidName('My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104.');
    expect(result).toEqual(false);
  });
});
