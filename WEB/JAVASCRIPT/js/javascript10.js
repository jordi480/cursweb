


var paraula=prompt("Entra una paraula");   
var resposta= palindrom(paraula);

alert(resposta);
       
function palindrom(paraula){

    var resposta="Error inesperat";
    var lletres=paraula.split("").join("").split("");
    var revers=lletres.slice(0).reverse();


for(i in lletres){    
    
    if(lletres[i]!=revers[i]){

        resposta= "No és un palindrom";
       

    }else{

        resposta= "És un palindrom";
    }
       return resposta;
       }  
       
       
}







  








 











    





 

