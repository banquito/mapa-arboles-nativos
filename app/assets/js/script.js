/* Author:

*/

var map;
var MAP_MIN_ZOOM = 11;
var MAP_MAX_ZOOM = 16;

$(document).ready(function() {
  inicializar_mapa();
});

function inicializar_mapa() {
  var mapOptions = {
      center: new google.maps.LatLng(-34.6033, -58.4317),
      zoom: 13,
      minZoom: MAP_MIN_ZOOM,
      maxZoom: MAP_MAX_ZOOM,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      panControl: true,
      panControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
      },
      zoomControl: true,
      zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
          position: google.maps.ControlPosition.TOP_RIGHT
      },
      scaleControl: true,
      scaleControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
      },
      streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

  layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '1hLyg7hs8Mk1nkITYUzxivN_vD_O5eJbdincPUurb'
    },
    styles: [{
      markerOptions: {
        iconName: "parks"
      }
    }]
  });

  layer.setMap(map);

  layer2 = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '10fX5sB7atgfmTcnI6fc9iJrE-cDL25HXAX81gkDP'
    }
  });

  layer2.setMap(map);

  google.maps.event.addListener(map, "bounds_changed", function() {});

  $("#filter-nativos").click(function(){
    layer.setMap(map);
    layer2.setMap(null);
  });
  $("#filter-canteros").click(function(){
    layer.setMap(null);
    layer2.setMap(map);
  });
}