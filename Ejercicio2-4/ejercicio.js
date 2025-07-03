/*Diseñar un algoritmo que lea y visualice una serie de números distintos de cero. 
El algoritmo debe terminar con un valor cero que no se debe visualizar. 
Visualizar el número de valores leídos. 
*/
var contador=0;
var arregloNumeros=[];

function agregarNumero(event){
    var input=document.getElementById("numero");
    var valor=parseInt(input.value);
    if (isNaN(valor)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    if (valor === 0) {
        alert("Has ingresado 0. La entrada se detiene.");
    document.getElementById("numero").disabled = true;

    }
    if (valor !== 0) {
        arregloNumeros.push(valor);
        console.log(arregloNumeros);
        contador++;
        input.value = ""; // Limpiar el campo de entrada
        event
    }
    
}

function mostrarArreglo(evento){
    var valor=document.getElementById("resultado");
    for(var i=0;i<arregloNumeros.length;i++){
        valor.insertAdjacentHTML("beforeend", "<span>"+arregloNumeros[i]+"<span>");
    }
}




