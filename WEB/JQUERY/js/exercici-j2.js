


$(document).ready(function(){
    $("input").on("click",function(){
        console.log($(this).val());
        if (this.value =="Op1"){
            $("#contingut").load("html/opció1.html");
        } else{
            $("#contingut").load("html/opció2.html");
        }
           
     });
}); 


