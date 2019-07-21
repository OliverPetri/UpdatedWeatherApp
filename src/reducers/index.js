/* 
	!Documentation
	--------------
	
	This combines all or any reducers available to combine all the state for the Redux store.
	It's imported into the Provider component when creating the store for Redux.
*/


import { combineReducers } from 'redux';
import {weather} from './weather';

export default combineReducers({ weather  })