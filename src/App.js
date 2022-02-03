import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Weather App</h1>

				<Weather />
				<footer>
					This page is {""}
					<a
						href="https://github.com/agagotowiec/react-weather-app"
						target="_blank"
						rel="noreferrer"
					>
						open-sourced.{" "}
					</a>
					It was coded by {""}
					<a href="https://www.linkedin.com/in/aga-got/" target="_blank" rel="noreferrer">
						Aga Gotowiec.
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
