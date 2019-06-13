function getGeo() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const mapImage = document.querySelector('#map-image');
//    const altitude = document.querySelector('#altitude');
    mapLink.href = '';
    mapLink.textContent = '';
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
//        const alt = position.coords.altitude;
        window.alert("ATTENTION CITIZEN: The Use Of Nuclear Weapons Is Prohibited. Federal Authorities Have Been Notified And Are Heading To Your Location. Do Not Leave. You Will Not Escape.")
        status.textContent = '';
        mapImage.innerHTML =`
        <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">View Larger Map</a></small>
        `
        mapLink.innerHTML = `Latitude: ${latitude} °,` + ' ' +`  Longitude: ${longitude} °`;
        altitude.innerHTML = `Authorities are responding to this location:`;
    }
    function error() {
        status.innerHTML = 'Unable to retrieve your location';
    }
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  document.querySelector('#find-user').addEventListener('click', getGeo);