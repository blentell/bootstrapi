// Random dog image
const button = document.querySelector(".btn-lg");
const imageURL = document.querySelector(".img-fluid");

button.addEventListener("click", function () {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(function (rawData) {
			return rawData.json();
		})
		.then(function (data) {
			console.log("data", data);
			imageURL.src = data.message;
		});
});

// Weather App
const submit = document.querySelector(".weather-button");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const description = document.querySelector(".description");
const cityName = document.querySelector(".form-control");
const submit2 = document.querySelector(".weather-button2");
const newSlide = document.querySelector(".carousel-inner");
const temperature2 = document.querySelector(".temperature2");
const wind2 = document.querySelector(".wind2");
const description2 = document.querySelector(".description2");
const cityName2 = document.querySelector(".searchText");

submit.addEventListener("click", function () {
	fetch(`https://goweather.herokuapp.com/weather/${cityName.value}`)
		.then(function (rawData) {
			return rawData.json();
		})
		.then(function (data) {
			console.log("data", data);
			temperature.innerHTML = `Temperature: ${data.temperature}`;
			wind.innerHTML = `Wind: ${data.wind}`;
			description.innerHTML = `Description: ${data.description}`;
		});
});

submit2.addEventListener("click", function () {
	fetch(`https://goweather.herokuapp.com/weather/${cityName2.value}`)
		.then(function (rawData) {
			return rawData.json();
		})
		.then(function (data) {
			console.log("data", data);
			temperature2.innerHTML = `Temperature: ${data.temperature}`;
			wind2.innerHTML = `Wind: ${data.wind}`;
			description2.innerHTML = `Description: ${data.description}`;
		})
		.then(function (data) {
			const newSlide = document.createElement('div');
			newSlide.className = "carousel-item";
            document.appendChild(newSlide);          
			const newTemp = document.createElement('p');
			newTemp.className = "temperature2";
            document.appendChild(newTemp);
			const newWind = document.createElement("p");
			newWind.className = "wind2";
            document.appendChild(newWind);
			const newDesc = document.createElement("p");
            newDesc.className = "description2";
            document.appendChild(newDesc);
		});
});


