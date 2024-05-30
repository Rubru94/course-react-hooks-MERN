import { getArray } from '../../base-tests/07-array-destructuring';

describe('07-array-destructuring', () => {
  it('getArray should return one string & one number ', () => {
    const [letter, number] = getArray();

    expect(letter).toEqual('ABC');
    expect(number).toEqual(123);

    expect(typeof letter).toBe('string');
    expect(typeof number).toBe('number');

    expect(letter).toEqual(expect.any(String));
    expect(number).toEqual(expect.any(Number));
  });
});
