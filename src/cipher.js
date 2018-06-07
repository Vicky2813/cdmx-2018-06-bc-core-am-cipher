// FUNCION PARA CIFRAR
  // RECIBE (numero de deplazamientos, string a cifrar)
window.cipher = (n, string) => {
  // result VA A CONTENER MI RESULTADO FINAL
  let result = ''

  // RECORRO LA FRASE PARA CIFRAR
  for (let i = 0; i < string.length; i++) {
    // PARA CADA LETRA DE LA FRASE APLICO LA FORMULA
    result += String.fromCharCode((((string.charCodeAt(i) - 65) + n) % 26) + 65)
  }

  // RETORNO EL RESULTADO
  return result
}

// FUNCION PARA CIFRAR
  // RECIBE (numero de deplazamientos, string a decifrar)
window.descipher = (n, string) => {
  // result VA a CONTENER MI RESULTADO FINAL
  let result = ''

  // RECORRO LA FRASE POR CADA LETRA PARA DESCIFRAR
  for (let i = 0; i < string.length; i++) {
    // PARA CADA LETRA APLICO LA FORMULA A LA INVERSA
    result += String.fromCharCode((((string.charCodeAt(i) - 65) - n) % 26) + 65)
  }

  // RETORNO EL RESULTADO
  return result
}
