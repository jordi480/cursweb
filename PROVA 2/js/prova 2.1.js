

window.addEventListener('load', cargaEventos);

function cargaEventos(){
    document.getElementById("tarea").setAttribute("onkeyUp","return reconeixParaula()");
    document.getElementById("tarea").setAttribute("onkeyDown","return reconeixParaula()");

    
}



function reconeixParaula(){
    
    var frase= document.getElementById("tarea");
    var paraula=frase.split("");
    for(i=0;i=paraula.lenght;i++){
    if (i=="llimona || taronja || poma");
    alert("aquesta paraula no es correcte");
    }

}


