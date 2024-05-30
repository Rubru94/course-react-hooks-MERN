import { getGreetingTo } from '../../base-tests/02-template-strings';

describe('02-template-strings', () => {
  it('getGreetingTo should return "Hello {name} !!" ', () => {
    const name = 'Fernando';
    const msg = getGreetingTo(name);

    expect(msg).toEqual(`Hello ${name} !!`);
  });
});
