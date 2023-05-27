import React from 'react';
import Home from '../screens/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';
import Details from '../screens/details/Details';
import Header from '../common/header/Header';

const Controller = (props) => {
	const baseUrl = '/api/v1/';

	return (
		<div className="main-container">
			<Header />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home {...props} baseUrl={baseUrl} />}
				/>
				<Route
					path="/movie/:id"
					element={<Details {...props} baseUrl={baseUrl} />}
				/>
				<Route
					path="/bookshow/:id"
					element={<BookShow {...props} baseUrl={baseUrl} />}
				/>
				<Route
					path="/confirm/:id"
					element={<Confirmation {...props} baseUrl={baseUrl} />}
				/>
			</Routes>
		</div>
	);
};

export default Controller;
