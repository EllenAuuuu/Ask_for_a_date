import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DateStyle.css";

function DateSelection({ selectedDate, setSelectedDate }) {
	const [input, setInput] = useState(selectedDate || "");
	const navigate = useNavigate();

	const handleSubmit = () => {
		setSelectedDate(input);
		navigate("/result");
	};

	return (
		<div className="date-container">
			<h2>Select a date for our outing:</h2>
			<input
				type="date"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button className="submit-btn" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
}

export default DateSelection;
