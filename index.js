function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 27.9461245, lng: -15.5352379 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location.coords,
      title: location.title,
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

const locations = [
{ title: 'ALISIO ACTIVIDADES', coords: { lat: 28.099471, lng: -15.4492861 } }, 
{ title: 'LIMONIUM CANARIAS', coords: { lat: 28.101749100000003, lng: -15.470624599999999 } }, 
{ title: 'BEREBER AVENTURA', coords: { lat: 27.75641, lng: -15.59206 } }, 
{ title: 'CLIMBO', coords: { lat: 28.11177, lng: -15.423216 } }, 
{ title: 'VULCAN CANARIAS DISCOVER', coords: { lat: 27.9202202, lng: -15.547437300000002 } }, 
{ title: 'MONTAÑISMOCANARIO', coords: { lat: 28.11178, lng: -15.421170000000002 } }, 
{ title: 'CUERDA VIVA', coords: { lat: 28.114549, lng: -15.455712699999998 } }, 
{ title: 'KARAPAT DIVE', coords: { lat: 27.9916132, lng: -15.3941057 } }, 
{ title: 'ATLANTIK DIVING', coords: { lat: 27.783271000000003, lng: -15.7073476 } }, 
{ title: 'THE BIG BLUE', coords: { lat: 27.770829499999998, lng: -15.542718300000002 } }, 
{ title: 'TOP DIVING PUERTO RICO, S.L.', coords: { lat: 27.783292100000004, lng: -15.7162453 } }, 
{ title: 'DIVING CENTER NAUTICO.', coords: { lat: 27.7606549, lng: -15.6839326 } }, 
{ title: 'BLUE EXPLORERS LAS PALMAS', coords: { lat: 27.8272528, lng: -15.7553776 } }, 
{ title: 'NORDIC DIVERS', coords: { lat: 27.858312100000003, lng: -15.3947644 } }, 
{ title: 'SCUBA SUR', coords: { lat: 27.770533899999997, lng: -15.698533 } }, 
{ title: 'DELPHINUS GRAN CANARIA', coords: { lat: 27.822495, lng: -15.759691199999999 } }, 
{ title: 'DIVING CENTER SUN-SUB', coords: { lat: 27.763808500000003, lng: -15.5682607 } }, 
{ title: 'CANARY DIVING SCHOOL', coords: { lat: 27.815439299999998, lng: -15.7542801 } }, 
{ title: 'AVENTURA EN CANARIAS', coords: { lat: 28.1435, lng: -15.52447 } }, 
{ title: 'DIVING ADVENTURE LOUNGE', coords: { lat: 27.757873999999997, lng: -15.566725 } }, 
{ title: 'ZEUS DIVE CENTER', coords: { lat: 27.7646598, lng: -15.561451500000002 } }, 
{ title: 'BUCEO PANDORA', coords: { lat: 27.859648600000003, lng: -15.398585500000001 } }, 
{ title: 'BUCEO CANARIAS', coords: { lat: 28.124988199999997, lng: -15.4266638 } }, 
{ title: 'GRAN CANARIA DIVERS, S.L.', coords: { lat: 27.818085999999997, lng: -15.761872 } }, 
{ title: 'PUERTO RICO DIVING CENTER', coords: { lat: 27.790332899999996, lng: -15.715133699999999 } }, 
{ title: 'EXTRA DIVERS WORLDWIDE', coords: { lat: 27.764570799999998, lng: -15.6007314 } }, 
{ title: 'ESCUELA DE BUCEO', coords: { lat: 28.136446999999997, lng: -15.437799599999998 } }, 
{ title: 'ATLANTIC WORLD', coords: { lat: 27.770995399999997, lng: -15.5358149 } }, 
{ title: 'WATERSPORTS LUISMOLINA', coords: { lat: 27.772342600000005, lng: -15.696814100000001 } }, 
{ title: 'E-MOTIONS, S.C.P', coords: { lat: 27.75706, lng: -15.601220000000001 } }, 
{ title: 'TRACK & TRAIL', coords: { lat: 36.38559179999999, lng: -94.2156197 } }, 
{ title: 'MOTO & BIKE', coords: { lat: 36.7498841, lng: -95.97181590000001 } }, 
{ title: 'BIKE & FUN', coords: { lat: 37.09024, lng: -95.712891 } }, 
{ title: 'VIVAC AVENTURA, S.L.', coords: { lat: 28.1210695, lng: -15.4559008 } }, 
{ title: 'SALITRE SPORT', coords: { lat: 28.139174800000003, lng: -15.4351154 } }, 
{ title: 'FREESPORTS MARKETING,S .L.U', coords: { lat: 27.818165000000004, lng: -15.763143099999999 } }, 
{ title: 'MASPALOMAS BEACH & CITY TOUR', coords: { lat: 27.736014100000002, lng: -15.593972299999999 } }, 
{ title: 'BICICLETAS', coords: { lat: 28.132025199999998, lng: -15.431575 } }, 
{ title: 'CANARIAS BIKE MOBILITY', coords: { lat: 28.1175745, lng: -15.424312699999998 } }, 
{ title: 'CITY EBIKE TOUR', coords: { lat: 27.7457293, lng: -15.611859599999999 } }, 
{ title: 'ELECTRIC BIKE TOURS GRAN CANARIA (ECOBIKERS)', coords: { lat: 28.1119136, lng: -15.422464999999999 } }, 
{ title: 'FUN ACTION SPORTS AND ADVENTURE', coords: { lat: 27.736800800000005, lng: -15.5944068 } }, 
{ title: 'CYCLE GRAN CANARIA, S.L.', coords: { lat: 28.1283747, lng: -15.444838399999998 } }, 
{ title: 'EXPLOTACIONES TURISTICAS VILLAMAR, S.L. ', coords: { lat: 28.138233000000003, lng: -15.436789000000001 } }, 
{ title: 'AQUASPORT', coords: { lat: 27.7577767, lng: -15.566305599999998 } }, 
{ title: 'TAURITO WATER SPORT,S .L.U.', coords: { lat: 27.815160700000003, lng: -15.7537426 } }, 
{ title: 'AUTOMOTORACER, S.L.', coords: { lat: 32.8998091, lng: -97.0403352 } }, 
{ title: 'PABERWIND KITESURF SCHOOL', coords: { lat: 27.994619500000002, lng: -15.4319851 } }, 
{ title: 'ACTIVATREK', coords: { lat: 28.096562300000002, lng: -15.4544578 } }, 
{ title: 'CANARIAS ETNOGRÁFICA', coords: { lat: 28.019246000000003, lng: -15.645632 } }, 
{ title: 'TAURITO WATER SPORT, S.L.U.', coords: { lat: 27.815022999999997, lng: -15.753739999999999 } }, 
{ title: 'JETSKI TOUR', coords: { lat: 27.7826654, lng: -15.714464600000001 } }, 
{ title: 'ONE DAY IN TENERIFE', coords: { lat: 28.291563699999998, lng: -16.6291304 } }, 
{ title: 'ASTRO GC-HESPERIENCE', coords: { lat: 27.75334, lng: -15.576602 } }, 
{ title: 'ASTROEDUCA', coords: { lat: 28.009886600000005, lng: -15.5328894 } }, 
{ title: 'SKY REBELS', coords: { lat: 27.771574400000002, lng: -15.5851587 } }, 
{ title: 'PARAPENTE BIPLAZA LAS PALMAS', coords: { lat: 28.102594399999997, lng: -15.454372199999998 } }, 
{ title: 'AVENTURA SAGITARIUS STAR, S.L. ', coords: { lat: 27.7816438, lng: -15.7121938 } }, 
{ title: 'LIVINGSEA', coords: { lat: 28.130032, lng: -15.431582999999998 } }, 
{ title: 'ACTIVITIES', coords: { lat: 27.833815, lng: -15.61731 } }, 
{ title: 'MOGAN WATER SPORT,S .L.', coords: { lat: 27.7822466, lng: -15.7124633 } }, 
{ title: 'ARUCAS A CABALLO', coords: { lat: 28.118896399999997, lng: -15.515061300000001 } }, 
{ title: 'EXCURSIONES A CABALLO', coords: { lat: 27.782666100000004, lng: -15.6317496 } }, 
{ title: 'BLACK HORSE', coords: { lat: 27.786966999999997, lng: -15.632515 } }, 
{ title: 'ZOO CAMEL PARK', coords: { lat: 27.8507488, lng: -15.567249400000001 } }, 
{ title: 'CAMELLO SAFARI DUNA OASIS', coords: { lat: 27.7429498, lng: -15.595862200000001 } }, 
{ title: 'QUAD MASPALOMAS', coords: { lat: 27.749571500000002, lng: -15.5764714 } }, 
{ title: 'FREESPORTS MARKETING', coords: { lat: 27.7678512, lng: -15.6085215 } }, 
{ title: 'VIAJES SAN AGUSTIN', coords: { lat: 27.7678732, lng: -15.544657199999998 } }, 
{ title: 'ROBIN TOUR', coords: { lat: 28.102298200000003, lng: -15.415695199999998 } }, 
{ title: 'MG URBAN TOUR', coords: { lat: 28.140279600000003, lng: -15.432475899999998 } }, 
{ title: 'SEGWAY GRAN CANARIA', coords: { lat: 27.7613474, lng: -15.5879987 } }, 
{ title: 'SEGWAY LPA', coords: { lat: 28.137220399999997, lng: -15.4294721 } }, 
{ title: 'NATUR BIKE SL', coords: { lat: 27.7581387, lng: -15.6793198 } }, 
{ title: 'JOSE LUIS CASTILLA PEÑATE', coords: { lat: 28.135330600000003, lng: -15.4324872 } }, 
{ title: 'NATURE CANARIENSIS', coords: { lat: 27.860691499999998, lng: -15.389575699999998 } }, 
{ title: 'ROCKY ADVENTURE', coords: { lat: 27.7701349, lng: -15.5477576 } }, 
{ title: 'PAUL THIERRY CHRISTIAN ROGER', coords: { lat: 41.7889469, lng: -87.60093309999998 } }, 
{ title: 'CAMPAMENTO BASE', coords: { lat: 28.134905800000002, lng: -15.4286434 } }, 
{ title: 'SENDA BIOSFERA', coords: { lat: 28.045424199999996, lng: -15.7468535 } }, 
{ title: 'GUILLERMO BERNAL MONROBE', coords: { lat: 27.9849162, lng: -15.376948800000001 } }, 
{ title: 'SAMSARA TOURS, S.L.', coords: { lat: 28.140625, lng: -15.431526500000002 } }, 
{ title: 'GRAN CANARIA VIVA', coords: { lat: 27.9051689, lng: -15.4434221 } }, 
{ title: 'WANDERING PIER GRAN CANARIA', coords: { lat: 28.1047216, lng: -15.7045666 } }, 
{ title: 'MOGAN VERDE', coords: { lat: 27.8839292, lng: -15.723279000000002 } }, 
{ title: 'EXTREME TREK & CLIMB', coords: { lat: 43.23517409999999, lng: -87.9850598 } }, 
{ title: 'TOMAS CORREA GUIMERA', coords: { lat: 28.13895, lng: -15.4352 } }, 
{ title: 'EL NUBLO. TURISMO SOSTENIBLE', coords: { lat: 27.9703435, lng: -15.612681400000001 } }, 
{ title: 'NASZA GRAN CANARIA', coords: { lat: 27.855911699999997, lng: -15.745087300000002 } }, 
{ title: 'NORDIC WALKING', coords: { lat: 28.1406244, lng: -15.4315517 } }, 
{ title: 'GASTRO GRAN CANARIA', coords: { lat: 27.9964885, lng: -15.4112684 } }, 
{ title: 'DOGO CANARIO, S.L.', coords: { lat: 27.9879848, lng: -15.432503699999998 } }, 
{ title: 'JACHT KAROLKA', coords: { lat: 27.8159363, lng: -15.765526399999999 } }, 
{ title: 'SNORKELING EXPERIENCE', coords: { lat: 28.1395674, lng: -15.435789199999999 } }, 
{ title: 'SURF CANARIES', coords: { lat: 27.752015000000004, lng: -15.570545000000001 } }, 
{ title: 'FACTORY SURF CANARIAS', coords: { lat: 28.131309899999998, lng: -15.443442999999998 } }, 
{ title: 'BD SURF', coords: { lat: 27.7582016, lng: -15.566425199999998 } }, 
{ title: 'BRISA SCHOOL', coords: { lat: 28.131589399999996, lng: -15.4438312 } }, 
{ title: 'STANDUPPADDLE GRANCANARIA', coords: { lat: 27.757545299999997, lng: -15.681618799999999 } }, 
{ title: 'PATALASUP', coords: { lat: 27.770344199999997, lng: -15.687374599999998 } }, 
{ title: 'PROSURFING COMPANY', coords: { lat: 27.7655766, lng: -15.571013800000001 } }, 
{ title: 'THE SURF HOME, S.C.P', coords: { lat: 28.099044199999998, lng: -15.417144400000002 } }, 
{ title: 'ESCUELA DE VELA CLUB MISTRAL', coords: { lat: 27.784020299999998, lng: -15.715355800000001 } }, 
{ title: 'TRIPLE FORWARD WINDSURFING, S.L. ', coords: { lat: 43.807305, lng: -88.398333 } }, 
{ title: 'BLUE M', coords: { lat: 27.815894500000002, lng: -15.765267399999999 } }, 
{ title: 'CANTIERI CAPELLI', coords: { lat: 45.151807, lng: 9.939454 } }, 
{ title: 'KEEPER UNO', coords: { lat: 27.815776300000003, lng: -15.7657144 } }, 
{ title: 'BAHIA CAT', coords: { lat: 27.74905, lng: -15.623510000000001 } }, 
{ title: 'BIRLOKE', coords: { lat: 27.7453967, lng: -15.609616500000001 } }, 
{ title: 'DOLPHINS  CAT', coords: { lat: 27.7830408, lng: -15.715964300000001 } }, 
{ title: 'SAGITTARIUS CAT', coords: { lat: 27.78255, lng: -15.7119323 } }, 
{ title: 'SALMON ONCE', coords: { lat: 28.105251799999998, lng: -15.4170108 } }, 
{ title: 'SEA DREAM', coords: { lat: 28.149846000000004, lng: -15.43165 } }, 
{ title: 'SPIRIT OF THE SEA', coords: { lat: 27.7824076, lng: -15.7114984 } }, 
];
