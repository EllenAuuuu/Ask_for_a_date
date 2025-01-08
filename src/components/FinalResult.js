import React from "react";
import "../styles/ResultStyle.css";

function FinalResult({ userName, topRestaurants, selectedDate }) {
	return (
		<div className="result-container">
			<h2>Here are your choices!</h2>
			<p>
				<strong>Name:</strong> {userName}
			</p>
			<p>
				<strong>Top 3 Restaurants:</strong>
			</p>
			<ul>
				{topRestaurants.map((restaurant, index) => (
					<li key={index}>{restaurant}</li>
				))}
			</ul>
			<p>
				<strong>Date:</strong> {selectedDate}
			</p>
			<p>Can't wait for celebrating your birthday! 💕</p>
			<p>hi,buddy plz screenshot and send it to xiaodai 🐾🐾🐾</p>
		</div>
	);
}

export default FinalResult;
