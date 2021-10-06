
let questions =[
    {letra:'a', status:0, respuesta: {1:'albondiga', 2:'alegria', 3:'arbol'}, preguntas:{1:'Con la A: Bola pequeña hecha de carne o pescado picados y mezclados con huevo, pan rallado y especias que se reboza en harina, se fríe y generalmente después se cocina con una salsa; se sirven varias por ración', 
    2:'Con la A : Sentimiento de placer producido normalmente por un suceso favorable que suele manifestarse con un buen estado de ánimo, la satisfacción y la tendencia a la risa o la sonrisa.', 
    3:'Con la A: Planta de tronco leñoso, grueso y elevado que se ramifica a cierta altura del suelo formando la copa.',}},
   
    {letra:'b', status:0, respuesta: {1:'balon', 2:'boca', 3:'bombon'}, preguntas:{1:'Con la B: Pelota grande llena de aire que se utiliza para jugar o para practicar determinados deportes.',
    2:'Con la B: Abertura por donde los animales reciben los alimentos; en el hombre y muchos animales está situada en la parte inferior de la cara y está formada por una cavidad que va desde los labios hasta la garganta y en la que están la lengua y los dientes.', 
    3:'Con la B: Pequeño dulce de chocolate que suele ir relleno de trufa, licor, algún tipo de crema u otra cosa, como una avellana o una cereza confitada.',}},
   
    {letra:'c',  status:0,respuesta: {1:'casa', 2:'coche', 3:'carton'}, preguntas:{1:'Con la C: Edificio o parte de él que constituye una vivienda particular.', 
    2:'Con la C: Vehículo automóvil de cuatro ruedas para circular por tierra, que se dirige mediante un volante y está destinado al transporte de personas.', 
    3:'Con la C: Lámina gruesa y dura, compuesta de varias capas de pasta de papel, de pasta de trapos, de papel viejo u otras materias que, en estado húmedo, se adhieren unas a otras por compresión y después se secan por evaporación.',}},
   
    {letra:'d', status:0, respuesta: {1:'dedo', 2:'dublin', 3:'disco'}, preguntas:{1:'Con la D: Parte alargada en que terminan la mano y el pie de los vertebrados.', 
    2:'Con la D: Capital de la República de Irlanda.', 
    3:'Con la D: Lámina circular de materia plástica en que están grabados sonidos que se reproducen con un aparato que la hace girar mientras una aguja pasa por los surcos y amplifica la señal.',}},
  
    {letra:'e', status:0, respuesta: {1:'estomago', 2:'escuela', 3:'empeñar'}, preguntas:{1:'Con la E: Ensanchamiento del tubo digestivo del hombre y otros animales situado entre el esófago y el intestino, en cuyas paredes están las glándulas que segregan los jugos gástricos que intervienen en la digestión.', 
    2:'Con la E: Institución destinada a la enseñanza, en especial la primaria, que proporciona conocimientos que se consideran básicos en la alfabetización.', 
    3:'Con la E: Entregar a alguien una cosa de valor, como una joya, en depósito a cambio de una cantidad de dinero, generalmente en calidad de préstamo de cuya devolución responde esta cosa.',}},
  
    {letra:'f', status:0, respuesta: {1:'fuego', 2:'fantasma', 3:'fanfarria'}, preguntas:{1:'Con la F: Emisión de luz y calor producida por la combustión de una materia.', 
    2:'Con la F: Figura irreal, imaginaria o fantástica y normalmente incorpórea, que alguien cree ver; especialmente, imagen de una persona fallecida que se aparece a alguien.', 
    3:'Con la F: Banda de música formada por instrumentos de metal, en ocasiones acompañados de percusión, y que suele tocar por las calles en las fiestas populares y en ocasiones ceremoniosas.',}},
 
    {letra:'g', status:0, respuesta: {1:'gato', 2:'goma', 3:'guantes'}, preguntas:{1:'Con la G: Mamífero felino de tamaño generalmente pequeño, cuerpo flexible, cabeza redonda, patas cortas, cola larga, pelo espeso y suave, largos bigotes y uñas retráctiles; es carnívoro y tiene gran agilidad, buen olfato, buen oído y excelente visión nocturna; existen muchas especies diferentes.', 
    2:'Con la G: Sustancia amorfa y pegajosa, exudada por ciertas plantas, que se endurece al contacto con el aire, es soluble en agua e insoluble en alcohol y se emplea en la industria farmacéutica y como espesante.', 
    3:'Con la G: Prenda que cubre y protege la mano y que, según su empleo, tiene unas características distintas pudiendo tener una funda para cada uno de los dedos, cubrir parte del brazo y variar el tipo de material en que está confeccionada.',}},
  
    {letra:'h', status:0, respuesta: {1:'hotel', 2:'hablar', 3:'huevo'}, preguntas:{1:'Con la H: Establecimiento de hostelería que ocupa un edificio total o parcialmente con uso exclusivo de sus servicios (entradas, ascensores, escaleras, etc.) y que ofrece alojamiento y servicio de comedor.', 
    2:'Con la H: Articular sonidos y palabras [una persona] para expresarse o comunicarse.', 
    3:'Con la H: Cuerpo redondo u ovalado, con una membrana o cáscara exterior, que ponen las hembras de algunos animales y que contiene en su interior el embrión de un nuevo ser y el alimento necesario para que crezca.',}},
 
    {letra:'i', status:0, respuesta: {1:'instagram', 2:'ikea', 3:'incordiar'}, preguntas:{1:'Con la I: Aplicación y red social de origen estadounidense, propiedad de Facebook, cuya función principal es poder compartir fotografías y vídeos con otros usuarios.', 
    2:'Con la I: Corporación multinacional con sede en Suecia dedicada a la fabricación y venta minorista de muebles', 
    3:'Con la I: Fastidiar o molestar a una persona con algo que resulta pesado o repetitivo.',}},
   
    {letra:'j', status:0, respuesta: {1:'jamon', 2:'joroba', 3:'jueves'}, preguntas:{1:'Con la J: Pata trasera de cerdo, cruda o curada, que se destina al consumo alimenticio; también puede ser de otros animales.', 
    2:'Con la J: Abultamiento o protuberancia que tienen en el lomo ciertos animales formado por acumulación de grasas.',
    3:'Con la J: Cuarto día de la semana civil, quinto de la litúrgica.',}},
 
    {letra:'k', status:0, respuesta: {1:'kamikaze', 2:'kyoto', 3:'karate'}, preguntas:{1:'Con la K: Avión suicida del ejército japonés que en la Segunda Guerra Mundial se estrellaba voluntariamente cargado de explosivos contra el objetivo enemigo.', 
    2:'Con la K: Antigua capital de Japón, famosa por sus numerosos templos budistas clásicos y sus jardines, palacios imperiales, santuarios Shinto y casas de madera tradicionales.', 
    3:'Con la K: Sistema de combate sin armas de origen japonés, hoy practicado principalmente como deporte, en el que dos combatientes luchan con el objetivo de derribar al contrario mediante golpes secos dados con el canto de las manos, los codos y los pies.',}},

    {letra:'l', status:0, respuesta: {1:'luz', 2:'larva', 3:'luna'}, preguntas:{1:'Con la L: Forma de energía que ilumina las cosas, las hace visibles y se propaga mediante partículas llamadas fotones.', 
    2:'Con la L: Animal que se encuentra en la primera etapa del desarrollo posembrionario de los animales que experimentan desarrollo indirecto.', 
    3:'Con la L: Astro, satélite natural de la Tierra, que gira alrededor de ella y refleja la luz del Sol; tiene una superficie de aspecto volcánico y carece de atmósfera.',}},
 
    {letra:'m', status:0, respuesta: {1:'milagro', 2:'morcilla', 3:'marciano'}, preguntas:{1:'Con la M: Suceso extraordinario y maravilloso que no puede explicarse por las leyes regulares de la naturaleza y que se atribuye a la intervención de Dios o de un ser sobrenatural.', 
    2:'Con la M: Embutido elaborado básicamente con sangre cocida de cerdo condimentada con diversas especias y mezclada con otros ingredientes, en especial arroz, cebolla o miga de pan.', 
    3:'Con la M: Habitante imaginario del planeta Marte y, por extensión, de cualquier otro planeta.',}},
  
    {letra:'n', status:0, respuesta: {1:'nieve', 2:'nuera', 3:'nuez'}, preguntas:{1:'Con la N: Fenómeno meteorológico que consiste en la precipitación de pequeños cristales de hielo.', 
    2:'Con la N: Esposa del hijo de una persona.', 
    3:'Con la N: Prominencia que forma la laringe en la parte anterior del cuello del hombre adulto.',}},
  
    {letra:'o', status:0, respuesta: {1:'ombligo', 2:'ordeñar', 3:'ostra'}, preguntas:{1:'Con la O: Cicatriz redondeada y arrugada que se forma en medio del vientre tras cortar y secarse el cordón umbilical.', 
    2:'Con la O: Extraer la leche de un animal hembra exprimiendo las ubres.', 
    3:'Con la O: Molusco marino de valvas casi circulares, rugosas, desiguales y de color pardo verdoso; vive adherida a las rocas y su carne es comestible y muy apreciada',}},
  
    {letra:'p', status:0, respuesta: {1:'patata', 2:'puerta', 3:'pomelo'}, preguntas:{1:'Con la P: Tubérculo comestible, muy carnoso, de forma redonda o alargada y de color marrón por fuera y blanco o amarillo por dentro.', 
    2:'Con la P: Abertura que permite acceder al interior de un lugar.', 
    3:'Con la P: Fruto comestible, de color amarillo, de forma parecida a la naranja pero achatado, y sabor muy ácido.',}},
 
    {letra:'q', status:0, respuesta: {1:'queso', 2:'quilla', 3:'quimica'}, preguntas:{1:'Con la Q: Alimento sólido que se obtiene por maduración de la cuajada de la leche una vez eliminado el suero.', 
    2:'Con la Q: Pieza alargada de madera o de hierro, que va de proa a popa por la parte inferior de una embarcación, y en la que se apoya toda su armazón.', 
    3:'Con la Q: Ciencia que estudia la composición y las propiedades de la materia y de las transformaciones que esta experimenta sin que se alteren los elementos que la forman.',}},
  
    {letra:'r', status:0, respuesta: {1:'regalo', 2:'robot', 3:'rueda'}, preguntas:{1:'Con la R: Cosa que se da a una persona como muestra de afecto o de consideración.', 
    2:'Con la R: Máquina automática programable capaz de realizar determinadas operaciones de manera autónoma.', 
    3:'Con la R: Objeto circular, de poco grosor respecto a su radio, que puede girar sobre un eje de múltiples aplicaciones.',}},
  
    {letra:'s', status:0, respuesta: {1:'serpiente', 2:'silbido', 3:'suecia'}, preguntas:{1:'Con la S: Reptil sin extremidades, de cuerpo muy alargado y estrecho, con la cabeza aplastada, la boca grande y la piel escamosa; se aplica este nombre especialmente a los de gran tamaño; hay especies terrestres y especies acuáticas.', 
    2:'Con la S: Sonido producido al expulsar aire a través de los labios fruncidos con ocasional ayuda de los dedos.', 
    3:'Con la S: Nación escandinava cuya capital es Estocolmo.',}},
 
    {letra:'t', status:0,respuesta: {1:'tetera', 2:'tuetano', 3:'tuerto'}, preguntas:{1:'Con la T: Recipiente para preparar y servir el té, con una tapadera y un pitorro para verterlo.', 
    2:'Con la T: Medula de los huesos de un animal o del tallo de una planta.', 
    3:'Con la T:  Que está falto de un ojo o lo tiene ciego.',}},
   
    {letra:'u', status:0, respuesta: {1:'uva', 2:'universidad', 3:'urraca'}, preguntas:{1:'Con la U:Fruto de la vid, comestible, pequeño y de forma redonda u ovalada, piel muy fina y carne muy jugosa; nace junto a otros formando racimos.', 
    2:'Con la U: Institución destinada a la enseñanza superior, que está constituida por varias facultades y que concede los grados académicos correspondientes.', 
    3:'Con la U: Pájaro córvido de unos 45 cm de longitud, cola larga y plumaje negro brillante, con el vientre y los hombros blancos; se domestica con facilidad, e imita palabras y sonidos.',}},

    {letra:'v', status:0, respuesta: {1:'victima', 2:'vagon', 3:'vacuna'}, preguntas:{1:'Con la V: Persona o animal que sufre un daño o un perjuicio a causa de determinada acción o suceso.', 
    2:'Con la V : Plataforma o cabina del tren que es arrastrada por la locomotora, en donde viajan la carga o los pasajeros.', 
    3:'Con la V : Preparación destinada a generar inmunidad adquirida contra una enfermedad, mediante la estimulación de la producción de anticuerpos.​',}},
    
    {letra:'w', status:0, respuesta: {1:'watio', 2:'wasabi', 3:'wikipedia'}, preguntas:{1:'Con la W: Unidad de potencia, de símbolo W, que equivale a la potencia capaz de conseguir la producción de energía igual a 1 julio por segundo.', 
    2:'Con la W : Raíz de color verde claro, que se utiliza mucho en la cocina japonesa.', 
    3:'Con la W : Enciclopedia libre, ​ políglota y editada de manera colaborativa.',}},
    
    {letra:'y', status:0,respuesta: {1:'yate', 2:'yedra', 3:'yunque'}, preguntas:{1:'Con la Y: Embarcación de recreo a motor o a vela, de manga o anchura mayor que un velero, con camarotes y generalmente lujosa.', 
    2:'Con la Y : Planta trepadora, leñosa, de raíces adherentes que brotan de los tallos, gracias a las cuales repta sobre el suelo o trepa a lo largo de un soporte u otra planta; tiene hojas brillantes y verdes.', 
    3:'Con la Y : Bloque de hierro, generalmente con uno de sus lados acabado en punta, sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo.',}},
   
    {letra:'z', status:0, respuesta: {1:'zoo', 2:'zapato', 3:'zigzag'}, preguntas:{1:'Con la Z: Recinto con instalaciones adecuadas para conservar, cuidar y criar especies diferentes de animales, especialmente salvajes y exóticos, que puede ser visitado por el público.', 
    2:'Con la Z : Calzado que cubre total o parcialmente el pie sin sobrepasar el tobillo, con una suela de un material casi siempre más duro que el resto.', 
    3:'Con la Z : Línea quebrada formada por segmentos que están unidos formando ángulos entrantes y salientes.',}}
    
    ];
