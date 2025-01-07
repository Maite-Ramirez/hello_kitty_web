let $document = $(document)
$document.ready(function(){

    AOS.init();

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'horizontal',
      });



function initScroll() {
    const scrollContainer = document.querySelector('[data-scroll-container]');

    if (window.innerWidth > 600) {
        // Inicializar Locomotive Scroll solo si no está ya inicializado
        if (!window.locoScroll) {
            window.locoScroll = new LocomotiveScroll({
                el: scrollContainer,
                smooth: true,
                direction: 'horizontal'
            });
        }
    } else {
        // Destruir Locomotive Scroll y reiniciar el estilo del contenedor
        if (window.locoScroll) {
            window.locoScroll.destroy();
            window.locoScroll = null;
            scrollContainer.style.transform = 'none'; // Resetear cualquier transformación previa
            scrollContainer.style.width = '100%';     // Asegurar que el ancho sea el de la pantalla
        }
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', initScroll);

// Ejecutar al redimensionar la ventana
window.addEventListener('resize', initScroll);

    



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