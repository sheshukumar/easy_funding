  var geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
   } 
//Get the latitude and the longitude;
  function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng)
  }

  function errorFunction(){
    alert("Geocoder failed");
  }

  function initialize() {
    geocoder = new google.maps.Geocoder();
  }

  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         
         /* find complete location with address here  */

        // alert(results[0].formatted_address);

        /* find country name */
          for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    state= results[0].address_components[i];
                    
                    document.getElementById("geo").innerHTML = state.long_name;
                    break;
                }
            }
          }

        /* find city name here */
        
        // alert(state.long_name);

             /*   switch(state.long_name)
                {
                  case "Telangana" : document.getElementById("geo").innerHTML = "Telangana";
                                      break;

                  case "Andhra Pradesh" : document.getElementById("geo").innerHTML = "Andhra Pradesh";
                                      break;

                  case "Maharashtra" : document.getElementById("geo").innerHTML = "Maharashtra";
                                      break;

                  case "Karnataka" : document.getElementById("geo").innerHTML = "Karnataka";
                                      break;

                  case "Kerala" : document.getElementById("geo").innerHTML = "Kerala";
                                    break;

                  case "Tamil Nadu" : document.getElementById("geo").innerHTML = "Tamil Nadu";
                                    break;

                  default : document.getElementById("geo").innerHTML = "USA";

                }  */

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }