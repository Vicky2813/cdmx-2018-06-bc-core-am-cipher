# Cifrado César

## Preámbulo

La famila Malandrucco Linarez son un grupo familiar muy grande , esta el señor  
Alexander y su esposa Martha, tienen 4 maravillosos hijos (Ana,Maria,Pedro y
Rafael), ellos son muy felices pero su padre por ser militar y estar en el
ARMY lo mandaron durante un año para un entrenamiento intensivo en una zona
desconocida por su familia. AL pasar el año su padre se comunico con su hijo
mayor Pedro y le informo que quería organizar una fiesta sorpresa para su esposa
ya que llegaría el mismo día de su 30 aniversario.

Un gran problema es que la madre siempre esta en casa, y al estar sola cuidando
de sus hijos es muy sobreprotectora, debido a esto se la pasa revisando los
mensajes de sus hijos para saber en que andan. Pedro al saber esto, decide
crear una aplicación que le permita enviar mensajes cifrados a su padre y a sus
hermanos y que ellos puedan tener una interfaz para descifrarlo.

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

* [Aprende más sobre :
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)

## Objetivos

* El objetivo principal es construir una aplicación web que contenga una buena
experiencia de usuario, permitiendo al usuario cifrar y descifrar mensajes.


## Consideraciones generales

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Definición del producto
* quiénes son los principales usuarios de producto: Todas aquellas personas
  que necesiten o deseen comunicarse con mensajes encriptados y desencriptados
  para algún tipo de evento en particular como en el preámbulo que se lee al
  principio del README.

* cuáles son los objetivos de estos usuarios en relación con el producto: los
  objetivos del usuario es poder encriptar y desencriptar mensajes, logrando
  un fin en común.

* cómo crees que el producto que estás creando les está resolviendo sus
  problemas: Les esta permitiendo a todos aquellos usuarios interesados en cifrar
  y descifrar mensajes que pudo haber enviado a través de una plataforma.


### UI

La interfaz le permite al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado

### Cómo instalar la aplicación (offline):

- Debes descargar el proyecto de [Cifrado César](https://github.com/Vicky2813/cdmx-2018-06-bc-core-am-cipher/archive/master.zip)
- Descomprimir el zip ´cdmx-2018-06-bc-core-am-cipher-master.zip´
- Ejecutar el proyecto accediendo a ´src/index´

### Ejecutar version online:
- [Cifrado César online](https://vicky2813.github.io/cdmx-2018-06-bc-core-am-cipher/src/)


### Cómo usar:
Al entrar a la aplicación podemos apreciar una interfaz que contiene cuatro inputs:
- El primer input: Colocaras el número de desplazamientos con los que deseas
que se encripte tu mensaje.
- Segundo input: Puedes elegir si deseas encriptar o desencriptar tu mensaje,
frase o palabra.
- El tercer input: Escribiras lo que deseas cifrar o descifrar, ( recuerda que
  solo se permitiran letras mayúsculas y letras minúsculas,); en su parte inferior
  encontrarás un botón el cuál tendrás que presionar para que obtengas el resultado
  de tu mensaje, frase o palabra.
- Cuarto input: Aqui aparacerá el resultado de tu mensaje, frase o palabra; sea
que decidieras encriptar o desencriptar.

### Funcionalidad :
Permite que los usuarios puedan acceder a la información mediante un enlace vía
internet. No ocupa espacio físico, te permite ahorrar tiempo y trabajo, ya que
con ella puedes encriptar un mensaje que no quieras que sea leído por todos;
sino por un grupo de personas en particular. Pero al mismo tiempo, también
te permite desencriptar dicho mensaje o cualquier otro que necesites saber
que contiene.

### Desiciones de diseño:

Durante el desarrollo de este proyecto, se llegó a la conclusión de que tomaría
mucho tiempo estilizar el css ya realizado y ajustarlo al concepto de
responsive design. Por lo tanto, se tomo la decisión de utilizar el framework
´bootstrap´, ya que este está hecho con el concepto de responsive design, por lo
cual el tiempo de desarrollo de una interfaz con el concepto de responsive
design iba a ser mucho menor al realizar de forma manual.

En este proyecto se encuentran realizados dos interfaces, las cuales realizan
la misma funcionalidad: Una desarrollada con css vanilla y la otra realizada
con bootstrap en su versión 4.

Se conservaron ambas versiones, creando una interfaz que te permita seleccionar
que versión quieres utilizar.


***
