

$(document).ready(function() {
    $('#envia').click(function(){
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
           // alert('El correo electrónico introducido no es correcto.');
            $("#alert").show();
            return false;
        }else{
            $("#alert").hide();

        }

    });

        
           
         
});


