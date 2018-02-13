window.onload = function() {
    var mensajeTot="";

    
	// Numero de enlaces de la pagina
    var enllaços=document.getElementsByTagName("a");
    mensajeTot += "Numero de enlaces: " + enllaços.length + "<br>"; 
  
	// Direccion del penultimo enlace
	var penultimapos=enllaços[enllaços.length-2]

	mensajeTot+="penúltim enllaç:"+penultimapos+"<br>";
	// Numero de enlaces que apuntan a http://prueba

	var contador=0;
	for(i=0;i<enllaços.length;i++){

		if 	(enllaços[i].href=="http://prueba" || enllaços[i].href=="http://prueba/"){

			contador++;
			
		}
	}
	mensajeTot+="Els ennllaços que apunten a proba son:"+contador+"<br>";
	// Numero de enlaces del tercer párrafo var 
	
	var parraf=document.getElementsByTagName("p");
	enllaços=parraf[2].getElementsByTagName("a");
	mensajeTot += "Numero de enlaces: " + enllaços.length + "<br>"; 
  	
	  
	//ens posicionem al div id="informacion"
	var info = document.getElementById("informacion");
	//injecta mensajeTot al html
	info.innerHTML = mensajeTot;
}