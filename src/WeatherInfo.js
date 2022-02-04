import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Weather from "./Weather.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h3>
				{" "}
				<FormattedDate date={props.data.date} />
			</h3>
			<h1>{props.data.city}</h1>
			<ul>
				<li className="text-uppercase mb-3">{props.data.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix">
						<div className="float-left mt-2 mb-5">
							<ul>
								<li className="WeatherDescription">Humidity 💧{props.data.humidity}%</li>
								<li className="WeatherDescription">Wind 💨{props.data.wind} km/h</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
			</div>
		</div>
	);
}
