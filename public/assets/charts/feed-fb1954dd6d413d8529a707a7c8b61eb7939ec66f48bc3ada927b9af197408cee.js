var starttime = "";
var endtime = "";
var limit = 200;
var lat = 0;
var lon = 0;
var radius = 1000;
var magnitude = 0;

//Set Dates
var today = new Date();
todayFormatted = formatDate(today);

var todayMinusFive = new Date(today.setDate(today.getDate() - 5));
minusFiveFormatted = formatDate(todayMinusFive);

starttime = minusFiveFormatted;
endtime = todayFormatted;

function buildMap() {
  var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime="+starttime+"&endtime="+endtime+"&limit="+limit;
  if (typeof lat != 0 && lon != 0) {
    url += "&latitude="+lat+"&longitude="+lon+"&maxradiuskm="+radius;
  }
  
  if (magnitude > 0) {
    url += "&minmagnitude=" + magnitude;
  }
  
  console.log(url);
  
  $.get(url, function(data) {
      console.log(data);
      
      var heatMapData = [];
      var earthquakeData = data.features;
      
      //Fill results label
      $("#result-count").text("(" + earthquakeData.length + " results)");
      
      $.each(earthquakeData, function( index, value ) {
        var item = {
            location: new google.maps.LatLng(value.geometry.coordinates[1], value.geometry.coordinates[0]),
            weight: value.properties.mag
        }
        heatMapData.push(item);
      });
      
      var sanFrancisco = new google.maps.LatLng(lat, lon);
      
      //Set Zoomlevel
      var zoomlevel = 2;
      if (typeof lat != 0 && lon != 0) {
        zoomlevel = 12;
        if (radius > 200) {
            zoomlevel = radius / 200;
        }
      }
      
      map = new google.maps.Map(document.getElementById('feedMap'), {
        center: sanFrancisco,
        zoom: zoomlevel,
        mapTypeId: 'satellite'
      });
      
      var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData
      });
      heatmap.setMap(map);
  });
}

function formatDate(date) {
  var month = date.getMonth() + 1;
  var d = date.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
  return d;
}

function buildRangeSlider() {
  $( "#magnitude" ).slider({
    slide: function( event, ui ) {
      magnitude = ui.value;
      $(".magnitude-label").text("min magnitude: " + ui.value);
    },
    max: 8
  });
}

if (window.location.pathname.indexOf("time") == -1) {
    $(document).ready(function() {
      buildMap();
      buildRangeSlider();
     
      //generate Autocomplete
      var input = document.getElementById('place-input');
      var autocomplete = new google.maps.places.Autocomplete(input);
      
      autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          console.log(place);
          if (place.geometry) {
            lat = place.geometry.location.lat();
            lon = place.geometry.location.lng();
          }
      });
      
      $("#start-feed-search").click(function() {
        //Rebuild Map
        buildMap();
      });
  });
}
;
