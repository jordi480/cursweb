


window.addEventListener('load',carregaEvents);




function carregaEvents(){

    document.getElementById("enviar").addEventListener("click",enviar);
    document.getElementById("foto").addEventListener("mouseover",copy);
        

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

function copy(){


    alert("Aquesta foto té copyright");




}