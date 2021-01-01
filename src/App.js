import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import './App.css';

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</Router>
	);
};
