
    /**The Controller makes functions available to be called from the html and
     * updates the view after changes are made to it
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

   mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhcGFyYXp6aTAzMjkiLCJhIjoiY2pudXVoYW9kMThrZDN2bnRxcHE3MzZpbSJ9.3To4lk5RKG_8YBaMKZC4mA';
   var map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v9',
     center: [-82.347950, 29.646908],
     zoom: 13
   });
   

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
