window.onload = function() {
    var mensajeTot="";

    
	// Numero de enlaces de la pagina
    var enllaços=document.getElementsByTagName("a");
    mensajeTot += "Numero de enlaces: " + enllaços.length + "<br>"; 
  
	// Direccion del penultimo enlace
  
  
	// Numero de enlaces que apuntan a http://prueba
  

	// Numero de enlaces del tercer párrafo
  	
	  
	//ens posicionem al div id="informacion"
	var info = document.getElementById("informacion");
	//injecta mensajeTot al html
	info.innerHTML = mensajeTot;
}