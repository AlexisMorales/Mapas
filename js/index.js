function onSuccess(position){
              $("#geolocation").html('Latitud: '           + position.coords.latitude          + '<br>' +
              'Longitud: '         + position.coords.longitude         + '<br>' +
              'Altitud: '          + position.coords.altitude          + '<br>' +
              'Exactitud: '          + position.coords.accuracy          + '<br>' +
              'Exactitud de Altura: ' + position.coords.altitudeAccuracy  + '<br>' +
              'Titulo: '           + position.coords.heading           + '<br>' +
              'Velocidad: '             + position.coords.speed             + '<br>' +
              'Marca Temporal: '         + position.timestamp                + '<br>');

}
function geo(){
  $("#geolocation").html("Esperando al GPS");
  var nav = navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}
function initMap() {
  var nav1 = navigator.geolocation.getCurrentPosition(onInfo, onError, { enableHighAccuracy: true });
}
function onInfo(position){

              var Longitud = position.coords.longitude ;
              var Latitud = position.coords.latitude ;
              var latLong = new google.maps.LatLng(Latitud, Longitud);
              var map = new google.maps.Map(document.getElementById('map'), {
                center: latLong,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                enableHighAccuracy: true
              });


              var image = 'img/marker.png';
              var marker = new google.maps.Marker({
                    position: latLong,
                    title: "Mi posición",
                    animation: google.maps.Animation.DROP,
                    enableHighAccuracy: true,
                    icon: image
                });

                marker.setMap(map);
                map.setZoom(14);
                map.setCenter(marker.getPosition());

                $.getJSON('http://hadoukendev.com/respuesta.php',function(data){
                    var text= JSON.stringify(data);
                    obj = JSON.parse(text);
                    var image1 = 'img/vaso.png';
                    for (var i = 0; i < obj.length; i++) {
                        var latLong1 = new google.maps.LatLng(obj[i].latitud.toString(), obj[i].longitud.toString());
                        var distancia = google.maps.geometry.spherical.computeDistanceBetween(latLong, latLong1);
                        alert(distancia);
                        if(distancia<2000){
                        var marker1 = new google.maps.Marker({
                              position: latLong1,
                              title: obj[i].nombre+"",
                              animation: google.maps.Animation.DROP,
                              enableHighAccuracy: true,
                              icon: image1
                          });
                          marker1.setMap(map);

                        }
                    }

                });
                var distancia = google.maps.geometry.spherical.computeDistanceBetween(latLong, latLong1);
                alert(distancia);
}
function onError(error){
              alert('code: '    + error.code    + '<br>' +
              'message: ' + error.message + '\n');
}
