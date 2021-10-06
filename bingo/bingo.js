function juegobingo(){

    let jugador=prompt('Hola!, Introduzca un nombre de usuario.');
        if(jugador==null||jugador==''){
            jugador='Anonimo';
        }
    
    let isX= (n)=> n=='x';
        
        cartones();
    
    function cartones(){

    let numRandoms=[];
        do{
            let n=Math.floor(Math.random()*50)+1;
            if(numRandoms.includes(n)==false){
            numRandoms.push(n);
            }

        }while(numRandoms.length<15);

        let linea1= numRandoms.slice(0,5);
        let linea2=numRandoms.slice(5,10);
        let linea3=numRandoms.slice(10,15);
        

        carton=[linea1, linea2, linea3];
        console.table(carton);

        let cartonOK=confirm('Si esta de acuerdo con el carton generado pulse: Aceptar, Si desea generar otro, pulse:Cancelar');
        if(!cartonOK){
            cartones();
        }
        else{
            partida();
        }
    
    
    function partida(){
        alert('Bienvenido al Bingo!, su puntaje sera decidido a partir de la resta de turnos que le tome completar su carton al puntaje total por bingo, Suerte!');

        let players=[{name:'Arthas', turns:28,},{name:'Illidan', turns:33,},{name:'kaelthas', turns:60,},{name:'guldan', turns:70,}];
        let turnos=[];
        let bomboUsed=[];
        let numeroSacado;
        let linea=[];

        do{
            let numRandom=Math.floor(Math.random()*50)+1;
            if(!bomboUsed.includes(numRandom)){
                numeroSacado=confirm('El numero sacado es: '+numRandom+'. ¿Desea continuar con este número?');
                if(numeroSacado){
                    for(let i=0; i<carton.length;i++){
                        for(let j=0; j<carton[i].length; j++){
                            if(carton[i][j]===numRandom){
                                carton[i][j]='x';
                                console.log(typeof(carton[i][j]));

                                                   
                            }
                            if(carton[i].every(isX) && linea.length==0){
                                alert('Ha cantando LINEA!!!!!');
                                linea.push('1');  
                                 
                            } 
                        }
                          
                    }
                    
                bomboUsed.push(numRandom);
                }
                
                console.table(carton);
                turnos.push(1);
            }

        }while(!((carton.flat()).every(isX)));

        //puntaje
        if((carton.flat()).every(isX)){
            alert('BINGO!!!!');
            let puntajeJugador={name:jugador, turns:turnos.length,}
            players.push(puntajeJugador);

            for(let i=0;i<players.length;i++){
                players[i].puntos=300-(players[i].turns);

            }
            players.sort(function(a,b){return b.puntos-a.puntos});
            console.log('Estos son los ranking de esta partida:')
            for(let i=0; i<players.length; i++){
                console.log('Nombre: '+players[i].name+', su puntuación ha sido '+ players[i].puntos);
            }
        }

        let nuevapartida=confirm('¿Desea jugar otra partida?');
    if(nuevapartida){
        juegobingo();
    }
    else{
        adios();
        
    }

}

}
function adios(){
    console.log('Muchas gracias por jugar, Hasta Luego!');
}
}
juegobingo();

