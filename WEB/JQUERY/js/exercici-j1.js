
 $(document).ready(function(){
    $("input").on("click",function(){
        
        var link=$(this).attr("src");
        console.log(link);
        $("#pantalla").load(link);
     });
}); 

/*$(document).ready(function(){
    $("input").on("click",function(event){
        event.preventDefault();
        var link=$(this).attr("href");
        $("#pantalla").load(link);
             ,function(response,status,xhr){
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#pantalla" ).html( msg + xhr.status + " " + xhr.statusText );
            }
            $("#pantalla").html=response; 
        });*/
 