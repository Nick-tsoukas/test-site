// import * as THREE from 'three';
//
// const scene = new THREE.Scene();


$(function() {
      $(document).click(function() {
        $( ".grid" ).addClass( "trans" );
        $( "#head" ).addClass( "hide" );

      });
});

$(function() {
      $('#one').click(function() {
        console.log('click')
        $("#gridContainer").addClass( "active" );
        $(".trans").css("top", "0px");
        $(".grid").css("padding", "0px");
        $("#one").addClass( "active" );
      });
});













// $('body').bind('scroll mousewheel', function(event) {
//
// if (event.originalEvent.wheelDelta >= 0) {
//       console.log('moving down');
//     }
//     else {
//       console.log('moving up');
//     }
// });
