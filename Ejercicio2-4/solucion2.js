

/*Arreglo que guardara los numeros enteros*/
let numerosEnteros=[];

/*Contador que llevara cuantos numeros hemos ingresado*/
let contador=0;

/*Referencias al elemento DOM*/
const inputNumero=document.getElementById("numero");
const btnReinicio=document.getElementById("reiniciar");
const btnAgregar=document.getElementById("agregar");
const btnMostrar=document.getElementById("mostrar");
const display=document.getElementById("itemsDisplay");



function reinicioAlgoritmo(){
    numerosEnteros=[];
    contador=0;
    inputNumero.value="";
    inputNumero.disabled=false; //Habilita el input
    btnAgregar.disabled=false; //Habilita el btn agregar
    console.log("Algoritmo Reiniciado");
    display.innerHTML="";
}

/*
    Procesa el numero ingresado por el usuario
*/

function procesarNum(){
    //Convertir el valor del input a un numero entero
    const inputValue=parseInt(inputNumero.value);
    display.innerHTML="";
    //---Validación de entrada---
    //Si el campo esta vacio o no es un numero valido

    if(isNaN(inputValue)){
        alert("Por favor introduce un número válido");
        inputNumero.value=""; //limpiar el campo
        inputNumero.focus(); //volver a colocar el foco
        return;
    }
    //--Logica de terminacion (si el numero es 0)
    if(inputValue===0){
        alert(`Algoritmo finalizado. Se leyeron ${contador} valores.`);
        //Deshabilitrar entrada y boton para evitar mas ingresos
        inputNumero.disabled=true;
        btnAgregar.disabled=true;
        mostrarArreglo();
        return; //No procesar el 0 ni contarlo/mostrarlo
    }

    //Procesar el numero valido (distinto de 0);
    numerosEnteros.push(inputValue);
    contador++;
    console.log(numerosEnteros);


    //Limpiar el campo de entrada y pone el foco para el siguiente numero
    inputNumero.value="";
    inputNumero.focus();
}

function mostrarArreglo(){ 
    display.innerHTML="";
    if(numerosEnteros.length===0){
        const elementoVacio=document.createElement("span");
        elementoVacio.classList.add("error");
        elementoVacio.innerHTML="¡¡¡¡ERROR!!!!<br>Arreglo Vacio";
        display.appendChild(elementoVacio);
        return 0;
    }
    for(let i=0;i<numerosEnteros.length;i++){
        const elementoNuevo=document.createElement("span");
        elementoNuevo.classList.add("item");
        elementoNuevo.innerHTML=numerosEnteros[i];
        display.appendChild(elementoNuevo);
    }
}
//Cuando se presiona la tecla enter en el campo de entrada
inputNumero.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        procesarNum();//Llama a la misma funcion que el boton
    }
});



btnReinicio.addEventListener("click", reinicioAlgoritmo);
btnAgregar.addEventListener("click", procesarNum);
btnMostrar.addEventListener("click", mostrarArreglo);