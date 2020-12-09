
let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
if(hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10){
  minutes = `0${minutes}`;
}
let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`;



let searchForm = document.querySelector("#city-form");

searchForm.addEventListener("submit", search);

function search(event){
  event.preventDefault();
  //let cityElement = document.querySelector("#city");
  //let cityInput = document.querySelector("#search-city");
  //cityElement.innerHTML = cityInput.value;
  //make an api call to open weather map api
  //once i get the responce, display the city name and the temp
  let apiKey = "b44354c0e29f4b84640f0747a154bc34";
  let city = document.querySelector("#search-city").value;
  let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherTemp)
}

function displayWeatherTemp(response){
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
}


let tempElement = document.querySelector("#temperature")
let temperature = tempElement.innerHTML;
let celLink = document.querySelector("#cel-link");
celLink.addEventListener("click", convertFer)

tempElement = document.querySelector("#temperature")
temperature = tempElement.innerHTML;
let ferLink = document.querySelector("#fer-link");
ferLink.addEventListener("click", convertCel)

function convertFer(event){
  event.preventDefault();
  let tempElement = document.querySelector("#temperature")
  tempElement.innerHTML = 66
}


function convertCel(event){
  event.preventDefault();
  let tempElement = document.querySelector("#temperature")
  tempElement.innerHTML = 19
}

