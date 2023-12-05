
function myFunction() {
    window.open("tel:+15678675309");
  }

  /// 1. define function

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(logPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function logPosition(position) {
   console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
}


function openWindow(){
window.open("tel:+15678675309");
getLocation();
}