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
  //var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime="+starttime+"&endtime="+endtime+"&limit="+limit;
  var url = "http://www.spc.noaa.gov/wcm/data/2016_torn.csv";
  if (typeof lat != 0 && lon != 0) {
    url += "&latitude="+lat+"&longitude="+lon+"&maxradiuskm="+radius;
  }
  
  if (magnitude > 0) {
    url += "&minmagnitude=" + magnitude;
  }
  
  console.log(url);
  
  $.get(url, function(data) {
      
      var lines = data.split("\n");
      
      var tornadoData = [];
      $.each(lines, function(key, value) {
          var headings = lines[0].split(",");
          
          var object = {};
          if (key > 0) {
            $.each(headings, function(keyRow, val){
            var splitValue = lines[key].split(",");
            object[val] = splitValue[keyRow];
            });
            tornadoData.push(object);
          }
          
      });
      
      //Fill results label
      $("#result-count").text("(" + tornadoData.length + " results)");
      
      var heatMapData = [];
      $.each(tornadoData, function( index, value ) {
        
        if (typeof value.slat != "undefined" && typeof value.slon != "undefined") {
          var item = {
              location: new google.maps.LatLng(value.slat, value.slon),
          }
          
        }
        
        heatMapData.push(item);
      });
      
      var usa = new google.maps.LatLng(37.090240, -95.712891);
      
      //Set Zoomlevel
      var zoomlevel = 2;
      if (typeof lat != 0 && lon != 0) {
        zoomlevel = 12;
        if (radius > 200) {
            zoomlevel = radius / 200;
        }
      }
      
      map = new google.maps.Map(document.getElementById('feedMap'), {
        center: usa,
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