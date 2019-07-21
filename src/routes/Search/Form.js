import React, { useEffect, Fragment, PropTypes } from 'react';
import { connect } from 'react-redux';
import Weather from './Weather';
/*  */
const Form = ({ term, handleOnChange, handleOnSubmit, isSearching, data, error, ...props }) => {
    useEffect(() => {
        console.log(data, error);
    });
    return (
    	<Fragment>
            <form name="search-form">
                <label htmlFor="search">Search by a city
                    <input 
                        id="search"
                        type="text" 
                        name="search-term" 
                        value={term}  
                        onChange={handleOnChange}
                        placeholder="Search by city" 
                    />
                </label>
                <button type="button" onClick={handleOnSubmit}>{isSearching ? <div>Loading...</div> : <div>Find the weather</div>}</button>
            </form>
    	</Fragment>
    );
};

Form.displayName = 'Form';

Form.propTypes = {

};

const mapStateToProps = state => {

    console.log(state);
    return {
        isSearching: state.weather.isSearching,
        data: state.weather.data,
        error: state.weather.error,
    }
}

export default connect(mapStateToProps, null)(Form);
