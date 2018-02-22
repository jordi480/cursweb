

$(document).ready(function(){
    $("a").click(function(){        
        $(this).prev().toggle('slow'); 

    })
})



/* window.addEventListener('load',cargaEventos);




function cargaEventos(){

    document.getElementById("enlace_1").addEventListener("click",amagaMostra);
    document.getElementById("enlace_2").addEventListener("click",amagaMostra2);
    document.getElementById("enlace_3").addEventListener("click",amagaMostra3);


    

}

function amaga(){   

    var elemento = document.getElementById("contenidos_1");
    elemento.className = "oculto";
    var enlace = document.getElementById("enlace_1");   
    enlace.innerText = "Mostrar contingut";  
   

  }
  
  function mostra(ele) {   

      var elemento = document.getElementById("contenidos_1");
      elemento.className = "visible";
      ele.innerText = "Ocultar contingut";      
          
  
    }


function amagaMostra(){

    var elemento=document.getElementById("enlace_1");

    if(elemento.innerText == "Ocultar contingut"){
        amaga();
    }else{
        mostra(elemento);
    }
    


}

function amaga2(){   

    var elemento = document.getElementById("contenidos_2");
    elemento.className = "oculto";
    var enlace = document.getElementById("enlace_2");   
    enlace.innerText = "Mostrar contingut";  
   

  }
  function mostra2(ele) {   

    var elemento = document.getElementById("contenidos_2");
    elemento.className = "visible";
    ele.innerText = "Ocultar contingut";      
        

  }

  function amagaMostra2(){

    var elemento=document.getElementById("enlace_2");

    if(elemento.innerText == "Ocultar contingut"){
        amaga2();
    }else{
        mostra2(elemento);
    }
    
}
function amaga3(){   

    var elemento = document.getElementById("contenidos_3");
    elemento.className = "oculto";
    var enlace = document.getElementById("enlace_3");   
    enlace.innerText = "Mostrar contingut";  
   

  }

  
  function mostra3(ele) {   

    var elemento = document.getElementById("contenidos_3");
    elemento.className = "visible";
    ele.innerText = "Ocultar contingut";      
        

  }

  function amagaMostra3(){

    var elemento=document.getElementById("enlace_3");

    if(elemento.innerText == "Ocultar contingut"){
        amaga3();
    }else{
        mostra3(elemento);
    }
    
} */

