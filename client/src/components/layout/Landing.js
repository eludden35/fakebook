import React from 'react';
import Navbar from './Navbar';
import { Link } from '@reach/router';

const Landing = () => {
	return (
		<>
			{/* <Navbar /> */}
			<section className="landing">
				<div className="dark-overlay">
					<div className="landing-inner">
						<h1 className="x-large">fakebook</h1>
						<p className="lead">
							Connect with friends and the world around you on
							fakebook.
						</p>
						<div className="buttons">
							<Link to="/register" className="btn btn-primary">
								Sign Up
							</Link>
							<Link to="/login" className="btn btn-light">
								Login
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Landing;
