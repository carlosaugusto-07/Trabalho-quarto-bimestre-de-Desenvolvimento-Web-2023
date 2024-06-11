

const myMap = L.map('map').setView([-3.897423, -61.376009], 11);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);


	
      
       
       
    

    var taxiIcon = L.icon({
    iconUrl: 'dock.png',
    iconSize: [28, 28]
    })
       var marker2 = L.marker([-3.897437, -61.376047],{ icon: taxiIcon}).addTo(myMap);

       var droneIcon = L.icon({
        iconUrl: 'drone-delivery.png',
        iconSize: [18, 18]
        })
          
        var marker3 = L.marker([-3.602655, -61.394535],{ icon: droneIcon}).addTo(myMap);
        var marker4 = L.marker([-3.593830, -61.191578],{ icon: droneIcon}).addTo(myMap);
        var marker5 = L.marker([-3.548707, -60.835221],{ icon: droneIcon}).addTo(myMap);
        var marker6 = L.marker([-3.334925, -60.609056],{ icon: droneIcon}).addTo(myMap);
        var marker7 = L.marker([-3.342818, -60.470147],{ icon: droneIcon}).addTo(myMap);
        var marker8 = L.marker([-3.278861, -60.315206],{ icon: droneIcon}).addTo(myMap);
        var marker9 = L.marker([-3.170648, -59.972621],{ icon: droneIcon}).addTo(myMap);
        var marker10 = L.marker([-3.605483, -60.994131],{ icon: droneIcon}).addTo(myMap);
        var marker11 = L.marker([-3.488937, -60.774866],{ icon: droneIcon}).addTo(myMap);
        


        var polygon = L.polygon(
            [
                L.latLng(-3.092209, -61.539763),
                L.latLng(-4.032305, -61.517410)
            ]
        ).addTo(myMap)
        var polygon = L.polygon(
            [
                L.latLng(-3.092209, -61.539763),
                L.latLng(-2.995797, -59.840892)
            ]
        ).addTo(myMap)
        var polygon = L.polygon(
            [
                L.latLng(-2.995797, -59.840892),
                L.latLng(-3.933578, -59.764114)
            ]
        ).addTo(myMap)
        var polygon = L.polygon(
            [
                L.latLng(-4.032305, -61.517410),
                L.latLng(-3.933578, -59.764114)
            ]
        ).addTo(myMap)
        
        


        myMap.on('click', function (e) {
			console.log(e)
			var newMarker = L.marker([-3.897437, -61.376047],{ icon: taxiIcon}).addTo(myMap);
			L.Routing.control({
				waypoints: [
					L.latLng(-3.897437, -61.376047),
					L.latLng(-3.189578, -59.869038)
				]
			}).on('routesfound', function (e) {
				var routes = e.routes;
				console.log(routes);

				e.routes[0].coordinates.forEach(function (coord, index) {
					setTimeout(function () {
						marker2.setLatLng([coord.lat, coord.lng]);
					}, 200 * index)
				})

			}).addTo(myMap);
		});
        myMap.on('click', function (e) {
			console.log(e)
			
			L.polygon(
				[
					
				]).addTo(myMap);
            }); 
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.310672573907412, -61.223459281137),
					L.latLng(-3.5766519187399317,-61.398475483589635)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.593830, -61.191578),
					L.latLng(-3.310672573907412, -61.223459281137)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.7543124601751168, -61.15886831045084),
					L.latLng(-3.688360530275591, -61.06310163665623)
				]).addTo(myMap);
            }); 
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.7543124601751168, -61.15886831045084),
					L.latLng(-3.593830, -61.191578)
				]).addTo(myMap);
            }); 
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.688360530275591, -61.06310163665623),
					L.latLng(-3.605483, -60.994131)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.6021220697666996, -60.81719309077675),
					L.latLng(-3.548707, -60.835221)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.6021220697666996, -60.81719309077675),
					L.latLng(-3.488937, -60.774866)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.2974252360432827, -60.625091164240864),
					L.latLng(-3.334925, -60.609056)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.2974252360432827, -60.625091164240864),
					L.latLng(-3.291970296547822, -60.63040764059383)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.286579391498365, -60.63058374163391),
					L.latLng(-3.291970296547822, -60.63040764059383)
				]).addTo(myMap);
            });   
            //-3.294032135334968 
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.286579391498365, -60.63058374163391),
					L.latLng(-3.294032135334968, -60.62384698921925)
				]).addTo(myMap);
            }); 
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.290457248964838, -60.616017790706834),
					L.latLng(-3.294032135334968, -60.62384698921925)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
			console.log(e)
			L.polygon(
				[
					L.latLng(-3.290457248964838, -60.616017790706834),
					L.latLng(-3.300363894245564, -60.61395428082292)
				]).addTo(myMap);
            });
        myMap.on('click', function (e) {
                console.log(e)
                L.polygon(
                    [
                        L.latLng(-3.342818, -60.470147),
                        L.latLng(-3.300363894245564, -60.61395428082292)
                    ]).addTo(myMap);
                });
        myMap.on('click', function (e) {
                console.log(e)
                L.polygon(
                    [
                        L.latLng(-3.342818, -60.470147),
                        L.latLng(-3.430065889609114, -60.46233711289661)
                    ]).addTo(myMap);
                });
        myMap.on('click', function (e) {
                console.log(e)
                L.polygon(
                    [
                        L.latLng(-3.278861, -60.315206),
                        L.latLng(-3.430065889609114, -60.46233711289661)
                    ]).addTo(myMap);
                });
        myMap.on('click', function (e) {
                console.log(e)
                L.polygon(
                    [
                        L.latLng(-3.278861, -60.315206),
                        L.latLng(-3.16369965246577, -60.34235853007526)
                    ]).addTo(myMap);
                });
        myMap.on('click', function (e) {
                console.log(e)
                L.polygon(
                    [
                        L.latLng(-3.103449426428464, -60.01409351461214),
                        L.latLng(-3.16369965246577, -60.34235853007526)
                    ]).addTo(myMap);
                });
        myMap.on('click', function (e) {
                console.log(e)
                L.polygon(
                    [
                        L.latLng(-3.103449426428464, -60.01409351461214),
                        L.latLng(-3.170648, -59.972621)
                    ]).addTo(myMap);
                });                                                                              
            
        
        

       

