function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "c049b5aaa7e7a0cd89274c0133f52d50";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log("lat");
  console.log("lon");
  axios.get(url).then(showWeather);
}
navigator.geolocation.getCurrentPosition(retrievePosition);
