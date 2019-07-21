import React, { PropTypes } from 'react';

const Header = ({ title }) => {
    return (
    	<header>{title}</header> 
    );
};

Header.displayName = 'Header';

// Header.propTypes = {
//     title: PropTypes.string,
// };

export default Header;
