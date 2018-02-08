


var str=prompt("Entra una frase");   
var resultat= maj_min(str);


       

function maj_min(str){
   var resultat="error";

            if (str==str.toUpperCase()){  

                resultat="1";

            

    } else {
       
             if (str==str.toLowerCase()){
   
             resultat="2";
   
            }else{

                         resultat="3";
                 }

   }

   return resultat;
}


switch(resultat){

case ("1"):

alert(" Son majuscules");
break;

case ("2"):

alert(" Son minuscules");
break;

case ("3"):

alert(" Son majuscules i minuscules");
break;


}






  








 











    





 

