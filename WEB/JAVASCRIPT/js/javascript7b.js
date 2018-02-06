

var mesos=["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","decembre"];


trobat=false;


while(trobat!=true){

    var entrarMes= prompt("entra el teu mes");
    var comprovar=mesos.indexOf(entrarMes);

 
    if ( comprovar !=-1){

        alert("el mes existeix");
        trobat = true;
    }else{
            alert("els mes no existeix")
    }

}
alert("final");








    





 

