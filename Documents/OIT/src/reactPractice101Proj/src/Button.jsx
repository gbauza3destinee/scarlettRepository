
<button onclick= "recordInstance()"> TAP </button>

function recordInstance(){

    dialEmergencyCall();
    time = getTime();
    date = getDate();
    getLocation();


}
function dialEmergencyCall(){
    // - dials emergency call

}

function getTime(){
    const date = new Date();
    time = date.getTime
}

function getDate(){
    const date = new Date();
    date = date.getDate;
    // - records time and date 
}

// Uses navigator object 
// contains 2 nested methods - is this something that should be 
// extracted into a new file (location) 

function getLocation(){
    
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
      function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
      }


  

}
