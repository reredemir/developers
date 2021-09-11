const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof fizzBuzz).toBe('function');
    });

    it('should return a string', () => {
      expect(typeof fizzBuzz(3)).toBe('string');
    });
  });

  describe('execution', () => {
    it('should work with a length of 3', () => {
      expect(fizzBuzz(3)).toBe('1, 2, Fizz');
    });

    it('should work with a length of 5', () => {
      expect(fizzBuzz(5)).toBe('1, 2, Fizz, 4, Buzz');
    });

    it('should work with a length of 20', () => {
      expect(fizzBuzz(20)).toBe(
        '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz'
      );
    });
  });
});
