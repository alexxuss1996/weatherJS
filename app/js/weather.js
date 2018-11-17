class Weather {
	constructor(city) {
		this.apiKey = "7795294d0f504458a48121118181711";
		this.city = city;
	}

	// Fetch weather from API
	async getWeather() {
		const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
		const responseData = await response.json();
		return responseData;
	}

	// Change weather Location
	changeLocation(city) {
		this.city = city
	}
}