import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AskDateStyle.css";

function AskDate() {
	const [noButtonPosition, setNoButtonPosition] = useState({
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	});
	const [moveCount, setMoveCount] = useState(0); // Counter for the number of times the button moves
	const navigate = useNavigate();

	// Function to randomly move the "No" button
	const moveNoButton = () => {
		const randomTop = Math.random() * 80; // Generate a random position (percentage)
		const randomLeft = Math.random() * 80;

		setNoButtonPosition({
			top: `${randomTop}%`,
			left: `${randomLeft}%`,
			transform: "translate(-50%, -50%)", // Keeps the button centered at its position
		});

		// Increment the move counter
		setMoveCount((prevCount) => {
			const newCount = prevCount + 1;
			if (newCount >= 10) {
				alert("Behave!😊"); // Show alert if the button has moved 10 or more times
			}
			return newCount;
		});
	};

	// Function to handle "Yes" click
	const handleYesClick = () => {
		navigate("/restaurants"); // Redirect to the RestaurantSelection page
	};

	return (
		<div className="ask-him-container">
			<h2 className="question">Would you like to go on a date with me?</h2>
			<div className="button-container">
				<button className="yes-btn" onClick={handleYesClick}>
					Yes
				</button>
				<button
					className="no-btn"
					style={{
						position: "absolute",
						top: noButtonPosition.top,
						left: noButtonPosition.left,
						transform: noButtonPosition.transform,
					}}
					onMouseEnter={moveNoButton} // Moves when the mouse gets close
					onTouchStart={moveNoButton} // Moves for mobile devices
				>
					No
				</button>
			</div>
		</div>
	);
}

export default AskDate;
