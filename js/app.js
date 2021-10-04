/* Variable de array */
let combinacion = [];

let aleatorio;
let completario;
let reintegro;
let numMax = 49;
let numMin = 1;
let contador;

/* Variable Mensajes */
let msg0 = "Los números escogidos son: ";
let msg1 = "<br>Combinación ganadora: ";
let msg2 = "<br>Número Complementario: ";
let msg3 = "<br>Número de Reintegro: ";

/* Variables num Usuario */
let n1;
let n2;
let n3;
let n4;
let n5;
let n6;

/* Validar num Usuario */
do {
  n1 = parseInt(prompt("Introduzca el primer número: "));
} while (!Number.isInteger(n1) && isNaN(n1) && n1 >= numMin && n1 <= numMax);
do {
  n2 = parseInt(prompt("Introduzca el segundo número: "));
} while (!Number.isInteger(n2) && isNaN(n2) && n2 >= numMin && n2 <= numMax);
do {
  n3 = parseInt(prompt("Introduzca el tercer número: "));
} while (!Number.isInteger(n3) && isNaN(n3) && n3 >= numMin && n3 <= numMax);
do {
  n4 = parseInt(prompt("Introduzca el cuarto número: "));
} while (!Number.isInteger(n4) && isNaN(n4) && n4 >= numMin && n4 <= numMax);
do {
  n5 = parseInt(prompt("Introduzca el quinto número: "));
} while (!Number.isInteger(n5) && isNaN(n5) && n5 >= numMin && n5 <= numMax);
do {
  n6 = parseInt(prompt("Introduzca el sexto número: "));
} while (!Number.isInteger(n6) && isNaN(n6) && n6 >= numMin && n6 <= numMax);

/* Comprobar Repetido */
function comprobarRepetido(combinacion, aleatorio) {
  let val = false;
  for (let i = 0; i < combinacion.length; i++) {
    if (combinacion[i] == aleatorio) {
      val = true;
    }
  }
  return val;
}

/* Crear Combinación */
function crearCombinacion() {
  while (combinacion.length < 6) {
    aleatorio = Math.floor(Math.random() * numMax + 1);
    reintegro = comprobarRepetido(combinacion, aleatorio);
    if (!reintegro) {
      combinacion[combinacion.length] = aleatorio;
    }
  }

  do {
    complementario = Math.floor(Math.random() * numMax + 1);
    reintegro = comprobarRepetido(combinacion, complementario);
  } while (reintegro);

  reintegro = Math.floor(Math.random() * 9 + 1);
  // ordenar la combinación de mayor a menor
  combinacion.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("tabla").innerHTML =
    msg0 +
    n1 +
    ", " +
    n2 +
    ", " +
    n3 +
    ", " +
    n4 +
    ", " +
    n5 +
    ", " +
    n6 +
    msg1 +
    combinacion +
    msg2 +
    complementario +
    msg3 +
    reintegro +
    "<br><br>";
}

/*Tabla  */
function crearTabla() {
  // Array números usuarios
  let usuario = [n1, n2, n3, n4, n5, n6];
  contador = 0 + 1;
  let tabla = document.createElement("table");

  for (let i = 0; i < 7; i++) {
    fila = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      celda = document.createElement("td");

      // Pintar números usuario
      if (usuario.includes(contador)) {
        celda.setAttribute("class", "azul");

        // Pintar números Cominación
      } else if (combinacion.includes(contador)) {
        celda.setAttribute("class", "rojo");
      } else {
        // Cambiar color complementario
        if (contador == complementario) {
          celda.setAttribute("class", "verde");
        }
      }

      // Color números acertados
      if (usuario.includes(contador) && combinacion.includes(contador)) {
        celda.setAttribute("class", "acierto");
      }

      // Color número reintegro acertado
      if (usuario.includes(contador) && contador == complementario) {
        celda.setAttribute("class", "aciertoRein");
      }

      textoCelda = document.createTextNode(contador);
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
      contador++;
    }
    tabla.appendChild(fila);
  }
  document.getElementById("tabla").appendChild(tabla);
}

window.onload = function () {
  crearCombinacion();
  crearTabla();
};

window.addEventListener("load", function () {
  numAcertados();
});

function numAcertados() {
  if (
    combinacion.includes(n1) ||
    combinacion.includes(n2) ||
    combinacion.includes(n3) ||
    combinacion.includes(n4) ||
    combinacion.includes(n5) ||
    combinacion.includes(n6)  ) {
    document.getElementById("acertados").innerHTML =
      "Enhorabuena, has acertado algún número";
  } else if(usuario.includes(reintegro)){
    document.getElementById("reintegro").innerHTML =
      "Enhorabuena, has acertado el complementario";
  }else {
    document.getElementById("acertados").innerHTML =
      "Lo siento, no has acertado ninguno";
  }
}
