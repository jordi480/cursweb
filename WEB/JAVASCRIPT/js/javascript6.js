

var lletra=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']


var resultat
var numeroDni=prompt(" Número del DNI");

resultat=numeroDni%23;

if(numeroDni<0 || numeroDni>99999999){

    alert(" Els Número no és vàlid");
}

else{
        alert("La teva lletra és: " + lletra[resultat])

                       
                           
                

                }










