/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};*/

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
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}





var map;
function initMap() {
  navigator.geolocation.getCurrentPosition(onInfo, onError);
  function onInfo(position){

                var Longitud = position.coords.longitude ;
                var Latitud = position.coords.latitude ;
                var latLong = new google.maps.LatLng(Latitud, Longitud);
                map = new google.maps.Map(document.getElementById('map'), {
                  center: latLong,
                  zoom: 16,
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                  enableHighAccuracy: true
                });

                var marker = new google.maps.Marker({
                      position: latLong,
                      title: "Mi posición",
                      animation: google.maps.Animation.DROP
                  });

                  marker.setMap(map);
                  map.setZoom(16);
                  map.setCenter(marker.getPosition());

  }

}
function onError(error){
              alert('code: '    + error.code    + '<br>' +
              'message: ' + error.message + '\n');
}
