/*2.6. Escribir un algoritmo que lea cuatro números y a con-
tinuación visualice el mayor de los cuatro.*/

let mayor=0;

//Referencias al DOM
const numero1=document.getElementById("num1");
const numero2=document.getElementById("num2");
const numero3=document.getElementById("num3");
const numero4=document.getElementById("num4");

const botonReinicio=document.getElementById("btnReiniciar");
const botonCalcular=document.getElementById("btnCalcular");

const display=document.getElementById("pantalla");


function reiniciar(){
    numero1.value="";
    numero2.value="";
    numero3.value="";
    numero4.value="";
    display.innerHTML="";
    botonCalcular.disabled=false;
    mayor=0;
}

function procesarNumeros(){
    const valor1=parseInt(numero1.value);
    const valor2=parseInt(numero2.value);
    const valor3=parseInt(numero3.value);
    const valor4=parseInt(numero4.value);
    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
    console.log(valor4);

    if(isNaN(valor1) && isNaN(valor2) && isNaN(valor3)&& isNaN(valor4)){
        display.innerHTML="";
        const campoVacio=document.createElement("p");
        campoVacio.classList.add("resultado");
        campoVacio.innerHTML=`No has ingresado ningun número`;
        display.appendChild(campoVacio);
        return;
    }

    if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)|| isNaN(valor4)){
        display.innerHTML="";
        const valorErroneo=document.createElement("p");
        valorErroneo.classList.add("resultado");
        valorErroneo.innerHTML=`Un dato no es valido ó un campo esta vacío`;
        display.appendChild(valorErroneo);
        if(isNaN(valor1)){numero1.value="";}
        if(isNaN(valor2)){numero2.value="";} 
        if(isNaN(valor3)){numero3.value="";}
        if(isNaN(valor4)){numero4.value="";}
        return;
    }
    if(valor1>mayor){
        mayor=valor1;
    } 
    if(valor2>mayor){
        mayor=valor2;
    }

    if(valor3>mayor){
        mayor=valor3;
    }

    if(valor4>mayor){
        mayor=valor4;
    }
    display.innerHTML="";
    const numMayor=document.createElement("p");
    numMayor.classList.add("resultado");
    numMayor.innerHTML=`El número mayor es: ${mayor}`;
    display.appendChild(numMayor);



    console.log(`El numero mayor es: ${mayor} `);

}

botonReinicio.addEventListener("click",reiniciar);
botonCalcular.addEventListener("click",procesarNumeros);


