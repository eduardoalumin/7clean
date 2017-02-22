
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  administrative_area_level_3: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};
function initAutocomplete() {
    var countryRestrict = {'country': 'mx'}; 
   autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode'],componentRestrictions: countryRestrict});
  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}
function fillInAddress() {    
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {  
    document.getElementById(component).value = "";
    //document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  //alert(place.address_components.length);
  for (var i = 0; i < place.address_components.length; i++) {

    var addressType = place.address_components[i].types[0];   
    //console.log(addressType);
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }    
  
   document.getElementById('lat').value = place.geometry.location.lat();
   document.getElementById('lng').value = place.geometry.location.lng();
}
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
  else
  {
    alert(1);
  }
}