


$(document).ready(function(){   
       
  
        $( function() {
            $( "#datepicker" ).datepicker();
            $( "#anim" ).on( "change", function() {
              $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
            });
          } );
        $( "#datepicker" ).datepicker({ minDate: -20, maxDate: "+1W " });
      } );
          
          
           
    



