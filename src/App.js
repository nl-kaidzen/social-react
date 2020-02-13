import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App() {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<section className="app-router-container">
					<Route path='/profile' component={Profile}/>
					<Route path='/messges' component={Messages}/>
				</section>
			</div>
		</BrowserRouter>
	);
}

export default App;
