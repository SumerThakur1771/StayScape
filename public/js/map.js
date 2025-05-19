mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v12",
//   center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//   zoom: 9, // starting zoom
// });

// console.log(coordinates);

// const marker = new mapboxgl.Marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h4>${listing.title}</h4><p> Exact Location provided after booking</p>`
//     )
//  )
//   .addTo(map);


if (listing.geometry && listing.geometry.coordinates) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 9,
  });

  new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><p> Exact Location will be provided after booking</p>`
      )
    )
    .addTo(map);
} else {
  document.getElementById("map").innerHTML =
    "<p style='color:red;'>Map location is missing for this listing.</p>";
}