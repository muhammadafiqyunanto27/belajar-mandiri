import { describe, it, expect } from 'vitest';
import { validateAge, validateName, validateGender } from '../src/validation';

describe('validateAge', () => {
  it('should return error for non-number age', () => {
    expect(validateAge('15')).toEqual({ error: true, message: 'type data tidak sesuai' });
  });

  it('should return error for age less than 12', () => {
    expect(validateAge(10)).toEqual({ error: true, message: 'minimal harus 12' });
  });

  it('should return error for age greater than 20', () => {
    expect(validateAge(25)).toEqual({ error: true, message: 'maksimal usia 20' });
  });

  it('should return valid data for age within range', () => {
    expect(validateAge(15)).toEqual({ error: false, data: 15 });
  });
});

describe('validateName', () => {
  it('should return error for non-string name', () => {
    expect(validateName(123)).toEqual({ error: true, message: 'type data tidak sesuai' });
  });

  it('should return error for name with less than 3 characters', () => {
    expect(validateName('Jo')).toEqual({ error: true, message: 'minimal 3 karakter' });
  });

  it('should return error for name with more than 50 characters', () => {
    expect(validateName('J'.repeat(51))).toEqual({ error: true, message: 'maksimal 50 karakter' });
  });

  it('should return valid data for name within range', () => {
    expect(validateName('John')).toEqual({ error: false, data: 'John' });
  });
});

describe('validateGender', () => {
  it('should return error for non-string gender', () => {
    expect(validateGender(1)).toEqual({ error: true, message: 'type data tidak sesuai' });
  });

  it('should return error for invalid gender format', () => {
    expect(validateGender('X')).toEqual({ error: true, message: 'format data tidak sesuai' });
  });

  it('should return valid data for gender L', () => {
    expect(validateGender('L')).toEqual({ error: false, data: 'L' });
  });

  it('should return valid data for gender P', () => {
    expect(validateGender('P')).toEqual({ error: false, data: 'P' });
  });
});
