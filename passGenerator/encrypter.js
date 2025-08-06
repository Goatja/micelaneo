export function encrypter(value) {
  if (value != "") {
    if (value.length < 8) return "Too short";

    // Cifrado César simple: suma 3 al código de cada carácter
    let encrypted = [...value]
      .map(char => String.fromCharCode(char.charCodeAt(0) + 3))
      .join('');
    return encrypted;
  } else {
    return textMessage();
  }
}

function textMessage() {
  return "Nothing to encrypt!😥";
}
