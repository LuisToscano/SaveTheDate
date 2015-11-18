/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    
    var gallery = $('.gallery a').simpleLightbox();
    
   $("div[id^='countdown']").countdown({
    date: "30 January 2016 17:00:00", 
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
       $("div[id='tab"+numid+"']").css("display", "flex");
       $("div[id='tab"+numid+"']").hide();
       $("div[id='tab"+numid+"']").fadeIn(500);
    });
    
    $(".party_specs p").click(function(){
       window.open("https://www.google.es/maps/place/Ruitoque+Golf+Country+Club/@7.0253055,-73.0846194,16z/data=!4m2!3m1!1s0x8e684759f471ff0f:0x1ecbf46fa03bcdf6");
    });
    
    $("#tab1").css("display", "flex");
});

