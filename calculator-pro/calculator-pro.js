debugger;
function calculator(){
    let newNumber;
    let numberList=[];
    let resultados=[]
    do{
        newNumber = prompt('Introduzca un numero, si quiere parar pulse "cancelar".');
        if(newNumber===null){
            break;
        }
        else{
            if(!isNaN(newNumber)&& newNumber!=""){  
             numberList.push(newNumber);       
            }
            else{        
                alert('ERROR. Valor no valido');
            }
        }
    }while (true)
        console.log(numberList);

    if (numberList[0]==null){
        alert('ERROR. Valor no valido');
        calculator();
    }
    if(numberList.length==1){
        let squareroot=Math.sqrt(numberList[0]);
        return console.log('La raiz cuadrada de ',(numberList[0]),' es:',(squareroot).toFixed(3));
        
    }
    else{
        let sumaFinal=numberList[0];
            sumaFinal=parseFloat(sumaFinal);
        let restaFinal=numberList[0];
        let productFinal=numberList[0];
        let divisionFinal=numberList[0];
        
        for(i=1;i<numberList.length;i++){  
            (sumaFinal)+=parseFloat(numberList[i]);
            restaFinal-=numberList[i];
            productFinal*=numberList[i];
            divisionFinal/=numberList[i];
        }
        resultados.push(sumaFinal);
        resultados.push(restaFinal);
        resultados.push(productFinal);
        resultados.push(divisionFinal).toFixed(3);

        return console.log('La suma de',(numberList.join(' + ')), 'es:',(resultados[0])+' '+
            'La resta de',(numberList.join(' - ')),'es:',(resultados[1])+' '+'La multiplicación de',(numberList.join(' * ')),' es:',(resultados[2])
            +' '+'La division de',(numberList.join(' / ')),'es:',(resultados[3]));
    }
}
    calculator();

    do{
     let pregunta = confirm('¿Desea realizar nuevas operaciones?');
     if(pregunta==true){
        calculator();
     }
     else{
         break;
     }
    }while(true);
    console.log('Hasta Luego!')
