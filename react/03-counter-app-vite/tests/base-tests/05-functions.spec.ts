import { getActiveUser, getUser } from '../../base-tests/05-functions';

describe('05-functions', () => {
  it('getUser should return current user', () => {
    const currentUser = getUser();
    const testUser = { uid: 'ABC123', username: 'JD' };

    expect(currentUser).toStrictEqual(testUser);
  });

  it('getActiveUser should return user by name', () => {
    const username = 'John';
    const user = getActiveUser(username);
    const testUser = { uid: 'ZXC123', username };

    expect(user).toStrictEqual(testUser);
  });
});
