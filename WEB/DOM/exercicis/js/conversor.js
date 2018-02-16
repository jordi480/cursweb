window.addEventListener('load',cargaEventos);




function cargaEventos(){

    document.getElementById("a_euros").addEventListener("click",convertir_a_euros);
    document.getElementById("a_pessetes").addEventListener("click",convertir_a_pessetes);

}


function convertir_a_pessetes(){

    var euros =document.getElementById("euros").value;
    var pessetes=euros*166.38;
    document.getElementById("pessetes").value=pessetes;

}
function convertir_a_euros(){

    var pessetes =document.getElementById("pessetes").value;
    var euros=pessetes/166.38;
    document.getElementById("euros").value=euros;

}





  








 











    





 

