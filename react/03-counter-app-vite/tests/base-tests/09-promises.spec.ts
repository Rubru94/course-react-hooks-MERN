import { getHeroByIdAsync } from '../../base-tests/09-promises';

describe('09-promises', () => {
  describe('getHeroByIdAsync - callback', () => {
    it('should return a hero', (done) => {
      const id = 1;

      getHeroByIdAsync(id).then((hero) => {
        expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });
        done();
      });
    });

    it('should return error if hero does not exist', (done) => {
      const id = -1;

      getHeroByIdAsync(id).catch((error) => {
        expect(error).toEqual(`Hero ${id} not found`);
        done();
      });
    });
  });
});
