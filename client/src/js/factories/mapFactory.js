
app.factory('mapFactory', ['$timeout', '$http', 
function($timeout, $http) {

//Map global variable
var map;
//Mouse varibles that constantly track position of the mouse
var mouseClickLat = 0;
var mouseClickLng = 0;
var knownLocation = '';
var searchedLocation = '';

var methods = {
  init: function() {

    //Access token associated with account
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhcGFyYXp6aTAzMjkiLCJhIjoiY2pudXVoYW9kMThrZDN2bnRxcHE3MzZpbSJ9.3To4lk5RKG_8YBaMKZC4mA';

    //The map object
    map = new mapboxgl.Map({
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
      var UIMarker;
      var popupUI = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
      .addTo(map);

      

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

      //Markers that will be used in the click function
      var HubMarkerClick;
      var ReitzMarkerClick;
      var LibMarkerClick;
      var GatorMarkerClick;
      var HumeMarkerClick;

      //Event fires when the user confirms location
      geocoder.on('result', function(ev) {

        if(HubMarkerClick != undefined){HubMarkerClick.remove()}
        if(ReitzMarkerClick != undefined){ReitzMarkerClick.remove()}
        if(LibMarkerClick != undefined){LibMarkerClick.remove()}
        if(GatorMarkerClick != undefined){GatorMarkerClick.remove()}
        if(HumeMarkerClick != undefined){HumeMarkerClick.remove()}
        if(UIMarker != undefined){UIMarker.remove()}

        //Updates popup text which is associated to a marker and adds new marker to map
        popupUI.setText(ev.result.place_name);
        UIMarker = new mapboxgl.Marker({color: 'darkorange'});
        UIMarker.setLngLat(ev.result.geometry.coordinates);
        UIMarker.setPopup(popupUI);
        UIMarker.addTo(map);
        UIMarker.togglePopup();

        //This is a global variable that is used for confirmLocation()
        searchedLocation = ev.result.place_name;


    });
      
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

      //Runs when mouse is clicked
      map.on('click', function(e) {

        mouseClickLat = e.lngLat.lat;
        mouseClickLng = e.lngLat.lng;
        //Rounds lat and lng based on mouse click
        var mouseClickRoundLat = Math.round(e.lngLat.lat * 10000) / 10000;
        var mouseClickRoundLng = Math.round(e.lngLat.lng * 10000) / 10000;
        //Checks for pre defined lat and lng positions
        var onHub = 29.6482 < mouseClickRoundLat && mouseClickRoundLat < 29.6493 && -82.3459 < mouseClickRoundLng && mouseClickRoundLng < -82.3451;
        var onReitz = 29.6462 < mouseClickRoundLat && mouseClickRoundLat < 29.6472 && -82.3482 < mouseClickRoundLng && mouseClickRoundLng < -82.3473;
        var onLib = 29.6509 < mouseClickRoundLat && mouseClickRoundLat < 29.6520 && -82.3433 < mouseClickRoundLng && mouseClickRoundLng < -82.3424;
        var onGator = 29.6481 < mouseClickRoundLat && mouseClickRoundLat < 29.6491 && -82.3507 < mouseClickRoundLng && mouseClickRoundLng < -82.3497;
        var onHume = 29.6446 < mouseClickRoundLat && mouseClickRoundLat < 29.6456 && -82.3529 < mouseClickRoundLng && mouseClickRoundLng < -82.3520;

        
        //Generates popup if mouse is over specified coordinates
        if(onHub){
          knownLocation = 'The Hub'
          searchedLocation = '';

          //Checks if any other markers have been selected and removes them
          if(ReitzMarkerClick != undefined){ReitzMarkerClick.remove()}
          if(LibMarkerClick != undefined){LibMarkerClick.remove()}
          if(GatorMarkerClick != undefined){GatorMarkerClick.remove()}
          if(HumeMarkerClick != undefined){HumeMarkerClick.remove()}
          if(UIMarker != undefined){UIMarker.remove()}

          //Makes new marker
          HubMarkerClick = new mapboxgl.Marker({color: 'darkorange'})
         .setLngLat([-82.345564, 29.648367])
         .setPopup(popupHub)
         .addTo(map);
        }
        else if (onReitz){
          knownLocation = 'The Reitz Union'
          searchedLocation = '';

          //Checks if any other markers have been selected and removes them
          if(HubMarkerClick != undefined){HubMarkerClick.remove()}
          if(LibMarkerClick != undefined){LibMarkerClick.remove()}
          if(GatorMarkerClick != undefined){GatorMarkerClick.remove()}
          if(HumeMarkerClick != undefined){HumeMarkerClick.remove()}
          if(UIMarker != undefined){UIMarker.remove()}

          
          ReitzMarkerClick = new mapboxgl.Marker({color: 'darkorange'})
          .setLngLat([-82.347767, 29.646378])
          .setPopup(popupReitz)
          .addTo(map);
          
        }
        else if (onLib){
          knownLocation = 'Library West'
          searchedLocation = '';

          //Checks if any other markers have been selected and removes them
          if(HubMarkerClick != undefined){HubMarkerClick.remove()}
          if(ReitzMarkerClick != undefined){ReitzMarkerClick.remove()}
          if(GatorMarkerClick != undefined){GatorMarkerClick.remove()}
          if(HumeMarkerClick != undefined){HumeMarkerClick.remove()}
          if(UIMarker != undefined){UIMarker.remove()}

          LibMarkerClick = new mapboxgl.Marker({color: 'darkorange'})
          .setLngLat([-82.342878, 29.651100])
          .setPopup(popupLib)
          .addTo(map);
        }
        else if (onGator){
          knownLocation = 'Gator Dining'
          searchedLocation = '';

          //Checks if any other markers have been selected and removes them
          if(HubMarkerClick != undefined){HubMarkerClick.remove()}
          if(ReitzMarkerClick != undefined){ReitzMarkerClick.remove()}
          if(LibMarkerClick != undefined){LibMarkerClick.remove()}
          if(HumeMarkerClick != undefined){HumeMarkerClick.remove()}
          if(UIMarker != undefined){UIMarker.remove()}

          GatorMarkerClick = new mapboxgl.Marker({color: 'darkorange'})
          .setLngLat([-82.350212, 29.648267])
          .setPopup(popupGator)
          .addTo(map);
        }
        else if (onHume){
          knownLocation = 'Hume Hall'
          searchedLocation = '';

          //Checks if any other markers have been selected and removes them
          if(HubMarkerClick != undefined){HubMarkerClick.remove()}
          if(ReitzMarkerClick != undefined){ReitzMarkerClick.remove()}
          if(LibMarkerClick != undefined){LibMarkerClick.remove()}
          if(GatorMarkerClick != undefined){GatorMarkerClick.remove()}
          if(UIMarker != undefined){UIMarker.remove()}

          HumeMarkerClick = new mapboxgl.Marker({color: 'darkorange'})
          .setLngLat([-82.352466, 29.644802])
          .setPopup(popupHume)
          .addTo(map);
        }
        else{

          if(HubMarkerClick != undefined){HubMarkerClick.remove()}
          if(ReitzMarkerClick != undefined){ReitzMarkerClick.remove()}
          if(LibMarkerClick != undefined){LibMarkerClick.remove()}
          if(GatorMarkerClick != undefined){GatorMarkerClick.remove()}
          if(HumeMarkerClick != undefined){HumeMarkerClick.remove()}
          if(UIMarker != undefined){UIMarker.remove()}


          popupUI.setText('Chosen Location');
          UIMarker = new mapboxgl.Marker({color: 'darkorange'});
          UIMarker.setLngLat([mouseClickLng, mouseClickLat]);
          UIMarker.setPopup(popupUI);
          UIMarker.addTo(map);
          UIMarker.togglePopup();

          //Global variables that are set when a custom location is chosen
          mouseClickLat = e.lngLat.lat;
          mouseClickLng = e.lngLat.lng;

          //These are global variables that must be reset if user chooses a custom location
          knownLocation = '';
          searchedLocation = '';
        }

        
        


      });
      

    }); 
    

      
    },

    //This function will return a confirmed location for the caller
    confirmLocation: function() {
      var lng = mouseClickLng;
      var lat = mouseClickLat;
      var coordinates = lat.toString() + ", " + lng.toString();
      var searchedChoice = searchedLocation;
      var knownChoice = knownLocation;

      if(knownChoice != ''){
        return knownChoice;
      }
      else if(searchedChoice != ''){
        return searchedChoice;
      }
      else if(lng != 0 && lat != 0){
        return coordinates;
      }
      else{
        return 'You must choose a preferred location to meet'
      }
    }


  }

  return methods;

}])



