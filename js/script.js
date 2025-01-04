let $document = $(document)
$document.ready(function(){

    AOS.init();

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
       direction: 'horizontal',
      });


    $("#about-3-1-1-1-1").on("mouseover",function(){
        $("#instagram_about").attr('src',"img/instagram_hover.svg");
    });

    $("#about-3-1-1-1-1").on("mouseout", function(){
        $("#instagram_about").attr('src',"img/instagram.svg");
    });


    $("#about-4-1").on("mouseover",function(){
        $("#about_9").attr('src',"img/About_9_hover.png");
    });

    $("#about-4-1").on("mouseout", function(){
        $("#about_9").attr('src',"img/About_9.png");
    });

//$("#projects-guide > div > a").on("click", function(){
        //console.log($("#projects-guide-open").css("display"));
      
        //let actual_chevron = $("#projects-guide-open").css("display");
      
        //if (actual_chevron === "none") {
           //$("#projects-guide-open").css("display", "flex");
                  
        //} else {
           //$("#projects-guide-open").css("display", "none");
        //}
      
    //});







});