import { getHeroById, getHeroByOwner } from '../../base-tests/08-import-export';

describe('08-import-export', () => {
  describe('getHeroById', () => {
    it('should return a hero by id', () => {
      const id = 1;
      const hero = getHeroById(id);

      expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    it('should return undefined if id not exist', () => {
      const id = 9999;
      const hero = getHeroById(id);

      expect(hero).toBeUndefined();
      // expect(hero).toBeFalsy(); // undefined, null or false
    });
  });

  describe('getHeroByOwner', () => {
    it('should return an array with DC heroes', () => {
      const testOwner = 'DC';
      const heroes = getHeroByOwner(testOwner);
      const heroesFiltered = heroes.filter(({ owner }) => owner === testOwner);

      expect(heroes).toHaveLength(3);
      expect(heroes).toStrictEqual(heroesFiltered);
    });

    it('should return an array with Marvel heroes', () => {
      const testOwner = 'Marvel';
      const heroes = getHeroByOwner(testOwner);
      const heroesFiltered = heroes.filter(({ owner }) => owner === testOwner);

      expect(heroes).toHaveLength(2);
      expect(heroes).toStrictEqual(heroesFiltered);
    });
  });
});
