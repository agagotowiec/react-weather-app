import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="New York" />

				<footer>
					This project is{""}
					<a href="https://github.com/agagotowiec"> open sourced </a>
					and was coded by{" "}
					<a href="https://www.linkedin.com/in/aga-got/" target="_blank" rel="noopener noreferrer">
						Aga Gotowiec.
					</a>
				</footer>
			</div>
		</div>
	);
}
