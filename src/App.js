/* 
	!Documentation
	--------------



	This is the root component. It provides the store needed for the redux store to be accessible
	in the application.

	I set up routing in this application using React-Router-DOM. This root component uses
	the BrowserRouter component to allow the rendering of different route components. It has
	2 routes, Home and Search that routes to those 2 components. I imported those created
	components into this root component and they are mounted and used when the route matches
	the given URL.

	
*/

import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Home from './routes/Home';
import Search from './routes/Search';
import Header from './components/Header';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
  
const App = () => {
  return (
  	<Provider store={store}> 
	  	<div className="App">
	      <Header title='Weather App'></Header>
	      <HashRouter>
	        <Route path='/' exact component={Home} /> 
	        <Route path='/search' component={Search} /> 
	      </HashRouter>
	    </div>
  	</Provider>
  );  
}

export default App;
