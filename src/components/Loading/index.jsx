import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Spinner } from '@chakra-ui/react'
Loading.propTypes = {
    
};

function Loading(props) {
    return (
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    );
}

export default Loading;