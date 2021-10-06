
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

    function airlines(){
        identify();
        function identify(){
            let user=prompt('Introduce tu usuario, por favor.');
            if(user==null||user==""){
                console.log('Bienvenido/a a Skylab Airlines!');
                vuelos();
            }
            else{
            console.log('Bienvenido/a de nuevo,', (user),'a Skylab Airlines! ');
            vuelos()
            }
        }

        function vuelos(){
            console.log('A continuación le mostraremos nuestros vuelos del dia de hoy:');
            let numScale=0;
            for(let i=0;i<flights.length;i++){
                if(flights[i].scale){
                    numScale++;
                    console.log('El vuelo con destino '+ (flights[i].to) +', desde '+(flights[i].from)+', con precio de '
                    +(flights[i].cost)+'€, SI realiza una escala.');
                }
                else{
                    console.log('El vuelo con destino '+ (flights[i].to) +', desde '+ (flights[i].from) +', con precio de '
                    + (flights[i].cost)+ '€, NO realiza ninguna escala.');
                }
            }
            
            console.log('Como habrá visto, solo '+(numScale)+' realizan escala, siempre buscamos su mayor comodidad');
            
            costemedio();
        }
        function costemedio(){
            
            let costeTotal=0;
            for(let i=0;i<flights.length;i++){
                console.log(typeof costeTotal);
                costeTotal += flights[i].cost;
            }
            const midCost= costeTotal / flights.length;
            console.log('A su vez pensamos en su bolsillo! ya que nuestros vuelos tienen un precio medio de: '+ midCost.toFixed(2)+'€');
            lastFlights();
        }
        function lastFlights(){
            console.log('En caso de que quiera volar al final del día, estos son nuestros ultimos 4 vuelos de la jornada:');
            for(let i=(flights.length-4);i<flights.length;i++){
                console.log('El vuelo con destino '+ (flights[i].to) +', desde '+(flights[i].from)+', con precio de '
                +(flights[i].cost)+'€');
            }

        }
    }
    airlines();