function init(){
    const coord = {
        lat: -23.942542,
        long: 46.154707
    };
    const zoom = 7;
    const carte =L.map("map").setView([coord.lat,coord.long],zoom);
    
    const title = L.titleLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    carte.addTo(title);
}