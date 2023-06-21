import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div style={{
            height: 60,
            backgroundColor: 'lightblue',
            color: 'white',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',

        }}>
            Footer
        </div>
    );
}

export default Footer;