document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const shift = document.getElementById("shift");
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const result = document.getElementById("result");
  
    encryptButton.addEventListener("click", function () {
      result.textContent = transpositionCipher(inputText.value, parseInt(shift.value));
    });
  
    decryptButton.addEventListener("click", function () {
      result.textContent = transpositionDecipher(inputText.value, parseInt(shift.value));
    });
  
    function transpositionCipher(text, shift) {
      const textArray = text.split("");
      const encryptedArray = textArray.map((char, index) => {
        const newIndex = (index + shift) % textArray.length;
        return textArray[newIndex];
      });
      return encryptedArray.join("");
    }
  
    function transpositionDecipher(text, shift) {
      const textArray = text.split("");
      const decryptedArray = textArray.map((char, index) => {
        let newIndex = (index - shift) % textArray.length;
        if (newIndex < 0) {
          newIndex = textArray.length + newIndex;
        }
        return textArray[newIndex];
      });
      return decryptedArray.join("");
    }
  });
  