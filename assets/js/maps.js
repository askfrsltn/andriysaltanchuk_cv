function  initMap(){
                var map = new google.maps.Map(document.getElementById("map"),{
                    zoom:0.5,
                    center:{
                        lat:41.860817, 
                        lng:12.200226,
                    }
                });

               var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

               var locations=[
                   {lat:69.699770,lng: 170.316664},
                   {lat:46.487243, lng:-80.998543},
                   {lat: 20.569230,lng: -15.506040},
                   {lat:53.654373, lng: -6.720413},
                   {lat: -22.326390, lng: 119.405510},
                   {lat: 40.314628, lng: 50.631857}
               ];

               var markers=locations.map(function(location,i) {
                   return new google.maps.Marker({
                       position:location,
                       label: labels [i % labels.length]
                   });
               });

               var markerCluster = new MarkerClusterer(map, markers,
               {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
            }