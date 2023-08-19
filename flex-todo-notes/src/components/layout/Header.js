import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>Your Notes</h1>
			</header>
			<div className={classes['main-image']}></div>
		</React.Fragment>
	);
};

export default Header;
