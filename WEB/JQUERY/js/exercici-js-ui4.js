

//$(document).ready(carregarEvents);

/* function carregarEvents(){
} */



$(document).ready(function(){   
       
    $( function() {
        $( "#tabs" ).tabs();
      } );
      var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
          } );
          
           
    



