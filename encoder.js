function phraseToCharcodesArray(phrase) {
  const outputArray = [];

  Array.from(phrase).forEach((char) => {
    const charCode = char.charCodeAt(0);
    outputArray.push(charCode);
  })
  return outputArray;
}

function charCodesArrayToEncodedCharcodesArray(charCodesArray) {
  const outputArray = [];

  charCodesArray.forEach((code) => {
    const encodedCharcode = code + 4;
    outputArray.push(encodedCharcode);
  })
  return outputArray;
}

function encodedArrayToEncodedPhrase(encodedArray) {
  let encodedPhrase = '';

  encodedArray.forEach((code) => {
    const encodedChar = String.fromCharCode(code);
    encodedPhrase += encodedChar;
  })
  return encodedPhrase;
}
