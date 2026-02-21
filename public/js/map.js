// public/js/map.js

const mapDiv = document.getElementById("map");

if (mapDiv) {
  const lat = Number(mapDiv.dataset.lat);
  const lng = Number(mapDiv.dataset.lng);
  const title = mapDiv.dataset.title;
  const location = mapDiv.dataset.location;
  const country = mapDiv.dataset.country;

  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // 🔴 REAL RED MARKER (CUSTOM ICON)
  const redIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  L.marker([lat, lng], { icon: redIcon })
    .addTo(map)
    .bindPopup(`
      <strong>${title}</strong><br>
      ${location}, ${country}
    `);
}