import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AskDate from "./components/AskDate";
import RestaurantSelection from "./components/RestaurantSelection";
import DateSelection from "./components/DateSelection";
import FinalResult from "./components/FinalResult";

function App() {
	const [userName, setUserName] = useState("");
	const [topRestaurants, setTopRestaurants] = useState([]);
	const [selectedDate, setSelectedDate] = useState("");

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login setUserName={setUserName} />} />
				<Route path="/ask-Date" element={<AskDate />} />
				<Route
					path="/restaurants"
					element={
						<RestaurantSelection
							topRestaurants={topRestaurants}
							setTopRestaurants={setTopRestaurants}
						/>
					}
				/>
				<Route
					path="/date"
					element={
						<DateSelection
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
						/>
					}
				/>
				<Route
					path="/result"
					element={
						<FinalResult
							userName={userName}
							topRestaurants={topRestaurants}
							selectedDate={selectedDate}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
