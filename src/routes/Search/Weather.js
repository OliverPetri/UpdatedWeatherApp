import React, { PropTypes } from 'react';



const Weather = ({ icon, desc, temp }) => {
    return (
        <div className="weather">
        	<img src={icon} />
        	<div className="temp-desc-container">
        		<p className="desc">{desc}</p>
        		<p className="temp">{temp}</p>
        	</div>
        </div>
    );
};

Weather.displayName = 'Weather';

Weather.propTypes = {
    // icon: PropTypes.string,
    // desc: PropTypes.string,
    // temp: PropTypes.number
};

export default Weather;
