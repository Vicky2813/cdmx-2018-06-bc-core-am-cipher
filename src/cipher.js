// FUNCION PARA CIFRAR
  // RECIBE (numero de deplazamientos, string a cifrar)
window.cipher = (n, string) => {
  // result VA A CONTENER MI RESULTADO FINAL

  let result = ''

  // RECORRO LA FRASE PARA CIFRAR
  for (let i = 0; i < string.length; i++) {
    // SI NO ES UNA LETRA EN MINUSCULAS O MAYUSCULAS
    if (!(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) &&  !(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) ){
      // SOLAMENTE LO AGREGO EL CARACTER SIN CIFRAR
      result = result + string.charAt(i)
    } else {
      // PARA CIFRAR MAYUSCULAS (65 - 90)
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        result += String.fromCharCode((((string.charCodeAt(i) - 65) + n) % 26) + 65)

        // PARA CIFRAR MINUSCULAS (97 - 122)
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        result += String.fromCharCode((((string.charCodeAt(i) - 122) + n) % 26) + 122)
      }
    }
  }

  // RETORNO EL RESULTADO
  return result
}

// FUNCION PARA DECIFRAR
  // RECIBE (numero de deplazamientos, string a decifrar)
window.descipher = (n, string) => {
  // result VA A CONTENER MI RESULTADO FINAL

  let result = ''

  // RECORRO LA FRASE PARA DECIFRAR
  for (let i = 0; i < string.length; i++) {
    // SI NO ES UNA LETRA EN MINUSCULAS O MAYUSCULAS
    if (!(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) &&  !(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) ){
      // SOLAMENTE LO AGREGO EL CARACTER SIN DECIFRAR
      result = result + string.charAt(i)
    } else {
      // PARA DECIFRAR MAYUSCULAS (65 - 90)
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        result += String.fromCharCode((((string.charCodeAt(i) - 65) - n) % 26) + 65)

        // PARA DECIFRAR MINUSCULAS (97 - 122)
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        result += String.fromCharCode((((string.charCodeAt(i) - 122) - n) % 26) + 122)
      }
    }
  }

  // RETORNO EL RESULTADO
  return result
}
