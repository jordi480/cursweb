window.addEventListener('load', cargaEventos);

function cargaEventos(){
    document.getElementById("tarea").setAttribute("onKeyDown","return limita(10);");
    document.getElementById("tarea").setAttribute("onKeyUp","return limita(10);");




}

function limita(maximoCaracteres) {
    var diferencia;
    var elemento = document.getElementById("tarea");
      if(elemento.value.length >= maximoCaracteres ) {
        diferencia = maximoCaracteres - elemento.value.length;
        document.getElementById("ayuda").innerHTML = diferencia + " / " +  maximoCaracteres;
        var tecles_especials= event.charCode || event.keyCode; 
        if(!(tecles_especials==8 || tecles_especials==37 || tecles_especials==39 || tecles_especials==45)){
          
            return false;

        
        }       
      

        
 
    }

    diferencia = maximoCaracteres - elemento.value.length;
    document.getElementById("ayuda").innerHTML = diferencia + " / " +  maximoCaracteres;
}
