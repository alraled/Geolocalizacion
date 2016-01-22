function posicion(pos) {

    document.getElementById("lat").innerHTML = pos.coords.latitude;
    document.getElementById("longitud").innerHTML = pos.coords.longitude;

    var pm = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" +
        pm + "&zoom=16&size=400x400&sensor=false";

    document.getElementById("mapa").src = url;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion, function(error) {
        alert("No se puede acceder a la posición");
    });
}