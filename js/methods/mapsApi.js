let map, marker;
let currentLocation;

function initMap() {
    const mapElement = document.getElementById("map");

    // Manejador de clic en el botón para agregar ubicación
    document.getElementById("shareLocation").addEventListener("click", function () {
        // Mostrar el mapa cuando el usuario decide agregar la ubicación
        mapElement.style.display = "block";

        // Intentar obtener la ubicación actual del usuario
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Crear el mapa centrado en la ubicación actual del usuario
                    map = new google.maps.Map(mapElement, {
                        center: pos,
                        zoom: 15,
                    });

                    // Colocar un marcador en la ubicación actual del usuario
                    marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        draggable: true, // Permite que el marcador se pueda arrastrar
                    });

                    // Guardar la ubicación actual
                    updateLocationInput(pos);

                    // Actualizar la ubicación al mover el marcador
                    marker.addListener('dragend', function () {
                        updateLocationInput(marker.getPosition());
                    });

                    // Habilitar el botón de envío
                    document.getElementById("list-btn").disabled = false;
                },
                () => {
                    handleLocationError(true);
                }
            );
        } else {
            // Si el navegador no soporta geolocalización
            handleLocationError(false);
        }
    });
}

function updateLocationInput(position) {
    const locationInput = document.getElementById('address');
    const lat = typeof position.lat === 'function' ? position.lat() : position.lat;
    const lng = typeof position.lng === 'function' ? position.lng() : position.lng;
    locationInput.value = `https://www.google.com/maps?q=${lat},${lng}`;

}

function handleLocationError(browserHasGeolocation, pos) {
    console.log(
        browserHasGeolocation
            ? "Error: El servicio de geolocalización falló."
            : "Error: Tu navegador no soporta geolocalización."
    );
};

// document.getElementById('shareLocation').addEventListener('click', function () {
//     const locationInput = document.getElementById('address').value;
//     const whatsappUrl = `https://wa.me/?text=Mi%20ubicación%20es:%20${encodeURIComponent(locationInput)}`;
//     window.open(whatsappUrl, '_blank');
// });




// let map, marker;
// let currentLocation;

// function initMap() {
//     const mapElement = document.getElementById("map");

//     // Manejador de clic en el botón para agregar ubicación
//     document.getElementById("shareLocation").addEventListener("click", function () {
//         // Mostrar el mapa cuando el usuario decide agregar la ubicación
//         mapElement.style.display = "block";

//         // Intentar obtener la ubicación actual del usuario
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const pos = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };

//                     // Crear el mapa centrado en la ubicación actual del usuario
//                     map = new google.maps.Map(mapElement, {
//                         center: pos,
//                         zoom: 15,
//                     });

//                     // Colocar un marcador en la ubicación actual del usuario
//                     marker = new google.maps.Marker({
//                         position: pos,
//                         map: map,
//                         draggable: true, // Permite que el marcador se pueda arrastrar
//                     });

//                     // Guardar la ubicación actual
//                     updateLocation(pos);

//                     // Actualizar la ubicación al mover el marcador
//                     marker.addListener('dragend', function () {
//                         updateLocation(marker.getPosition());
//                     });

//                     // Habilitar el botón de envío
//                     document.getElementById("list-btn").disabled = false;
//                 },
//                 () => {
//                     handleLocationError(true);
//                 }
//             );
//         } else {
//             // Si el navegador no soporta geolocalización
//             handleLocationError(false);
//         }
//     });
// }

// function updateLocation(position) {
//     const lat = typeof position.lat === 'function' ? position.lat() : position.lat;
//     const lng = typeof position.lng === 'function' ? position.lng() : position.lng;
//     currentLocation = `https://www.google.com/maps?q=${lat},${lng}`;
// }

// function handleLocationError(browserHasGeolocation) {
//     const defaultLocation = { lat: -34.397, lng: 150.644 }; // Ubicación predeterminada

//     map = new google.maps.Map(document.getElementById("map"), {
//         center: defaultLocation,
//         zoom: 6,
//     });

//     console.log(
//         browserHasGeolocation
//             ? "Error: El servicio de geolocalización falló."
//             : "Error: Tu navegador no soporta geolocalización."
//     );
// }

// document.getElementById('list-btn').addEventListener('click', function () {
//     const orderText = document.getElementById('list-items').value;

//     if (orderText.trim() === "") {
//         alert("Por favor, escribe tu pedido antes de enviar.");
//         return;
//     }

//     let finalMessage = orderText;

//     if (currentLocation) {
//         finalMessage += `\n\nMi ubicación es: ${currentLocation}`;
//     } else {
//         alert("No se pudo obtener la ubicación. Intenta nuevamente.");
//         return;
//     }

//     //     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(finalMessage)}`;
//     //     window.open(whatsappUrl, '_blank');
// });
