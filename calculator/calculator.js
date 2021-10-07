let num1;
let num2;

function newSquare(n1) {
  const squareroot = Math.sqrt(n1);
  return console.log("La raiz cuadrada de ", n1, " es:", squareroot.toFixed(3));
}
function calculadora(n1, n2) {
  const suma = parseFloat(n1) + parseFloat(n2);
  const resta = n1 - n2;
  const multi = n1 * n2;
  const division = n1 / n2;
  const resultados = [];

  resultados.push(suma);
  resultados.push(resta);
  resultados.push(multi);
  resultados.push(division).toFixed(3);
  return console.log(
    "La suma de",
    n1,
    "y",
    n2,
    "es:",
    `${resultados[0]}. La resta de`,
    n1,
    "y",
    n2,
    "es:",
    `${resultados[1]}. La multiplicación de`,
    n1,
    "y",
    n2,
    "es:",
    `${resultados[2]}. La division de`,
    n1,
    "y",
    n2,
    "es:",
    resultados[3]
  );
}
do {
  num1 = prompt("Introduzca el primer numero");
  if (Number.isNaN(num1) || num1 === "" || num1 === null) {
    alert("ERROR. Porfavor, introduzca un número");
  } else {
    // eslint-disable-next-line no-alert
    num2 = prompt("Introduzca el Segundo numero");
    if (num2 == null) {
      newSquare(num1);
    } else if (!Number.isNaN(num2) && num2 !== "") {
      calculadora(num1, num2);
      break;
    } else {
      alert("ERROR. Porfavor, introduzca un número");
    }
  }
} while (true);
