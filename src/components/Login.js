import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/FormStyle.css";

function Login({ setUserName }) {
	const [inputName, setInputName] = useState("");
	const navigate = useNavigate(); // To navigate to the next page

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputName.trim()) {
			setUserName(inputName); // Update the userName state in App
			navigate("/ask-Date"); // Navigate to the next page
		} else {
			alert("Please enter your name.");
		}
	};

	return (
		<div className="Form">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="userName">hi, buddy. enter your name:</label>
				</div>
				<div className="mb-3">
					<input
						type="text"
						id="userName"
						placeholder="Enter username"
						value={inputName}
						onChange={(e) => setInputName(e.target.value)}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Login;
