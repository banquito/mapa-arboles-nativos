/* Author:

*/

var map;
var MAP_MIN_ZOOM = 11;
var MAP_MAX_ZOOM = 32;

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

  layerSiembras = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '19tSQTLYbiozG5DAg9jHRN-BMW000_JPQDxovMQZB'
    }
  });
  layerSiembras.setMap(map);

  layerCosechas = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '1g8Jhpvi89MsQgtsGm_D_rpa-WKratC5L_Sang-Zy'
    }
  });
  layerCosechas.setMap(map);

  layerPLantaciones = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '1JrMV-_7NNJ1sLxr1TDQFtCK6iL05s6QapwqLTt8i'
    }
  });
  layerPLantaciones.setMap(map);

  layerBancoSemillas = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '1BOqgNfUXQfzvul2Vcw075wqh_IwZE3G-A9NW1T1H'
    }
  });
  layerBancoSemillas.setMap(map);

  layerQuieroApadrinar = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Location\'',
      from: '1xvHtzYjz82-YSWwTYlm-BZlNIXiw85E4XvSMSKmo'
    }
  });
 // layerQuieroApadrinar.setMap(map);

  google.maps.event.addListener(map, "bounds_changed", function() {});

  $("#siembras").click(function(){
    toggleLayer(layerSiembras, this);
  });
  $("#cosechas").click(function(){
    toggleLayer(layerCosechas, this);
  });
  $("#plantaciones").click(function(){
    toggleLayer(layerPLantaciones, this);
  });
  $("#banco_semillas").click(function(){
    toggleLayer(layerBancoSemillas, this);
  });
  $("#quiero_apadrinar").click(function(){
    toggleLayer(layerQuieroApadrinar);
  });

  function toggleLayer(this_layer, link)
  {
    if( this_layer.getMap() ){
      $(link).removeClass("active");      
      this_layer.setMap(null);
    }else{
      $(link).addClass("active");
      this_layer.setMap(map);
     }
  }
}