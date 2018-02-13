


window.addEventListener('load',cargaEventos);




function cargaEventos(){

    document.getElementById("enlace_1").addEventListener("click",canvia);
  
   

}

function canvia() 

{    
    var elemento = document.getElementById("contenidos_1");
    elemento.className = "oculto";
    var enlace = document.getElementById("enlace_1");   
    enlace.innerText = "Mostrar texto";
   
   
    
    
   

  }
