export function processMessage(message, offset, isEncrypt) {
    if (typeof message !== 'string' || typeof offset !== 'number') {
      return 'Invalid input';
    }
  
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(offset) + alphabet.slice(0, offset);
    const result = [];
  
    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      const isUpperCase = message[i] === char;
      const index = alphabet.indexOf(char);
  
      if (index === -1) {
        result.push(message[i]);
      } else {
        const shiftedChar = isEncrypt
          ? shiftedAlphabet[index]
          : alphabet[(index - offset + 26) % 26];
        result.push(isUpperCase ? shiftedChar : shiftedChar.toLowerCase());
      }
    }
  
    return result.join('');
  }
  