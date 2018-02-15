window.addEventListener('load',cargaEventos);




function cargaEventos(){

    document.getElementById("enviar").addEventListener("click",enviar);
           

}








function enviar(){


    var resposta=confirm("Estas segur d'enviar-ho?")

    if(resposta){
       document.formulari.submit();
        return true;
    }

    else{

        alert("El formulari no s'ha enviat");
        return false;
    }
   
}

function comprovar(){

    var comprova= document.getElementById("email").value

 if (comprova==""){

    alert("has de posar el teu email");
    var fons=document.getElementById("email");
    document.formulari.fons.focus();
    fons.style.background="red";

 }
}

  








 











    





 

