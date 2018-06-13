// DECLACARACIONES

// REFERENCIA AL FORMULARIO DE CIFRADO
const formCipher = document.getElementById('formCipher');

// REFERENCIA A FORMULARIO DE DECIFRADO
const formDecipher = document.getElementById('formDecipher');

// REFERENCIA AL INPUT DE LA PALABRA A ENCRIPTAR
const inputWordToEncrypt = document.getElementById('wordToEncrypt');

// REFERENCIA AL INPUT QUE TIENE EL NUMERO DE DESPLAZAMIENTOS A APLICAR
const shiftNumber = document.getElementById('shift');

// REFERENCIA AL INPUT QUE CONTIENE LA PALABARA A DESENCRIPTAR
const inputWordToDecrypt = document.getElementById('wordToDeCrypt');

// EVENTO DE SUBMIT PARA EL FORMULARIO DE CIFRADO
formCipher.addEventListener('submit', (event) => {
  // PREVENGO QUE SE RECARGUE LA PAGINA
  event.preventDefault();

  // OBTENGO EL NUMERO DESPLAZAMIENTOS DEL INPUT
  const offset = parseInt(shiftNumber.value);

  // OBTENGO LA FRASE A ENCRIPTAR
  const phraseToEncrypt = inputWordToEncrypt.value;

  // LLAMO A LA FUNCION GLOBAL "cipher" EN window PARA ENCRIPTAR LA FRASE
  const result = cipher.encode(offset, phraseToEncrypt);

  // COLOCO EL RESULTADO DEL CIFRADO EN EL INPUT PARA DESCIFRAR
  inputWordToDecrypt.value = result
});

// EVENTO DE SUBMIT PARA EL FORMULARIO DE DECIFRADO
formDecipher.addEventListener('submit', (event) => {
  // PREVENGO QUE SE RECARGUE LA PAGINA
  event.preventDefault();

  // OBTENGO EL NUMERO DE DESPLAZAMIENTOS A APLICAR
  const offset = parseInt(shiftNumber.value);

  // OBTENGO LA FRASE A DESENCRIPTAR
  const phraseToDecrypt = inputWordToDecrypt.value;

  // LLAMO A LA FUNCION GLOBAL "decipher" EN window PARA DESENCRIPTAR
  const result = cipher.decode(offset, phraseToDecrypt)

  // COLOCO EL RESULTADO EN EL INPUT DE CRIFRAR
  inputWordToEncrypt.value = result
});
