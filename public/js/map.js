const mapDiv = document.getElementById("map");

if (!mapDiv) {
    console.warn("Map container not found");
} else {
    const lng = parseFloat(mapDiv.dataset.lng);
    const lat = parseFloat(mapDiv.dataset.lat);
    const title = mapDiv.dataset.title;

    const map = new maplibregl.Map({
        container: "map",
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${window.MAP_API_KEY}`,
        center: [lng, lat],
        zoom: 12
    });

    new maplibregl.Marker({ color: "red" })
        .setLngLat([lng, lat])
        .setPopup(
            new maplibregl.Popup().setHTML(`<strong>${title}</strong>`)
        )
        .addTo(map);

    map.addControl(new maplibregl.NavigationControl());
}
