import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListProduct from './pages/ListPage';
import DetailProduct from './pages/DetailProduct';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={ListProduct}></Route>
                <Route path='/:productId' element={DetailProduct}></Route>
            </Routes>
        </div>
    );
}

export default ProductFeature;