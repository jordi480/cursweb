window.addEventListener('load',cargaEventos);




function cargaEventos(){

    document.getElementById("a_euros").addEventListener("click",convertir_a_euros);
    document.getElementById("a_pessetes").addEventListener("click",convertir_a_pessetes);

}


function convertir_a_pessetes(){

    var euros =document.getElementById("euros").value;
 if(isNaN(euros) && valor % 1 ==0){
     alert("Has de posar un número!!!!")
 }else{
    var pessetes=euros*166.38;
    document.getElementById("pessetes").value=pessetes;
 }
}


// controlar decimals valor % 1 ==0
function convertir_a_euros(){

    var pessetes =document.getElementById("pessetes").value;
    if(isNaN(pessetes) && valor % 1 ==0){
        alert("Has de posar un número!!!!")
    }else{
    var euros=pessetes/166.38;
    document.getElementById("euros").value=euros;
    }
}





  








 











    





 

