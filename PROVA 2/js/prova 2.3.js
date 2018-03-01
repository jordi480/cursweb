



$(document).ready(function() { 
    

    $( function() {
             
        var imatge = $( "#imatge" );
 
        
        $( "#number" ).selectmenu({
            open: function( event, data ) {
              imatge.css( "background", data.item.value );
            }
          })        
                   
            
     
       
      } );

     


});  


     
       

 
       



 