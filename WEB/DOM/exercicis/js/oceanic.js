window.addEventListener('load',cargaEventos);




function cargaEventos(){

    var botons = document.querySelectorAll("div button");
    for (i=0;i<botons.length;i++){
        botons[i].addEventListener("click",canviar_titol);
    }

    var colors = document.querySelectorAll("div#colores div");
    for (i=0;i<colors.length;i++){
        colors[i].addEventListener("mouseover",canviar_color);
    }
    
    //document.getElementById("div ").addEventListener("mouseover",canviar_color);


}


function canviar_titol(){

    console.log(this.innerHTML);
    document.getElementsByTagName("h1")[0].innerHTML=this.innerHTML;
}


function canviar_color(){
    console.log(this.id)

   
 var colors=this.id;
 //switch(this.id), també ho podem posar amb el this
  /*  switch(colors){
        case("negro"):document.body.style.backgroundColor="black";
        break;
        case("azul"):document.body.style.backgroundColor="blue";
                     document.getElementsByTagName("h1")[0].style.color="black";
                     document.getElementsByTagName("h1")[1].style.color="black";

        break;
        case("lima"):document.body.style.backgroundColor="lime";
        break;
        case("amarillo"):document.body.style.backgroundColor="yellow" ;
        break;
        case("rojo"):document.body.style.backgroundColor="red";
        break;
        case("rosa"):document.body.style.backgroundColor="pink";
        break;
        case("verde"):document.body.style.backgroundColor="green";
        break;
        case("turquesa"):document.body.style.backgroundColor="cyan";
        break;
        case("gris"):document.body.style.backgroundColor="grey";
        break;



    }*/

    if(window.getComputedStyle){
        var computedStyle=getComputedStyle(this,null)
    }else{ computedStylethis.currentStyle;// per IE
    }
    
    document.body.style.backgroundColor=computedStyle.backgroundColor;

}