// DECLACARACIONES

// REFERENCIA AL FORMULARIO
const formCipher = document.getElementById('formCipher');

// REFERENCIA AL INPUT QUE TIENE EL NUMERO DE DESPLAZAMIENTOS A APLICAR
const shiftNumber = document.getElementById('shift');

// REFERENCIA AL TEXT AREA DONDE ESTA LA FRACE A ENCRIPTAR O DECIFRAR
const textArea = document.getElementById('text')

// REFERENCIA A LA ETIQUETA P QUE VA A TENER EL TEXTO CIFRADO O DECIFRADO
const pResult = document.getElementById('result')

// REFERENCIA AL DROPDOWN PARA ELEGIR SI CIFRAR O DECIFRAR
const sOperation = document.getElementById('operation')

// REFERENCIA AL BOTON PARA EJECUTAR TAREA
const btnTask = document.getElementById('btnTask')

// ESTA VARIABLE TIENE EL NOMBRE DE LA TAREA A REALIZAR
let optionSelected = 'encode'

sOperation.addEventListener('change', (event) => {
  optionSelected = event.target.value
  if (optionSelected === 'encode') {
    btnTask.innerHTML = 'Cifrar'
  } else {
    btnTask.innerHTML = 'Descifrar'
  }
});



// EVENTO DE SUBMIT PARA EL FORMULARIO DE CIFRADO
formCipher.addEventListener('submit', (event) => {
  // PREVENGO QUE SE RECARGUE LA PAGINA
  event.preventDefault();
  let result = null

  // OBTENGO EL NUMERO DESPLAZAMIENTOS DEL INPUT
  const offset = parseInt(shiftNumber.value);

  // OBTENGO LA FRASE A ENCRIPTAR
  const phraseToTransform = textArea.value;

  if (optionSelected === 'encode') {
    // LLAMO A LA FUNCION GLOBAL "cipher" EN window PARA ENCRIPTAR LA FRASE
    result = cipher.encode(offset, phraseToTransform);
  } else {
    // LLAMO A LA FUNCION GLOBAL "decipher" EN window PARA DESENCRIPTAR
    result = cipher.decode(offset, phraseToTransform);
  }

  // COLOCO EL RESULTADO DEL CIFRADO EN EL INPUT PARA DESCIFRAR
  pResult.innerHTML = result;
});
