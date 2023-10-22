import { processMessage } from '../js/process_message'; 

describe('processMessage', () => {
  it('should return "Invalid input" for non-string or non-number input', () => {
    expect(processMessage(null, 3, true)).toBe('Invalid input');
  });

  it('should encrypt a message with a positive offset', () => {
    expect(processMessage('HELLO', 3, true)).toBe('KHOOR');
  });

  it('should decrypt a message with a positive offset', () => {
    expect(processMessage('KHOOR', 3, false)).toBe('HELLO');
  });

  it('should handle non-alphabetic characters', () => {
    expect(processMessage('HELLO, WORLD!', 3, true)).toBe('KHOOR, ZRUOG!');
  });

  it('should handle an offset of 0', () => {
    expect(processMessage('HELLO', 0, true)).toBe('HELLO');
  });

  it('should handle an empty message', () => {
    expect(processMessage('', 3, true)).toBe('');
  });

});
