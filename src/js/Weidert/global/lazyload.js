$( document ).ready((function() {
    // Lazy Loading
    (function() {
      if ("loading" in HTMLImageElement.prototype) {
          var lazyEls2 = $('[loading=lazy]');
          lazyEls2.each((function(){
              var src = $(this).data('src');
              var srcset = $(this).data('srcset');
              $(this).attr({
                  "src" : src,
                  "srcset" : srcset
              });
              $(this).addClass('loaded');
          }));
      } else {
          // Dynamically include a lazy loading library of your choice
          // Here including vanilla-lazyload
          var script = document.createElement("script");
          script.async = true;
          script.src =
              "https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js";
          window.lazyLoadOptions = {
              elements_selector: "[loading=lazy]",
              //eventually more options here
          };
          document.body.appendChild(script);
      }
    }());
  }));