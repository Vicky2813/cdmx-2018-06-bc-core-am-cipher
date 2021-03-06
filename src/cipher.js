// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// HIJKLMNOPQRSTUVWXYZABCDEFG
// OFFSET = 33

// A = T

// ESTA FUNCION ME DECODIFICA UNA LENTRA SIN IMPORTAR SI ES MAYUSCULA O MINUSCULA
function decodeKey(charKey, offset) {
  if (charKey === charKey.toLowerCase()) {
    return String.fromCharCode((((charKey.charCodeAt(0) + 97 ) + offset) % 26 ) + 97);
  }
  if (charKey === charKey.toUpperCase()) {
    return String.fromCharCode((((charKey.charCodeAt(0) + 65 ) - offset) % 26 ) + 65);
  }
}

// ESTA FUNCION ME CODIFICA UNA LENTRA SIN IMPORTAR SI ES MAYUSCULA O MINUSCULA
function encodeKey(charKey, offset) {
  if (charKey === charKey.toLowerCase()) {
    return String.fromCharCode(((charKey.charCodeAt(0) - 97 + offset) % 26) + 97);
  }
  if (charKey === charKey.toUpperCase()) {
    return String.fromCharCode(((charKey.charCodeAt(0) - 65 + offset) % 26) + 65);
  }
}

// ESTA FUNCION VERIFICA SI EL CARACTER ES UNA LETRA MAYUSCULA O MINUSCULA
function isALetter(charKey) {
  let charCodeKey = charKey.charCodeAt(0);
  return (charCodeKey >= 65 && charCodeKey <= 90) || (charCodeKey >= 97 && charCodeKey <= 122);
}

window.cipher = {
  offset: 0,
  encode: (offset, string) => {
    // result VA A CONTENER MI RESULTADO FINAL

    let result = '';

    // RECORRO LA FRASE PARA CIFRAR
    for (let i = 0; i < string.length; i++) {
      // SI NO ES UNA LETRA EN MINUSCULAS O MAYUSCULAS
      if (!isALetter(string.charAt(i))) {
        // SOLAMENTE LO AGREGO EL CARACTER SIN CIFRAR
        result = result + string.charAt(i);
      } else {
          result += encodeKey(string.charAt(i), offset);
      }
    }

    // RETORNO EL RESULTADO
    return result;
  },
  decode: (offset, string) => {
    // result VA A CONTENER MI RESULTADO FINAL

    let result = '';

    // RECORRO LA FRASE PARA DECIFRAR
    for (let i = 0; i < string.length; i++) {
      // SI NO ES UNA LETRA EN MINUSCULAS O MAYUSCULAS
      if (!isALetter(string.charAt(i))) {
        // SOLAMENTE LO AGREGO EL CARACTER SIN DECIFRAR
        result = result + string.charAt(i);
      } else {
        result += decodeKey(string.charAt(i), offset);
      }
    }

    // RETORNO EL RESULTADO
    return result;
  },
  createCipherWithOffset: () => {
    return {
      offset: 33,
      encode: (offset, string) => {
        // result VA A CONTENER MI RESULTADO FINAL

        let result = '';

        // RECORRO LA FRASE PARA CIFRAR
        for (let i = 0; i < string.length; i++) {
          // SI NO ES UNA LETRA EN MINUSCULAS O MAYUSCULAS
          if (!isALetter(string.charAt(i))) {
            // SOLAMENTE LO AGREGO EL CARACTER SIN CIFRAR
            result = result + string.charAt(i);
          } else {
              result += encodeKey(string.charAt(i), offset);
          }
        }

        // RETORNO EL RESULTADO
        return result;
      },
      decode: (offset, string) => {
        // result VA A CONTENER MI RESULTADO FINAL

        let result = '';

        // RECORRO LA FRASE PARA DECIFRAR
        for (let i = 0; i < string.length; i++) {
          // SI NO ES UNA LETRA EN MINUSCULAS O MAYUSCULAS
          if (!isALetter(string.charAt(i))) {
            // SOLAMENTE LO AGREGO EL CARACTER SIN DECIFRAR
            result = result + string.charAt(i);
          } else {
            result += decodeKey(string.charAt(i), offset);
          }
        }

        // RETORNO EL RESULTADO
        return result;
      }
    }
  }
};
