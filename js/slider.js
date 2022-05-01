$( document ).ready( function() {
    $( '.slider' ).bxSlider({
      auto: true,
      pause: 3000,
    });
  } );

  $( document ).ready( function() {
    $( '.main-slider' ).bxSlider( {
      auto: true,
      pause: 2000,
      autoHover: true,
      minSlides: 5,
      maxSlides: 5,
      slideWidth: 800,
      captions: false,
      infiniteLoop: true,
      moveSlides:1
     
    } );
  } );