function pasapalabra(){
    let respuesta;
    let cuantosPasa;
    let cuantosAciertos;
    let cuantosErrores;
    let preguntaRandom = Math.floor(Math.random()*3)+1;
    let turnos=[];

    let jugadores=[{name:'Arthas', turns:28,},{name:'Illidan', turns:32,},{name:'kaelthas', turns:35,},{name:'guldan', turns:50,}];
    


    let jugador=prompt('Hola!, Introduzca un nombre de usuario.');
        if(jugador==null||jugador==''){
            jugador='Anonimo';
        }
    
        console.log('Hola!'+ jugador+ '\n'+
        'A continuacion te explicare las normas del juego:\n'+
        'Este juegos consiste en una serie de preguntas a las que responder con una palabra que empiece por la letra correspondiente\n'+
        'Si estas seguro de la respuesta, escríbela, RECUERDA! Porfavor, No escribas las palabras con tildes o no se reconocerá y contará como error.\n '+
        'Si por el contrario no la sabes, escribe pasapalabra en el recuadro y te la preguntaremos mas tarde.\n'+
        'Si presionas "Aceptar" con el recuadro vacío contara como pasapalabra también\n'+
        'En el caso de que quieras dejar de jugar, escribe fin, o presiona en cancelar\n'+
        'Al final del juego te mostraremos los resultados. Buena suerte! y que te diviertas!'
        );
        
      

    do{
        cuantosErrores=0
        cuantosPasa=0
        cuantosAciertos=0
        let respuestaDef;
        for(let i=0; i<questions.length; i++){
            if(questions[i].status==0|| questions[i].status=='pasa'){
                respuesta= prompt(questions[i].preguntas[preguntaRandom]);
               
                if(respuesta==null){
                    questions[i].status='pasa';
                     console.log('De acuerdo vamos a la siguiente pregunta.');
                }
                else{ respuestaDef=respuesta.toLowerCase()}
            
                 switch (respuestaDef){                   
                    case '':
                    case'pasapalabra':
                        questions[i].status='pasa';
                        console.log('De acuerdo vamos a la siguiente pregunta');                        
                        break;
                   /* case 'pasapalabra':
                        questions[i].status='pasa';
                        console.log('De acuerdo vamos a la siguiente pregunta');                 
                        break;*/
                    case questions[i].respuesta[preguntaRandom]:
                        questions[i].status='buena';
                        console.log('¡CORRECTO!');
                        break;
                    default:
                        questions[i].status='mala';
                        console.log('Respuesta erronea! :(');
                        
                        
                }
                if (respuestaDef=='fin'){
                    break;
                }
            }
            turnos.push(1);
        }
            cuantosErrores=0
            for(let i=0; i<questions.length;i++){
                if(questions[i].status =='mala')
                cuantosErrores++;
            }
            cuantosAciertos=0
            for(let i=0; i<questions.length;i++){
                if(questions[i].status =='buena')
                cuantosAciertos++;
            }
            cuantosPasa=0
            for(let i=0; i<questions.length;i++){
                if(questions[i].status =='pasa')
                cuantosPasa++;
            }
            
        
        


    }while(respuesta !='fin'&& cuantosPasa>0)
    
    if(respuesta=='fin'){
        adios();
    }

    let puntajeJugador={name:jugador, turns:turnos.length,}
            jugadores.push(puntajeJugador);

            for(let i=0;i<jugadores.length;i++){
                jugadores[i].puntos=100-(jugadores[i].turns);

            }
            jugadores.sort(function(a,b){return b.puntos-a.puntos});
            console.log('Estos son los ranking de esta partida:')
            for(let i=0; i<jugadores.length; i++){
                console.log('Nombre: '+jugadores[i].name+', su puntuación ha sido '+ jugadores[i].puntos);
            }
            console.log('Has acertado un total de '+cuantosAciertos+' preguntas.');
            console.log('Has fallado un total de '+cuantosErrores+' preguntas.');
            console.log('Has tardado un total de '+turnos.length+' turnos.');
            console.log('Enhorabuena');

    let nuevapartida=confirm('¿Desea jugar otra partida?');
    if(nuevapartida){
        pasapalabra();
    }
    else{
        adios();  
    }

}

    function adios(){
        console.log('Muchas gracias por jugar, Hasta Luego!');
    }
pasapalabra();


