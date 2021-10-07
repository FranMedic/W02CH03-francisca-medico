function calculator() {
  let newNumber;
  const numberList = [];
  const resultados = [];
  do {
    // eslint-disable-next-line no-alert
    newNumber = prompt(
      'Introduzca un numero, si quiere parar pulse "cancelar".'
    );
    if (newNumber === null) {
      break;
    } else if (!Number.isNaN(newNumber) && newNumber !== "") {
      numberList.push(newNumber);
    } else {
      // eslint-disable-next-line no-alert
      alert("ERROR. Valor no valido");
    }
  } while (true);
  console.log(numberList);

  if (numberList[0] === null) {
    // eslint-disable-next-line no-alert
    alert("ERROR. Valor no valido");
    calculator();
  }
  if (numberList.length === 1) {
    const squareroot = Math.sqrt(numberList[0]);
    return console.log(
      "La raiz cuadrada de ",
      numberList[0],
      " es:",
      squareroot.toFixed(3)
    );
  }

  let sumaFinal = numberList[0];
  sumaFinal = parseFloat(sumaFinal);
  let restaFinal = numberList[0];
  let productFinal = numberList[0];
  let divisionFinal = numberList[0];

  for (let i = 1; i < numberList.length; i++) {
    sumaFinal += parseFloat(numberList[i]);
    restaFinal -= numberList[i];
    productFinal *= numberList[i];
    divisionFinal /= numberList[i];
  }
  resultados.push(sumaFinal);
  resultados.push(restaFinal);
  resultados.push(productFinal);
  resultados.push(divisionFinal).toFixed(3);

  return console.log(
    "La suma de",
    numberList.join(" + "),
    "es:",
    `${resultados[0]}. La resta de`,
    numberList.join(" - "),
    "es:",
    `${resultados[1]}. La multiplicación de`,
    numberList.join(" * "),
    " es:",
    `${resultados[2]}. La division de`,
    numberList.join(" / "),
    "es:",
    resultados[3]
  );
}
calculator();

do {
  // eslint-disable-next-line no-alert
  // eslint-disable-next-line no-restricted-globals
  const pregunta = confirm("¿Desea realizar nuevas operaciones?");
  if (pregunta === true) {
    calculator();
  } else {
    break;
  }
} while (true);
console.log("Hasta Luego!");
