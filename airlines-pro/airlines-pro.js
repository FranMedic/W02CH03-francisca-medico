/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */

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

function airlines() {
  function userIdentity() {
    // eslint-disable-next-line no-alert
    const idenUser = prompt("Es usted Admin o User?");
    if (idenUser == null) {
      // eslint-disable-next-line no-alert
      alert("El usuario no es válido vuelva a intentarlo");
      userIdentity();
    }

    switch (idenUser.toLowerCase()) {
      case "admin":
        modoAdmin();
        break;
      case "user":
        modoUser();
        break;
      default:
        // eslint-disable-next-line no-alert
        alert("El usuario no es válido vuelva a intentarlo");
        userIdentity();
    }
  }
  function modoAdmin() {
    // eslint-disable-next-line no-restricted-globals
    const question = confirm("Desea añadir mas vuelos?");
    if (question === true) {
      plusFlights();
    } else {
      // eslint-disable-next-line no-restricted-globals
      const question2 = confirm("Desea borrar vuelos?");
      if (question2 === true) {
        lessFlights();
      } else {
        console.log("Hasta Luego!");
      }
    }
  }

  function plusFlights() {
    let newFlight;
    if (flights.length < 15) {
      const id = flights.length - 1;
      const to = prompt("Introduzca el destino:");
      const from = prompt("Introduzca el origen:");
      let cost = prompt("Introduzca el precio del vuelo:");
      // eslint-disable-next-line no-restricted-globals
      const scale = confirm("¿Realiza escala o no?");
      if (Number.isNaN(cost) || cost === null || cost === "") {
        alert("Datos erroneos, introduzca el precio en numeros");
        cost = prompt("Introduzca el precio del vuelo:");
      }

      newFlight = { id, to, from, cost: parseInt(cost, 10), scale };

      flights.push(newFlight);

      const lastadded = flights[flights.length - 1];

      console.log(
        `Ha introducido el siguiente vuelo: id: ${lastadded.id}, Destino: ${lastadded.to}, Origen: ${lastadded.from}, Coste: ${lastadded.cost}, Escala: ${lastadded.scale}.`
      );

      // eslint-disable-next-line no-restricted-globals
      const more = confirm("¿Desea introducir otro vuelo? y/n");
      if (more === true) {
        plusFlights();
      } else {
        console.log("Hasta Luego!");
      }
    } else {
      alert("No se pueden introducir más vuelos");
    }
  }

  function lessFlights() {
    const idDelete = parseInt(
      prompt("Introduzca el ID del vuelo a borrar:"),
      10
    );
    if (Number.isNaN(idDelete) || idDelete > flights.length - 1) {
      alert("Id erroneo, vuelva a introducirlo");
    } else {
      for (let i = 0; i < flights.length; i++) {
        if (idDelete === flights[i].id) {
          const removed = flights.splice(i, 1);
          console.log(removed);
          console.log(
            "Ha borrado el siguiente vuelo: id:",
            `${removed[0].id}, Destino: ${removed[0].to}, Origen:${removed[0].from}, Precio: ${removed[0].cost}, Escala: ${removed[0].scale}`
          );
        }
      }
    }
    // eslint-disable-next-line no-restricted-globals
    const redelete = confirm("¿Quieres borrar mas vuelos?");
    if (redelete) {
      lessFlights();
    } else {
      console.log("Hasta Luego!");
    }
  }

  function modoUser() {
    const preciocliente = parseFloat(prompt("Introduzca el precio que busca:"));

    console.log(`ESTOS SON LOS VUELOS MAS BARATOS QUE ${preciocliente}`);
    for (let i = 0; i < flights.length; i++) {
      if (preciocliente > flights[i].cost) {
        console.log(
          `El vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€, y escala: ${flights[i].scale}`
        );
      }
    }

    console.log(`ESTOS SON LOS VUELOS DEL MISMO PRECIO QUE ${preciocliente}`);
    for (let i = 0; i < flights.length; i++) {
      if (preciocliente === flights[i].cost) {
        console.log(
          `El vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€, y escala: ${flights[i].scale}`
        );
      }
    }
    console.log(`ESTOS SON LOS VUELOS MAS CAROS QUE ${preciocliente}`);
    for (let i = 0; i < flights.length; i++) {
      if (preciocliente < flights[i].cost) {
        console.log(
          `El vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€, y escala: ${flights[i].scale}`
        );
      }
    }
    compra();

    function compra() {
      // eslint-disable-next-line no-func-assign
      compra = prompt(
        "Para comprar su vuelo, introduzca la ID correspondiente"
      );
      if (Number.isNaN(compra) || compra === "" || compra === null) {
        alert("Error. Especifique la Id correcta");
        compra();
      } else {
        for (let i = 0; i < flights.length; i++) {
          if (compra === flights[i].id) {
            console.log(
              `Ha comprado el vuelo con destino ${flights[i].to}, desde ${flights[i].from}, con precio de ${flights[i].cost}€, y escala: ${flights[i].scale}`
            );
            console.log("Gracias por su compra!, Vuelva Pronto!");
          }
        }
      }
    }
  }

  identify();
  function identify() {
    const user = prompt("Introduce tu usuario, por favor.");
    if (user === null || user === "") {
      console.log("Bienvenido/a a Skylab Airlines!");
      // eslint-disable-next-line no-use-before-define
      vuelos();
    } else {
      console.log("Bienvenido/a de nuevo,", user, "a Skylab Airlines! ");
      vuelos();
    }
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
  function costemedio() {
    let costeTotal = 0;
    for (let i = 0; i < flights.length; i++) {
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

  userIdentity();
}

airlines();
