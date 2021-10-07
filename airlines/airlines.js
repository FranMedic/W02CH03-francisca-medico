const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function lastFlights() {
  console.log(
    "En caso de que quiera volar al final del día, estos son nuestros ultimos 4 vuelos de la jornada:"
  );
  for (let i = flights.length - 4; i < flights.length; i++) {
    console.log(
      `El vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€`
    );
  }
}
function airlines() {
  function costemedio() {
    let costeTotal = 0;
    for (let i = 0; i < flights.length; i++) {
      console.log(typeof costeTotal);
      costeTotal += flights[i].cost;
    }
    const midCost = costeTotal / flights.length;
    console.log(
      `A su vez pensamos en su bolsillo! ya que nuestros vuelos tienen un precio medio de: ${midCost.toFixed(
        2
      )}€`
    );
    lastFlights();
  }
  function vuelos() {
    console.log(
      "A continuación le mostraremos nuestros vuelos del dia de hoy:"
    );
    let numScale = 0;
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].scale) {
        numScale++;
        console.log(
          `El vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€, SI realiza una escala.`
        );
      } else {
        console.log(
          `El vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€, NO realiza ninguna escala.`
        );
      }
    }

    console.log(
      `Como habrá visto, solo ${numScale} realizan escala, siempre buscamos su mayor comodidad`
    );

    costemedio();
  }
  function identify() {
    // eslint-disable-next-line no-alert
    const user = prompt("Introduce tu usuario, por favor.");
    if (user === null || user === "") {
      console.log("Bienvenido/a a Skylab Airlines!");
      vuelos();
    } else {
      console.log("Bienvenido/a de nuevo,", user, "a Skylab Airlines! ");
      vuelos();
    }
  }
  identify();
}
airlines();
