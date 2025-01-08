import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RestaurantStyle.css";

function RestaurantSelection({ topRestaurants, setTopRestaurants }) {
	const [selectedRestaurants, setSelectedRestaurants] = useState([]);
	const navigate = useNavigate();

	const restaurants = [
		"Otto",
		"Mr.Vain",
		"Bosco",
		"Pneuma",
		"Nonda",
		"Fatcow",
		"Fosh",
		"Agnes",
	];

	const handleRestaurantClick = (restaurant) => {
		if (selectedRestaurants.includes(restaurant)) {
			setSelectedRestaurants(
				selectedRestaurants.filter((item) => item !== restaurant)
			);
		} else if (selectedRestaurants.length < 3) {
			setSelectedRestaurants([...selectedRestaurants, restaurant]);
		}
	};

	const handleNext = () => {
		setTopRestaurants(selectedRestaurants);
		navigate("/date");
	};

	return (
		<div className="restaurant-container">
			<h2>Choose your top 3 restaurants:</h2>
			<div className="restaurant-options">
				{restaurants.map((restaurant) => (
					<button
						key={restaurant}
						className={`restaurant-btn ${
							selectedRestaurants.includes(restaurant) ? "selected" : ""
						}`}
						onClick={() => handleRestaurantClick(restaurant)}
					>
						{restaurant}
					</button>
				))}
			</div>
			<button
				className="next-btn"
				onClick={handleNext}
				disabled={selectedRestaurants.length !== 3}
			>
				Next
			</button>
		</div>
	);
}

export default RestaurantSelection;
