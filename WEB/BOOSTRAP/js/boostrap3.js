

$(document).ready(function(){

    $(".btn").on("click",function(){
        
        var parraf=$(this).parent().text();
        console.log(parraf);
        $("#texto").text(parraf).get();
        

        
    });

});


/* $(document).ready(function(){

    $('#myModal').on('shown.bs.modal', function (e) {
        console.log(e.relatedTarget);
               // do something...
    });


}); */

