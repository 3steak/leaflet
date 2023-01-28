function init() {
    // Coordonnés de ma ville
    const amiens = {
        lat: 49.894067,
        lng: 2.295753
    }
    // lvl du zoom
    const zoomLevel = 7;

    //  L est un objet 
    // J'utilise ses methodes 
    const map = L.map('mapid').setView([amiens.lat, amiens.lng], zoomLevel);

    const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    // AJout du layer a la map(MAPID dans le html)
    mainLayer.addTo(map);



    // //  ajout marker
    var marker = L.marker();

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


    // fin fonxtion init
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

