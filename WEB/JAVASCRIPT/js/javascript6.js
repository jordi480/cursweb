

var lletra=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']


var resultat
var numeroDni=prompt(" Número del DNI");

resultat=numeroDni%23

if(numeroDni<0 || numeroDni>99999999){

    alert(" Els Número no és vàlid");
}

else{
    

                    switch(resultat){

                case(resultat=0):
                alert("La teva lletra és:" + lletra[0]);
                
                case(resultat=1):
                alert("La teva lletra és:" + lletra[1]);
                
                case(resultat=2):
                alert("La teva lletra és:" + lletra[2]);
               
                case(resultat=3):
                alert("La teva lletra és:" + lletra[3]);
                
                case(resultat=4):
                alert("La teva lletra és:" + lletra[4]);
                
                case(resultat=5):
                alert("La teva lletra és:" + lletra[5]);
                
                case(resultat=6):
                alert("La teva lletra és:" + lletra[6]);
               
                case(resultat=7):
                alert("La teva lletra és:" + lletra[7]);
               
                case(resultat=8):
                alert("La teva lletra és:" + lletra[8]);
                
                case(resultat=9):
                alert("La teva lletra és:" + lletra[9]);
               
                case(resultat=10):
                alert("La teva lletra és:" + lletra[10]);
                
                case(resultat=11):                
                alert("La teva lletra és:" + lletra[11]);                

                case(resultat=12):
                alert("La teva lletra és:" + lletra[12]);

                           
                






                }
}









