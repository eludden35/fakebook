import React from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';

const App = () => (
	<>
		<Router>
			<Login path="/login" />
			<Register path="/register" />
			<Landing path="/" />
		</Router>
	</>
);

export default App;
