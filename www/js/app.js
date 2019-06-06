console.log( 'JS loaded' );

// show error on mobile
window.onerror = function( err ) {
  alert( err );
  return true;
}







// var linienWien = function() { // IIFE
  
// }();

document.addEventListener( 'deviceready', function() {
  console.log( 'Device ready' );

  $( document ).ready( function() {
    console.log( 'DOM ready, alles ready...' );

    var karte = L.map('map').fitWorld();

    L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
        attribution: '&copy OpenStreetMap'
    }).addTo( karte );

karte.setView( [ 48.21, 16.38 ], 12 )

$.ajax({
  url:'http://localhost:8401/getstations',
  method:'post',
  data:{},
  success:function( data ) {
    console.info( data );
    for ( k in data.lines ) {
      var latlngs = [];
      for ( i in data.lines[k].stations ) {
        latlngs.push([
          data.lines[k].stations[i].lat,
          data.lines[k].stations[i].lng,
        ]);
      }
      var polyline = L.polyline(latlngs, {weight:5, color: data.lines[k].color}).addTo(karte);
    }
  }
})


  });
});
