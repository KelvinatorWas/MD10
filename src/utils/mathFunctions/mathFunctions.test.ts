import { add, multiply } from './mathFunctions';

describe('sum', () => {
  it('should sum', () => {
    const result = add(6, 8);

    expect(result).toEqual(14);
  });
  it('should multiply', () => {
    const result = multiply(2, 8);

    expect(result).toEqual(16);
  });
});
