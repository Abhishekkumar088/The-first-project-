// ✅ This is the MapTiler API key passed from Express

const key = window.mapToken;
console.log(key);
// ✅ Initialize map
const map = L.map("map").setView(
  [listing.geometry.coordinates[1], listing.geometry.coordinates[0]],
  10
);

// ✅ Add MapTiler layer
L.tileLayer(
  `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${key}`,
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
      '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

// ✅ Example marker
L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]])
  .addTo(map)
  .bindPopup(
    `<h2>${listing.title} </h2>  <p>Exact Location provided after booking</p>`
  );

// const marker = new maptilersdk.Marker().setLngLat([30.5, 50.5]).addTo(map);
