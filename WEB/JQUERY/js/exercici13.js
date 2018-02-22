$(document).ready(function(){
  $("#afegeix").click(function(){
   $('ul').append('<li class="nou">Element nou</li>');
      
  });

  $("#esborra").click(function(){
    var element=$('li');
    console.log(element);
    darrer=element[element.length-1];
    console.log(darrer);
    darrer.remove();
      
  });



});



/*  window.addEventListener('load',cargaEventos);


function cargaEventos(){

    document.getElementById("afegeix").addEventListener("click",afageix);
    document.getElementById("esborra").addEventListener("click",esborra);
 

}

function afageix() {

  if(nouElement==0){

  document
  }

  var nouElement=document.createElement("li");
  var text=document.createTextNode("element nou");
  nouElement.appendChild(text);
  var llista=document.getElementById("lista");
  llista.appendChild(nouElement);
  
}

function esborra(){

  
  var nouElement=llista.getElementsByTagName("li");
  var darrer=nouElement[nouElement-1];
  darrer.parentNode.removeChild(darrer);
  if(nouElement==0){

    document.getElementById("esborra")
    .disabled=true;
  }
 
  nouElement.remove(element);



}

*/
