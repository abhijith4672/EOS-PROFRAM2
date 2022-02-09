const busStops = [
  [77.13245681999602,11.026413130891596],
  [77.13173770744162,11.0281143744159],
  [77.1225078087389,11.025434536675055],
  [77.10781800011195,11.023534395758372],
  [77.09646850943756,11.019585043929123],
  [77.08424598096605,11.01202151459813],
  [77.06784805488788,11.00587367518562],
  [77.01593088288602,10.99828121229111],
  [76.99000788000377,11.009233969722304],
  [76.98604647491528,11.01287232855903],
  [76.97456449986647,11.005234585176032],
  [76.959871759472,11.000750760637748],
  ];
   
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaWppdGg0NjcyIiwiYSI6ImNreDc5ZHY0bDE1ankycm81Mm4xaWNoZ3UifQ.Jb046PtQrRICraUzlnHniw';
   
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:   [77.13245681999602,11.026413130891596],
    zoom: 14,
  });
   
  let counter = 0;
 const marker= new mapboxgl.Marker()
 .setLngLat(busStops[counter])
 .addTo(map);

  function move() {
    marker.setLngLat(busStops[counter])
    marker.addTo(map)
    counter ++
    setTimeout(move,1000)
}

 