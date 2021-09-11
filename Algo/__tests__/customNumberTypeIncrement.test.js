const customNumberTypeIncrement = require('../customNumberTypeIncrement');

describe('customNumberTypeIncrement', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof customNumberTypeIncrement).toBe('function');
    });

    it('should return an array', () => {
      expect(typeof customNumberTypeIncrement([9, 9])).toBe('object');
    });
  });

  describe('execution', () => {
    it('should return incremented last digit', () => {
      expect(customNumberTypeIncrement([1, 1])).toEqual([1, 2]);
    });

    it('should return incremented before last digit and reset to 0 last digit', () => {
      expect(customNumberTypeIncrement([1, 9])).toEqual([2, 0]);
    });

    it('should return reseted to 0 all digit and add 1 at the beggining of array', () => {
      expect(customNumberTypeIncrement([9, 9])).toEqual([1, 0, 0]);
    });

    it('should return reseted to 0 all digit and add 1 at the beggining of array', () => {
      expect(customNumberTypeIncrement([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });
  });
});
