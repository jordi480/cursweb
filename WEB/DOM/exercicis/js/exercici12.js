


window.addEventListener('load',cargaEventos);


function cargaEventos(){

    document.getElementById("enlace").addEventListener("click",muestra);
  //  document.getElementById("adicional").addEventListener("click",muestra);
   

}




function muestra() 

{    
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";
   
    var enlace = document.getElementById("enlace");
    enlace.className = "oculto";
    elemento.style.color="red";
   

  }