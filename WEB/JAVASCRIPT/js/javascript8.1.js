

resposta();



function resposta(){

var numero=prompt("entra un número enter");   
var resultat= parell_imparell(numero);

var str= "El numero:"+numero+" es "+resultat;
alert(str);
       
}



function parell_imparell(numero){
    
    var resultat="alguna cosa ha anat malament...";

    if (numero %2==0){

        resultat="Parell";
        

    } else if (numero %2==1){

        resultat="Imparell";
        
        
    }

    return resultat;

}

alert(palindrome("acad"));


function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }



  








 











    





 

