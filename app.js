let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementHTML = document.querySelector(elemento);
  elementHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('numero-input').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      'p',
      `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`
    );
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    // El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.getElementById('numero-input').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(
      'p',
      'Todos los numeros del juego ya han sido asignados'
    );
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      // Revisar si el numero generado esta en la lista
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      console.log(listaNumerosSorteados);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;

  console.log(numeroSecreto);
}

function reiniciarJuego() {
  // Limpiar caja
  limpiarCaja();
  // Mensaje de intervalo
  // Generar nuermo aletorio
  // Incializar el numero de intentos
  condicionesIniciales();
  // Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

// DESAFIOS
// function calcularIMC(altura, peso) {
//   return (peso / (altura * altura)).toFixed(2);
// }

// function calcularFactorial(num) {
//   if (num === 2) {
//     return 2;
//   }
//   return num * calcularFactorial(num - 1);
// }

// function calcularUSDtoPEN(dolares) {
//   let cambio = 3.8;
//   return `${dolares}$ equivalen a ${dolares * cambio} PEN`;
// }

// function calcularAreaYPerimetroRectangular(altura, ancho) {
//   let area = altura * ancho;
//   let perimetro = (altura + ancho) * 2;
//   return `El area del rectangulo es ${area}, y el perimetro es ${perimetro}`;
// }

// function calcularAreaYPermetroCircular(radio) {
//   let area = radio * radio * Math.PI;
//   let perimetro = 2 * radio * Math.PI;
//   return `El area del circulo  es ${area}, y el perimetro es ${perimetro}`;
// }

// function mostrarTablaMultiplicar(num) {
//   limite = num > 12 ? num : 12;
//   for (let i = 0; i < limite; i++) {
//     console.log(`${i}. ${num} x ${i} = ${num * i}`);
//   }
//   return;
// }
