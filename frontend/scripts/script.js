let geocoder;

function initialize() {
  geocoder = new google.maps.Geocoder();
}

async function submit() {
  const startAddress = document.getElementById("startAddressInput").value;
  const destinationAddress = document.getElementById("destinationAddressInput").value;

  if (!startAddress) {
    alert('Please enter start address');
  } else if (!destinationAddress) {
    alert('Please enter destination address');
  } else {
    const startAddressInfo = await getCoorinates(startAddress, 'start address');
    const destinationAddressInfo = await getCoorinates(destinationAddress, 'destination address');

    startLatitude = startAddressInfo.latitude;
    startLongitude = startAddressInfo.longitude;
    endLatitude = destinationAddressInfo.latitude;
    endLongitude = destinationAddressInfo.longitude

    await getPrices(startLatitude, startLongitude, endLatitude, endLongitude);
  }
}

async function getCoorinates(address, addressType) {
  return new Promise((resolve, reject) => {
    geocoder.geocode( { 'address': address}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();

        resolve({ latitude, longitude });
      } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
        alert(`No ${addressType} was found: ${address}`);
        resolve();
      }
    }); 
  });
}

async function getPrices(startLatitude, startLongitude, endLatitude, endLongitude) {
  url = `http://localhost:3000/api/uber/price?startLatitude=${startLatitude}&startLongitude=${startLongitude}&endLatitude=${endLatitude}&endLongitude=${endLongitude}`

  $.get(url, (result) => {
    $('#resultTable').empty();
    $('#resultTable').append('<tr><th>Name</th><th>Price</th></tr>');
    result.forEach((service) => {
      $('#resultTable').append(`<tr><td>${service.name}</td><td>${service.price}</td></tr>`);
    });
  });
}
