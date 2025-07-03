

var contador=0;
var ArregloNum=[];
const limite=10;

function principal(){
    let input=document.getElementById("numero");
    let valor=parseInt(input.value);
    var enviar=document.getElementById("agregar");
    enviar.addEventListener("click", agregarNumero);

    var mostrar=document.getElementById("mostrar");
    mostrar.addEventListener("click",mostrarArreglo);

    var reestablecer=document.getElementById("reiniciar");
    reestablecer.addEventListener("click",borrar);
    
}
function agregar(valor){
    const dato=document.getElementById("numero");
    const valor=parseInt(dato.value); 
    if(valor===0){
        document.getElementById("numero").disabled = true;
        input.value = ""; 
        mostrarArreglo();
    
    }
    if(valor!==0){
        
        ArregloNum.push(valor);
        console.log(ArregloNum);
        contador++;
    }
   
}

function agregarNumero(){
    var dato=document.getElementById("numero");
    var valor=parseInt(dato.value);
    agregar(valor);
    dato.value="";
    habilitar();
    document.getElementById("resultado").innerHTML="";
}

function agregarNumeroEnter(event){
    var dato=document.getElementById("numero");
    var valor=parseInt(dato.value);
    var tecla= event.key;
    switch(tecla){
        case "Enter":
            ArregloNum.push(valor);
            console.log(ArregloNum);
            dato.value="";
            document.getElementById("resultado").innerHTML="";
            habilitar();
            
            break;
    }
}

function mostrarArreglo(){
    var valor=document.getElementById("resultado");
    for(var i=0;i<ArregloNum.length;i++){
        var elementoNuevo=document.createElement("span");
        elementoNuevo.classList.add("item");
        elementoNuevo.innerHTML=ArregloNum[i];
        valor.appendChild(elementoNuevo);
    }
    deshabilitar();
}

function borrar(){
    var dato=document.getElementById("numero");
    dato.value="";
    habilitar();
    ArregloNum=[];
    document.getElementById("resultado").innerHTML="";
}
function deshabilitar(){
    var mostrar=document.getElementById("mostrar");
    mostrar.disabled=true;
}

function habilitar(){
    var mostrar=document.getElementById("mostrar");
    mostrar.disabled=false;
}

window.addEventListener("load", principal);
window.addEventListener("keypress",agregarNumeroEnter);