import cipher from "../js/cipher";

describe("Cipher Functions", () => {
  // Test encode
  describe("encode", () => {
    it("should encrypt a message with a positive offset", () => {
      const message = "HELLO";
      const offset = 3;
      const encryptedMessage = cipher.encode(message, offset);
      expect(encryptedMessage).toBe("KHOOR");
    });

    it("should encrypt a message with a negative offset", () => {
      const message = "KHOOR";
      const offset = -3;
      const encryptedMessage = cipher.encode(message, offset);
      expect(encryptedMessage).toBe("HELLO");
    });

    it("should handle non-alphabetic characters", () => {
      const message = "HELLO, WORLD!";
      const offset = 3;
      const encryptedMessage = cipher.encode(message, offset);
      expect(encryptedMessage).toBe("KHOOR, ZRUOG!");
    });

    it("should handle an offset of 0", () => {
      const message = "HELLO";
      const offset = 0;
      const encryptedMessage = cipher.encode(message, offset);
      expect(encryptedMessage).toBe("HELLO");
    });

    it("should handle an empty message", () => {
      const message = "";
      const offset = 3;
      const encryptedMessage = cipher.encode(message, offset);
      expect(encryptedMessage).toBe("");
    });
  });

  // Tst  decode 
  describe("decode", () => {
    it("should decrypt an encrypted message", () => {
      const encryptedMessage = "KHOOR";
      const offset = 3;
      const decryptedMessage = cipher.decode(encryptedMessage, offset);
      expect(decryptedMessage).toBe("HELLO");
    });

    it("should handle non-alphabetic characters", () => {
      const encryptedMessage = "KHOOR, ZRUOG!";
      const offset = 3;
      const decryptedMessage = cipher.decode(encryptedMessage, offset);
      expect(decryptedMessage).toBe("HELLO, WORLD!");
    });

    it("should handle an offset of 0", () => {
      const encryptedMessage = "HELLO";
      const offset = 0;
      const decryptedMessage = cipher.decode(encryptedMessage, offset);
      expect(decryptedMessage).toBe("HELLO");
    });

    it("should handle an empty message", () => {
      const encryptedMessage = "";
      const offset = 3;
      const decryptedMessage = cipher.decode(encryptedMessage, offset);
      expect(decryptedMessage).toBe("");
    });
  });
});
