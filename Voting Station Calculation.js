const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

let stationName = 0;
let stationCapacity = 1;
let stationType = 2;

const chooseStations = function (stations) {
  let results = []
  for (let station of stations){
    if (station[stationCapacity] >= 20 && (station[stationType] == "school" || station[stationType] == "community centre")){
      results.push(station[stationName]);
    }
  }

  return results;
}

chooseStations(stations);