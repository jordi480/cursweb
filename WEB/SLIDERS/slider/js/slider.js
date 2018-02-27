

$(document).ready(function() { 
    $("#slider").bxSlider({

        auto: false,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600,
        adaptiveHeight:true,
        mode:"horizontal",
        keyboardEnabled:false
    })
        
        

    

});
   /*  $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slider');
    }, 4000);
}); */