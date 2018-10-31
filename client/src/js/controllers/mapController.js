
    /**The Controller makes functions available to be called from the html and
     * updates the view after changes are made to it
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

  mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhcGFyYXp6aTAzMjkiLCJhIjoiY2pudXVoYW9kMThrZDN2bnRxcHE3MzZpbSJ9.3To4lk5RKG_8YBaMKZC4mA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-82.347950, 29.647900],
    zoom: 15.25,
    minZoom: 12
   });

  map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  }));

  var popup = new mapboxgl.Popup({className: 'my-class'})
  .setText('Hello, world!')
  .addTo(map);

  var popup2 = new mapboxgl.Popup({closeButton: false, closeOnClick: false})
  .setText('Hello World!')
  .addTo(map);


  

  //The Hub
  var HubMarker = new mapboxgl.Marker()
  .setLngLat([-82.345564, 29.648367])
  .setPopup(popup2)
  .addTo(map);

  console.log("Test");

  map.on('mousemove', function(e) {
    // Change the cursor style as a UI indicator.
   // map.getCanvas().style.cursor = 'pointer';

    /*
    console.log("Hello?");
    console.log("Pointer Lat: " + e.lngLat.lat);
   // console.log(e);
    console.log("Pointer Long: " + e.lngLat.lng);
    console.log("Mouse location Lat Precision: " + (Math.round(e.lngLat.lat * 10000) / 10000) + " Long Precision: " + (Math.round(e.lngLat.lng * 10000) / 10000));
    console.log(HubMarker.getLngLat().lng);
    */
    var roundedMouseLat = Math.round(e.lngLat.lat * 1000) / 1000;
    var roundedMouseLng = Math.round(e.lngLat.lng * 1000) / 1000;
    var roundedLatHub = Math.round(HubMarker.getLngLat().lat * 1000) / 1000;
    var roundedLngHub = Math.round(HubMarker.getLngLat().lng * 1000) / 1000;

    if(roundedMouseLat == roundedLatHub && roundedMouseLng == roundedLngHub){
      console.log("Made it this far");
      HubMarker.togglePopup();
    }

    //if(Math. e.lngLat)

    
    
  });

  map.on('click', function() {
    console.log("Clicked");
    HubMarker.getPopup().remove();

  });

  //Reitz Union
  var ReitzMarker = new mapboxgl.Marker()
  .setLngLat([-82.347767, 29.646378])
  .addTo(map);

  //Library West
  var LibMarker = new mapboxgl.Marker()
  .setLngLat([-82.342878, 29.651100])
  .setPopup(popup)
  .addTo(map);
  

  //Gator Dining
  var GatorMarker = new mapboxgl.Marker()
  .setLngLat([-82.350212, 29.648267])
  .addTo(map);

  //Hume Hall
  var HumeMarker = new mapboxgl.Marker()
  .setLngLat([-82.352466, 29.644802])
  .addTo(map);

   
   

    showMap = function() {
      /**TODO
       * Calls the mapFactory to load the map onto the screen
       */
      


    }

    locationConfirm = function(locationObject) {
      /**TODO
       * Calls the mapController to display approved meeting location
       */
    }
