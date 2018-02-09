



inici();

function inici(){

var paraula=prompt("Entra una paraula");   
var resposta= palindrom(paraula);

alert(resposta);

}
       
function palindrom(paraula){

    var resposta="És un palindrom";
    var lletres=paraula.replace(/ /g,"").split("").join("").split("");
    var revers=lletres.slice(0).reverse();
alert(lletres);
alert(revers);



        

for(i in lletres){    
    alert("index: " +i);
    
    if(lletres[i]!=revers[i]){

        resposta= "No és un palindrom";
       

    }
      
}  
return resposta;     
       
}








  








 











    





 

