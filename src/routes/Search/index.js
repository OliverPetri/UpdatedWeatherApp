/* 
	!Documentation
	--------------



	This is the Search route component. It's a class component instead of a functional component.
	I decided to use a class component because this component is the container component
	for a few other components and it needs to manage state within in and pass it to child
	components as props.

	It provides a view of 2 other components, the Form component to begin searching for the 
	weather in a given searched for city, and a Weather component, on successful response
	from the server.

	The Form component consists of a text input and a button. The input stores the typed
	in value, by saving the value of what is typed in through the onChange event, where 
	every change within the input, calls setState to store that new value within the
	Search components state. That new state.text value is then used to search.
	The button is of type button so it does not automatically submit the form its within. 
	On a click event, the buttonbegins a Redux action of beginSearch(), and then following 
	it with search(). It searches with the term available in this.state.term; 

	This Search component can access the searches response whether it be succesful or an error 
	by connecting to the Redux store, and accessing the data property, or the error property,
	using the connect() method available through react-redux. It connects the component,
	to the Redux store state, provided access to the actions required to alter the Redux store
	state.	
*/

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import Form from './Form';
import Weather from './Weather';
import axios from 'axios';
import { connect } from 'react-redux';
import { beginSearch, search, searchSuccess, searchFailure } from '../../actions/weather';
import * as styles from './styles.scss';

export class Search extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			term: ''
		}
	}


	handleOnChange = event => {
		event.persist();
		this.setState(prevState => {
			return {
				term: event.target.value
			}
		});
	}

	handleOnSubmit = () => {
		this.props.beginSearch();
		this.props.search(this.state.term);
	}

	render() {
		return (
	        <div id="search" className="view" styles={styles}>
	        	<h1>Search</h1>
	        	<Form 
	        		term={this.state.term} 
	        		handleOnChange={this.handleOnChange} 
	        		handleOnSubmit={this.handleOnSubmit} 
	        	/>
	        	{ this.props.data && (
                <div className="todays-weather">
                    <h1>Todays Weather</h1>
                    <Weather icon={`http:\/\/openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`} temp={this.props.data.main.temp} desc={this.props.data.weather[0].main} />
                </div>)
            }`

	        </div>
	    );
	}
};

Search.displayName = 'Search';

Search.propTypes = {
};

const mapStateToProps = state => {
	return {
		...state,
		data: state.weather.data
	}
};


const mapDispatchToProps = dispatch => {
	return {
		beginSearch: () => dispatch(beginSearch()),
		search: term => dispatch(search(term)),
		searchSuccess: () => dispatch(searchSuccess()),
		searchFailure: () => dispatch(searchFailure()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
