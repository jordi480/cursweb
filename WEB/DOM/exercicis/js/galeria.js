window.addEventListener('load',cargaEventos);




function cargaEventos(){

     var carregaMotos = document.getElementsByTagName("img");
     for (i=0;i<carregaMotos.length;i++){
        carregaMotos[i].addEventListener("click",canviar_fotos);
   
     
   

    }
}


function canviar_fotos(){

    //console.log(this.innerHTML);
    document.getElementById("fotoGran").innerHTML=this.outerHTML;


}

