window.addEventListener('load',cargaEventos);




function cargaEventos(){

     var carregaMotos = document.querySelectorAll("div img");
    for (i=0;i<carregaMotos.length;i++){
        carregaMotos[i].addEventListener("click",canviar_motos);
   
     
   

    }
}


function canviar_motos(){

    console.log(this.id);

}

