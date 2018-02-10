$(function(){ // this replaces document.ready
  setTimeout(function(){
    $('#loader').fadeOut('slow', function() {
      $(this).remove();
    });
   }, 1500);
});