// Init Storage 
const storage = new Storage();
// Get location from LS
const weatherLocation = storage.getLocationData();

// Init weather object 
const weather = new Weather(weatherLocation.city);
// Init UI object 
const ui = new UI();

// Init when page loaded
document.addEventListener("DOMContentLoaded", getWeather);
// Change location event 
document.getElementById("w-change-btn").addEventListener("click", (e) => {

	const city = document.getElementById("city").value;
	// Change location
	weather.changeLocation(city);
	// Set location from LS
	storage.setLocationData(city);
	// Get wheater and close
	getWeather();

	$("#locModal").modal("hide");

})


function getWeather() {
	weather.getWeather()
	.then((results) => {
		ui.paint(results);
	})
	.catch((err) => console.log(err))
}
