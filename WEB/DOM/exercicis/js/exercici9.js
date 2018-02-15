


window.addEventListener('load',cargaEventos);




function cargaEventos(){

    document.getElementById("enviar").addEventListener("click",enviar);
    document.getElementById("foto").addEventListener("mouseover",copy);
    document.getElementById("cognom1").addEventListener("focus",focus);
    document.getElementById("pro").addEventListener("change",canviar_contingut);
    document.getElementById("canvi").addEventListener("click",canviar_color);
    document.getElementById("")

        

}



function enviar(){


    alert("segur que el vols enviar?");
   
}


function copy(){


    alert("Aquesta foto té copyright");




}

function focus(){

    alert("Estas al primer cognom");
}


function deixar_focus(){

    alert("Has marxat de del primer cognom");
}

function canviar_contingut(){

    alert("Ha canviat el contingut");

}

function canviar_color(){

var colorNoms = document.getElementById("cognom1");
colorNoms.style.background = "red";
document
document.getElementById("direccio").style.background="red";






}