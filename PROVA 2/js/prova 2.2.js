



$(document).ready(function() { 
    

  $("#slider").bxSlider({    

            auto: true,
            autoControls: false,
            controls:false,
            stopAutoOnClick: true,
            pager: false,
            slideWidth: 600,
            adaptiveHeight:true,
            mode:"horizontal",
            keyboardEnabled:false 
   
}); 

    $("#vilanova").click(function(){

          $("#slider").load("../html/vilanova.html #sliderV"); 
        

                    });  

            
    $("#mon").click(function(){

    $("#slider").load("../html/mon.html #sliderM");
    
 
            }); 

}); 





     
       

 
       



 