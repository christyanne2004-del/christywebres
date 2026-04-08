$(function() {


     // adds resize 

  $(".speaker-box").resizable({
    handles: "all",


 // adjusts sizes of boxes 

    minWidth: 420,
    minHeight: 120,
    maxWidth: 900,
    maxHeight: 600,

// adjusts the  animation duration 

    animate: true,
    animateDuration: 100,   

    start: function() {
      $(this).find(".speaker-details").stop(true, true);
    },

    resize: function(event, ui) {
      const $details = $(this).find(".speaker-details");

// If the box is smaller and if larger than fade to 

      if (ui.size.height > 180 || ui.size.width > 400) {
        $details.stop().fadeTo(150, 1);
      } else {
        $details.stop().fadeTo(150, 0); 
      }
    }

  });

});