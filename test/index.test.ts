
// test/index.test.ts
import { describe, it, expect } from 'vitest';
import { add, subtract } from '../src/index';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should return a negative number if the sum is negative', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});

describe('subtract function', () => {
  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should return a negative number if the result is negative', () => {
    expect(subtract(2, 5)).toBe(-3);
  });
});
