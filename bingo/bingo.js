/* eslint-disable no-alert */
function juegobingo() {
  let jugador = prompt("Hola!, Introduzca un nombre de usuario.");
  if (jugador === null || jugador === "") {
    jugador = "Anonimo";
  }

  const isX = (n) => n === "x";

  // eslint-disable-next-line no-use-before-define
  cartones();

  function cartones() {
    const numRandoms = [];
    do {
      const n = Math.floor(Math.random() * 50) + 1;
      if (numRandoms.includes(n) === false) {
        numRandoms.push(n);
      }
    } while (numRandoms.length < 15);

    const linea1 = numRandoms.slice(0, 5);
    const linea2 = numRandoms.slice(5, 10);
    const linea3 = numRandoms.slice(10, 15);

    const carton = [linea1, linea2, linea3];
    console.table(carton);

    // eslint-disable-next-line no-restricted-globals
    const cartonOK = confirm(
      "Si esta de acuerdo con el carton generado pulse: Aceptar, Si desea generar otro, pulse:Cancelar"
    );
    if (!cartonOK) {
      cartones();
    } else {
      // eslint-disable-next-line no-use-before-define
      partida();
    }

    function partida() {
      alert(
        "Bienvenido al Bingo!, su puntaje sera decidido a partir de la resta de turnos que le tome completar su carton al puntaje total por bingo, Suerte!"
      );

      const players = [
        { name: "Arthas", turns: 28 },
        { name: "Illidan", turns: 33 },
        { name: "kaelthas", turns: 60 },
        { name: "guldan", turns: 70 },
      ];
      const turnos = [];
      const bomboUsed = [];
      let numeroSacado;
      const linea = [];

      do {
        const numRandom = Math.floor(Math.random() * 50) + 1;
        if (!bomboUsed.includes(numRandom)) {
          // eslint-disable-next-line no-restricted-globals
          numeroSacado = confirm(
            `El numero sacado es: ${numRandom}. ¿Desea continuar con este número?`
          );
          if (numeroSacado) {
            for (let i = 0; i < carton.length; i++) {
              for (let j = 0; j < carton[i].length; j++) {
                if (carton[i][j] === numRandom) {
                  carton[i][j] = "x";
                  console.log(typeof carton[i][j]);
                }
                if (carton[i].every(isX) && linea.length === 0) {
                  alert("Ha cantando LINEA!!!!!");
                  linea.push("1");
                }
              }
            }

            bomboUsed.push(numRandom);
          }

          console.table(carton);
          turnos.push(1);
        }
      } while (!carton.flat().every(isX));

      // puntaje
      if (carton.flat().every(isX)) {
        // eslint-disable-next-line no-alert
        alert("BINGO!!!!");
        const puntajeJugador = { name: jugador, turns: turnos.length };
        players.push(puntajeJugador);

        for (let i = 0; i < players.length; i++) {
          players[i].puntos = 300 - players[i].turns;
        }
        players.sort((a, b) => b.puntos - a.puntos);
        console.log("Estos son los ranking de esta partida:");
        for (let i = 0; i < players.length; i++) {
          console.log(
            `Nombre: ${players[i].name}, su puntuación ha sido ${players[i].puntos}`
          );
        }
      }

      // eslint-disable-next-line no-restricted-globals
      const nuevapartida = confirm("¿Desea jugar otra partida?");
      if (nuevapartida) {
        juegobingo();
      } else {
        // eslint-disable-next-line no-use-before-define
        adios();
      }
    }
  }
  function adios() {
    console.log("Muchas gracias por jugar, Hasta Luego!");
  }
}
juegobingo();
