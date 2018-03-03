

$(document).ready(function(){

    $(".btn").on("click",function(){
        var parraf=$(this).parent().text();
        console.log(parraf);
        $(".modal-body").text(parraf).valueS;
        
    });

});


/* $(document).ready(function(){

    $('#myModal').on('shown.bs.modal', function (e) {
        console.log(e.relatedTarget);
               // do something...
    });


}); */

