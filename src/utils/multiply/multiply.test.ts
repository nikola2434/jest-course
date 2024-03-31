import { multiply } from './multiply.util';

describe('multiply', () => {
  it('should multiply positive numbers', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  it('should multiply negative numbers', () => {
    expect(multiply(-5, -10)).toBe(50);
  });

  it('should multiply combo numbers', () => {
    expect(multiply(1, -7)).toBe(-7);
  });
});
