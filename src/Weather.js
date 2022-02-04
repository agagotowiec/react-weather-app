import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
	let weatherData = {
		city: "Rome",
		temperature: 20,
		date: "Wednesday, 19:26",
		description: "Cloudy",
		imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
		humidity: 20,
		wind: 14,
	};

	return (
		<div className="Weather">
			<h3 className="date">{weatherData.date}</h3>
			<form className="mb-3">
				<div className="row">
					<div className="col-8">
						<input
							type="search"
							placeholder="Type a city.."
							className="form-control"
							autoComplete="off"
						/>
					</div>
					<div className="col-4">
						<input type="submit" value="Search" className="btn btn-warning w-200" />
					</div>
				</div>
			</form>
			<div className="overview">
				<h1 className="city">{weatherData.city}</h1>
				<ul>
					<li className="weather-description"></li>
				</ul>
			</div>
			<div className="row">
				<div className="col-6">
					<ul>
						<li>{weatherData.description}</li>
						<li>Humidity: {weatherData.humidity}%</li>
						<li>Wind: {weatherData.wind} km/h</li>
					</ul>
				</div>
				<div className="col-6">
					<div className="clearfix weather-temperature">
						<img src={weatherData.imgUrl} alt={weatherData.description} className="float-left" />
						<div className="float-left">
							<strong>{weatherData.temperature}</strong>
							<span className="units">
								<a href="/">°C</a> | <a href="/">°F</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
