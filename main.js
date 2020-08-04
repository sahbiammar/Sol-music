
$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".nav-desc").slideToggle("slow");
    });

    $(".nav-desc ul li a").click(function(){
        $(".nav-desc").slideToggle("slow");
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    })

    $('nav a[href*="#"]').on('click', function() {                 
        $('html, body').animate({                              
            scrollTop: $($(this).attr('href')).offset().top - 100        
        }, 2000);                                                       
    });

});