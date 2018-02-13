


window.addEventListener('load',cargaEventos);


function cargaEventos(){

    document.querySelectorAll("input")[0].addEventListener("click",afageix);
  
   

}


function afageix() {

  var nouElement=document.createElement("li");
  var text=document.createTextNode("element nou");
  nouElement.appendChild(text);
  var element=document.getElementById("lista");
  element.appendChild(nouElement);
  


}
