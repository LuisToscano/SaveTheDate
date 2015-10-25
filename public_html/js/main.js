/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
   $("div[id^='countdown']").countdown({
    date: "30 January 2016 09:00:00", 
    format: "on"
  });
  
  //RESPONSIVE MENU
  
  $(".menuicon").click(function(){
     event.stopPropagation();
     if($("ul.responsiveMenu").is(":visible")){
        $("ul.responsiveMenu").hide(400); 
    }else{
        $("ul.responsiveMenu").show(400); 
    }
  });
  
    $('html').click(function() {
        $("ul.responsiveMenu").hide(400);
  });

    $("ul.responsiveMenu li").click(function(event){
        event.stopPropagation();
        $("ul.responsiveMenu").hide();
    });
    
    $(window).resize(function(){
       if (!$("#responsiveMenuContainer").is(":visible") && $("ul.responsiveMenu").is(":visible") ) {
            $("ul.responsiveMenu").hide();
        }
    });
    
    //MENU FUNCTIONS
    
    $("#menucontainer .menu div, ul.responsiveMenu li").click(function(){
       var id = $(this).attr("id");
       var numid = id.split("_")[1];
       $("div[id^='tab']").hide();
       $("div[id='tab"+numid+"']").fadeIn(500);
    });
  
});