function generateList() {
  const ul = document.querySelector('.list');
  hospitalList.forEach((hospital) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');
    a.addEventListener('click', () => {
        flyToStore(hospital);
    });
    div.classList.add('hospital-item');
    a.innerText = hospital.properties.name;
    a.href = '#';
    p.innerText = hospital.properties.address;

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList();

function makePopupContent(hospital) {
  return `
    <div>
        <h4>${hospital.properties.name}</h4>
        <p>${hospital.properties.address}</p>
        <div class="phone-number">
            <a href="tel:${hospital.properties.phone}">${hospital.properties.phone}</a>
        </div>
    </div>
  `;
}
function onEachFeature(feature, layer) {
    layer.bindPopup(makePopupContent(feature), { closeButton: false, offset: L.point(0, -8) });
}

var myIcon = L.icon({
    iconUrl: 'hospital.png',
    iconSize: [25, 25]
});

const hospitalsLayer = L.geoJSON(hospitalList, {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: myIcon });
    }
});
hospitalsLayer.addTo(myMap);

function flyToStore(hospital) {
    const lat = hospital.geometry.coordinates[1];
    const lng = hospital.geometry.coordinates[0];
    myMap.flyTo([lat, lng], 14, {
        duration: 3
    });
    setTimeout(() => {
        L.popup({closeButton: false, offset: L.point(0, -8)})
        .setLatLng([lat, lng])
        .setContent(makePopupContent(hospital))
        .openOn(myMap);
    }, 3000);
}




