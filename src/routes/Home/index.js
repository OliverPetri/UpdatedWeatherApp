/* 
	!Documentation
	--------------



	This is the Home route component. It's a functional component instead of a class component.
	I decided to use a functional component because this component is very simple and
	only needs to mostly render HTML and not manage it's own state or using any common
	lifecycle hooks.

	It provides the first route the application shows when it starts.
	A title is set welcoming the user to the application and a button is created to direct the 
	user to the Search route, to begin starting the application. 

	The styling consists of CSS3 styles including CSS3 border-radius to provided nice rounded
	corners, and the title and button are centered using CSS3 flexbox.

	I set up routing in this application using React-Router-DOM. This root component uses
	the BrowserRouter component to allow the rendering of different route components. It has
	2 routes, Home and Search that routes to those 2 components. I imported those created
	components into this root component and they are mounted and used when the route matches
	the given URL.

*/

import React, { PropTypes } from 'react';
import * as styles from './styles.scss';
import axios from 'axios';

const Home = (props) => {

	function sendRequest() {
		axios('http://localhost:8000/getUser')
		.then(response => console.log(response));
	}

	function routeTo(route) {
		props.history.push(`/${route}`)
	}
    return (
      <div id="home" className="view" styles={styles}>
      	<h1>Welcome to my <br /> Weather App</h1>
      	<button type="button" onClick={() => sendRequest()}>Send HTTP Request</button>
      	<button onClick={() => routeTo('search')}>Begin Searching</button>
      </div>  
    );
};

Home.displayName = 'Home';

export default Home;
