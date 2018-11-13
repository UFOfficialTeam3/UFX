
app.factory('mapFactory', ['$timeout', '$http', 
function($timeout, $http) {
  
    /**The Controller makes functions available to be called from the html and
     * updates the view after changes are made to it
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

var methods = {
  init: function() {

    //Access token associated with account
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhcGFyYXp6aTAzMjkiLCJhIjoiY2pudXVoYW9kMThrZDN2bnRxcHE3MzZpbSJ9.3To4lk5RKG_8YBaMKZC4mA';

    //The map object
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-82.347950, 29.647900],
        zoom: 15.25,
        minZoom: 8
      });

    //Geocoder used for searching
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        country: 'us',
        limit: 10,
        minLength: 3,
        //Geographic search area constrait
        bbox: [-82.438557, 29.593004, -82.194743, 29.754596]
    });
    map.addControl(geocoder);

    map.on('load', function() {

      map.getCanvas().style.cursor = 'pointer';
      map.resize();

      //Initializing Marker and Popup used for user interaction
      var UIMarker = new mapboxgl.Marker();
      var popupUI = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .addTo(map);

      //Event fires when the user confirms location
      geocoder.on('result', function(ev) {
        //Updates popup text which is associated to a marker and adds new marker to map
        popupUI.setText(ev.result.place_name);
        UIMarker.setLngLat(ev.result.geometry.coordinates);
        UIMarker.setPopup(popupUI);
        UIMarker.addTo(map);
        UIMarker.togglePopup();


    });

      //Various popups for pre defined locations
      var popupHub = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .setText('Hub')
      .addTo(map);
      var popupReitz = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .setText('Reitz')
      .addTo(map);
      var popupLib = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .setText('Lib')
      .addTo(map);
      var popupGator = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .setText('Gator')
      .addTo(map);
      var popupHume = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .setText('Hume')
      .addTo(map);

      
      //Various markers for pre defined locations
      var HubMarker = new mapboxgl.Marker()
      .setLngLat([-82.345564, 29.648367])
      .setPopup(popupHub)
      .addTo(map);
      var ReitzMarker = new mapboxgl.Marker()
      .setLngLat([-82.347767, 29.646378])
      .setPopup(popupReitz)
      .addTo(map);
      var LibMarker = new mapboxgl.Marker()
      .setLngLat([-82.342878, 29.651100])
      .setPopup(popupLib)
      .addTo(map);
      var GatorMarker = new mapboxgl.Marker()
      .setLngLat([-82.350212, 29.648267])
      .setPopup(popupGator)
      .addTo(map);
      var HumeMarker = new mapboxgl.Marker()
      .setLngLat([-82.352466, 29.644802])
      .setPopup(popupHume)
      .addTo(map);
      
      //Event fires on all mouse movement within map
      map.on('mousemove', function(e) {

    //   console.log('point lat: ' + Math.round(e.lngLat.lat * 10000) / 10000)
    //   console.log('point lng: ' + Math.round(e.lngLat.lng * 10000) / 10000)
    //   console.log('point x: ' + e.point.x)
    //   console.log('point y: ' + e.point.y)

        //Captures lat and lng based on mouse position
        var mousePointLat = Math.round(e.lngLat.lat * 10000) / 10000;
        var mousePointLng = Math.round(e.lngLat.lng * 10000) / 10000;
        //Checks for pre defined lat and lng positions
        var onHub = 29.6482 < mousePointLat && mousePointLat < 29.6493 && -82.3459 < mousePointLng && mousePointLng < -82.3451;
        var onReitz = 29.6462 < mousePointLat && mousePointLat < 29.6472 && -82.3482 < mousePointLng && mousePointLng < -82.3473;
        var onLib = 29.6509 < mousePointLat && mousePointLat < 29.6520 && -82.3433 < mousePointLng && mousePointLng < -82.3424;
        var onGator = 29.6481 < mousePointLat && mousePointLat < 29.6491 && -82.3507 < mousePointLng && mousePointLng < -82.3497;
        var onHume = 29.6446 < mousePointLat && mousePointLat < 29.6456 && -82.3529 < mousePointLng && mousePointLng < -82.3520;

        //Generates popup if mouse is over specified coordinates
        if(onHub){
          HubMarker.getPopup().addTo(map);
        }
        else if (onReitz){
          ReitzMarker.getPopup().addTo(map);
        }
        else if (onLib){
          LibMarker.getPopup().addTo(map);
        }
        else if (onGator){
          GatorMarker.getPopup().addTo(map);
        }
        else if (onHume){
          HumeMarker.getPopup().addTo(map);
        }

        else{
          HubMarker.getPopup().remove();
          ReitzMarker.getPopup().remove();
          LibMarker.getPopup().remove();
          GatorMarker.getPopup().remove();
          HumeMarker.getPopup().remove();
        }


        

      });

      map.on('click', function(e) {

        var mouseClickLat = e.lngLat.lat;
        var mouseClickLng = e.lngLat.lng;

        popupUI.setText('Chosen Location');
        UIMarker.setLngLat([mouseClickLng, mouseClickLat]);
        UIMarker.setPopup(popupUI);
        UIMarker.addTo(map);
        UIMarker.togglePopup();
        


      });
      

    }); 
    

      
    }
  }

  return methods;

}])



