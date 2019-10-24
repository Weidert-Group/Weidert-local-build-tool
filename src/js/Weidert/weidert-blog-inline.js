$( document ).ready(function() {



    $(window).scroll(function () {



        if ($(window).scrollTop() > $(".rightgroup").offset().top-90 ) {

               $(".blog-content").css("position", "fixed");  

                $(".blog-content").css("left", "auto");

                $(".blog-content").css("top", "106px");

                $(".blog-content").css("bottom", "initial");  

                $(".blog-content").css("width", "250px");

            }

        if ($(window).scrollTop() < $(".rightgroup").offset().top-90 ) {

            $(".blog-content").css("position", "relative");  

                $(".blog-content").css("left", "auto");

                $(".blog-content").css("top", "0");

                $(".blog-content").css("bottom", "initial");  

                $(".blog-content").css("width", "250px"); 

            

            

        }

            

            

        if ($(window).scrollTop() > $(".stop").offset().top-600 ) {

          $(".blog-content").css("position", "absolute"); 

          $(".blog-content").css("top", "auto");

          $(".blog-content").css("bottom", "0px");

          $(".blog-content").css("width", "250px"); 

        }



    });     

});