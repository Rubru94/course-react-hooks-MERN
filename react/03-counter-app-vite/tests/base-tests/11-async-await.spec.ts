import { getImage } from '../../base-tests/11-async-await';

describe('11-async-await', () => {
  describe('getImage - async-await', () => {
    it('should return a image url', async () => {
      const url = await getImage();

      expect(url).toEqual(expect.any(String));
    });

    xit('should return error if api-key is invalid', async () => {
      const url = await getImage();

      expect(url).toEqual('Image not found');
    });
  });
});
