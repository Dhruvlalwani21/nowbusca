import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact-Page";

const App = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/affilite" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
