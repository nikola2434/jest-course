import { move, remove } from './Array.util';

describe('array core', () => {
  describe('move', () => {
    it('should return undefined', () => {
      const array = [1, 5, 8, 9, 10];
      const newIndex = 8;
      const oldIndex = 3;

      const res = move(array, oldIndex, newIndex);

      expect(res).toBeUndefined();
    });

    it('should swap item', () => {
      const array = [1, 5, 8, 9, 10];
      const newIndex = 0;
      const oldIndex = 3;

      const res = move(array, oldIndex, newIndex);

      expect(res).toEqual([9, 1, 5, 8, 10]);
      expect(res).toHaveLength(5);
    });
  });

  describe('remove', () => {
    it('should return false if there is no item in the array', () => {
      const array = [2, 5, 1, 6];
      const item = 7;

      const result = remove(array, item);

      expect(result).toBe(false);
      expect(array).toEqual([2, 5, 1, 6]);
    });

    it('should remove item', () => {
      const array = [2, 5, 1, 6];
      const item = 2;

      const result = remove(array, item);

      expect(array).toEqual([5, 1, 6]);
      expect(result).toBe(true);
    });
  });
});
