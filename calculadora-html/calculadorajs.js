
//obtencion de variables
let pantalla = document.getElementById('screen');
const teclasnum = document.querySelectorAll('.value');
const operadores = document.querySelectorAll('.operator');
const coma= document.getElementsByClassName('point')[0];
const equal = document.getElementsByClassName('equal')[0];
const borrar = document.getElementsByClassName('clean')[0];


const atras = document.getElementsByClassName('atras')[0];
let num1=[];
let num1final;
let numero1=false;
let num2=[];
let num2final;
let numero2=false;
let resultado=0;
let operacion=false;

let usedoperation;

//boton borrar AC
borrar.addEventListener('click', function(){
        num1=[];
        num2=[];
        numero1=false;
        numero2=false;
        num1final=0;
        num2final=0;
        operacion=false;
        resultado=0;
        pantalla.innerHTML='0';
})
//boton C
atras.addEventListener('click', function(){
    if(numero1&&!numero2){
        if(num1.length==1){
            num1=0;
            pantalla.innerHTML=0;
            num1final=pantalla.innerHTML;
        }else
        num1.pop();
        pantalla.innerHTML=num1.join("");
        num1final=pantalla.innerHTML;
    }
    else if(numero2){
        if(num2.length==1){
            num2=0;
            pantalla.innerHTML=0;
            num2final=pantalla.innerHTML;
        }else
        num2.pop();
        pantalla.innerHTML=num2.join("");
        num2final=pantalla.innerHTML;
    }   
    });



 
//obtencion numeros
 
    for(let i=0; i<teclasnum.length; i++){
        
     teclasnum[i].addEventListener('click', function(){
         if(!operacion){

        num1.push(teclasnum[i].innerHTML);
 
        pantalla.innerHTML=num1.join("");
        num1final=pantalla.innerHTML;
        numero1=true;
    }
    else{
        num2.push(teclasnum[i].innerHTML);
        pantalla.innerHTML=num2.join("");
        num2final=pantalla.innerHTML;
        numero2=true;
    }
     })
    }
    //operadores
    
     for(let i=0; i<operadores.length; i++){
        operadores[i].addEventListener('click',function (){
            if(numero1 && operacion==false){
                usedoperation=operadores[i].innerHTML;

            operacion=true;
        
            }
        })
        }

        //operaciones
    equal.addEventListener('click', function(){
        if(numero1==true&&numero2==true){
            switch(usedoperation){
                case '+':
                    resultado=parseFloat(num1final)+parseFloat(num2final);
                    pantalla.textContent=resultado;
                    break;
                case '-':
                    resultado=parseFloat(num1final)-parseFloat(num2final);
                    pantalla.innerHTML=resultado;
                    break;
                case '*':
                    resultado=parseFloat(num1final)*parseFloat(num2final);
                    pantalla.innerHTML=resultado;
                    break;
                case '÷':
                    alert('aqui');
                    resultado=parseFloat(num1final)/parseFloat(num2final);
                    pantalla.innerHTML=resultado;
                    break;      
            }
        }
    })
    
