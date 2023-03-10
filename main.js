


function init() {

    // Création de mon ping personnalisé

    var myIcon = L.icon({
        iconUrl: 'surf.png',
        iconSize: [40, 40],
        popupAnchor: [0, -30],
    });
    // Coordonnés de ma ville
    const town = {
        lat: 49.894067,
        lng: 2.295753
    }
    // lvl du zoom sur la ville 
    const zoomLevel = 10;

    //  "L" est un objet
    // J'utilise ses methodes 
    const map = L.map('mapid').setView([town.lat, town.lng], zoomLevel);

    const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    // AJout du layer a la map(MAPID dans le html)
    mainLayer.addTo(map);



    // //  ajout marker
    var marker = L.marker([], { icon: myIcon });

    // Ma description de publication
    let content = "let's go ";



    function onMapClick(e) {
        marker
            .setLatLng(e.latlng)
            .bindPopup("<small>" + content + "<br>" + e.latlng + "</small>")
            .addTo(map);
        lat = e.latlng;

    }

    map.on('click', onMapClick);


    // fin fonction init
}
let lat;
init();
let button = document.getElementById('button');

let text = document.getElementById('text');
console.log(button);
function onbtnClick(e) {
    text.innerHTML = "La latitude, longitude de votre point : " + lat;
}

button.addEventListener('click', onbtnClick);
// function map() {
//     let spots = document.getElementById("spots").innerHTML;
//     spots = JSON.parse(spots);
//     console.log(spots);
//     var myIcon = L.icon({
//         iconUrl: '/public/assets/img/surf.png',
//         iconSize: [40, 40],
//         popupAnchor: [0, -20],
//     });
//     let maps = [];
//     spots.forEach(spot => {

//         let i = 1;
//         // Coordonnés de ma ville
//         let spt = {
//             lat: spot.latitude,
//             lng: spot.longitude
//         }
//         // lvl du zoom
//         const zoomLevel = 7;

//         //  L est un objet
//         // J'utilise ses methodes

//         maps += L.map(`mapid${i}`).setView([spt.lat, spt.lng], zoomLevel);

//         // AJout du layer a la map(MAPID dans le html)

//         i++;

//     });
//     const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     });
//     maps.forEach(map => {
//         mainLayer.addTo(map);

//     });
// };

// setTimeout(() => {
//     map();
// }, '500');