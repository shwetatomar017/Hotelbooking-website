(function() {
  /* Define a variÃ¡vel que dÃ¡ swipe no lightbox */
  var magnificPopup = $.magnificPopup.instance;

  /* Carrega a funÃ§Ã£o quando clica no lightbox (senÃ£o nÃ£o pega a classe utilizada) */
  $("a.image-lightbox").click(function(e) {

    /* Espera carregar o lightbox */
    setTimeout(function() {
        /* Swipe para a esquerda - PrÃ³ximo */
        $(".mfp-container").swipe( {
          swipeLeft:function(event, direction, distance, duration, fingerCount) {
            console.log("swipe right");
            magnificPopup.next();
          },

        /* Swipe para a direita - Anterior */
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          console.log("swipe left");
          magnificPopup.prev();
        },
        });
    }, 500);
  });

}).call(this);