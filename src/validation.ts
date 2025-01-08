export function validateAge(age: any) {
    if (typeof age !== 'number') {
      return { error: true, message: 'type data tidak sesuai' };
    }
    if (age < 12) {
      return { error: true, message: 'minimal harus 12' };
    }
    if (age > 20) {
      return { error: true, message: 'maksimal usia 20' };
    }
    return { error: false, data: age };
  }
  
  export function validateName(name: any) {
    if (typeof name !== 'string') {
      return { error: true, message: 'type data tidak sesuai' };
    }
    if (name.length < 3) {
      return { error: true, message: 'minimal 3 karakter' };
    }
    if (name.length > 50) {
      return { error: true, message: 'maksimal 50 karakter' };
    }
    return { error: false, data: name };
  }
  
  export function validateGender(gender: any) {
    if (typeof gender !== 'string') {
      return { error: true, message: 'type data tidak sesuai' };
    }
    if (gender !== 'L' && gender !== 'P') {
      return { error: true, message: 'format data tidak sesuai' };
    }
    return { error: false, data: gender };
  }
  