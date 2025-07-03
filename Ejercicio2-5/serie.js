/*2.5. Diseñar un algoritmo que visualice y sume la serie de
números 3, 6, 9, 12..., 99.*/

    let serieNum=[];
    let limite=1000;
    let total=0;

    /*Referencias al DOM*/
    const entradaNumero=document.getElementById("numero");
    const pantalla=document.getElementById("pantalla");
    const btnReiniciar=document.getElementById("reiniciar");
    const btnGenerar=document.getElementById("serie");
    const pantallaTotal=document.getElementById("pantalla_total");
    
    let posicionArreglo=0;

document.addEventListener("DOMContentLoaded", () => {
    
   

    function reinicioAlgoritmo(){
        serieNum=[];
        entradaNumero.value="";
        console.log("Algoritmo reiniciado");
        pantalla.innerHTML="";
        total=0;
        posicionArreglo=0;
        btnGenerar.disabled=false;
        entradaNumero.disabled=false;
        pantallaTotal.innerHTML="";
    }

    function realizarSerie(){
        const numero=parseInt(entradaNumero.value);
        let valorActual=parseInt(entradaNumero.value);
        if(isNaN(numero)){
            alert("Por favor introduce un número valido");
            entradaNumero.value="";
            entradaNumero.focus();
            return;
        }


        if(numero<=0 || numero>=1000){
            const numeroCero=document.createElement("span");
            numeroCero.classList.add("advertencia");
            numeroCero.innerHTML="⚠️ No disponible ⚠️";
            pantalla.appendChild(numeroCero);
            entradaNumero.value="";
            return
        }
        
        console.log("hola");
        while(valorActual<limite){
            serieNum[posicionArreglo++]=valorActual;
            total+=valorActual;
            valorActual+=numero; 
            
        }
        entradaNumero.disabled=true;
        btnGenerar.disabled=true;
        mostrarArreglo(serieNum);
        mostrarTotal(total);
        console.log(serieNum);
        console.log(total);
    }

    function mostrarArreglo(serieNum){
        for(let i=0;i< serieNum.length;i++){
            const item=document.createElement("span");
            item.classList.add("item");
            item.innerHTML=serieNum[i];
            pantalla.appendChild(item);
        }
    }
    function mostrarTotal(sumaTotal){
            const titulo=document.createElement("p");
            titulo.classList.add("titulo");
            titulo.innerHTML="Suma Total:";
            pantalla_total.appendChild(titulo);

            const total=document.createElement("span");
            total.classList.add("total");
            total.innerHTML=sumaTotal;
            pantalla_total.appendChild(total);
    }

    entradaNumero.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            realizarSerie();
        }

    });
    btnGenerar.addEventListener("click", realizarSerie);
    btnReiniciar.addEventListener("click",reinicioAlgoritmo);
});