class UI {
	constructor() {
		this.location = document.getElementById("w-location");
		this.description = document.getElementById("w-description");
		this.string = document.getElementById("w-string");
		this.icon = document.getElementById("w-icon");
		this.details = document.getElementById("w-details");
		this.humidity = document.getElementById("w-humidity");
		this.feelsLike = document.getElementById("w-feels-like");
		this.wind = document.getElementById("w-wind");
	}
	paint(weather) {
		this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
		this.description.textContent = weather.current.condition.text;
		this.string.textContent = `${weather.current.temp_f} F, (${weather.current.temp_c} °C)`;
		this.icon.setAttribute("src", `https:${weather.current.condition.icon}`);
		this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
		this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_f} F, (${weather.current.feelslike_c}) °C`;
		this.wind.textContent = `Wind: from the ${weather.current.wind_dir}, ${weather.current.wind_kph} km/h`;

	}
}
