/* 
	!Documentation
	--------------
	
	These are the actions for the weather reducer. These actions allow the Redux state 
	of beginning to search, searching, a successfull search response or a failure search
	response to be created or used, so you know what the state of the Redux store change
	is going to be.

	The actions as mentioned are:

	BEGIN_SEARCH - sets isSearching to true, to display to the app
	 a loading icon, text or anything to know that the app is searching.
	SEARCH
	SEARCH_SUCCESS - sets isSearching to false to display to the app
	 that that search is completed. Stores the successfull response in
	 the data property
	SEARCH_FAILURE - sets isSearching to false to display to the app
	 that the search is completed. Stores the error response in the
	 error property

	 axios is imported to perform the HTTP request.
*/


import React from 'react';
import axios from 'axios';

export const beginSearch = () => {
	return {
		type: 'BEGIN_SEARCH',
	}
}

export const search = (term) => {
	return async function(dispatch, getState) {
		const { status, data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${term}&appid=b95eb244ea12e25f51b8c6b56e22eec3`);

		if (status === 200) {
			dispatch(searchSuccess(data));
		} else {
			dispatch(searchFailure()); 
		}

		return dispatch({
			type: 'SEARCH'
		});
	};
}

<p></p>


export const searchSuccess = (data) => {
	return {
		type: `SEARCH_SUCCESS`,
		payload: {
			data
		}
	}
}

export const searchFailure = (error) => {
	return {
		type: `SEARCH_FAILURE`,
		payload: {
			error: 'An error occured fetching the weather'
		}
	}
}

