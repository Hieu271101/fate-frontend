import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const navigate  = useNavigate();
    const handleClick = () => {
        navigate(`/shop/${product.id}`);
    }

    return (
       <div>
        <Box padding={1} onClick = {handleClick}>
            <Box padding={1} minHeight='215px'>
                <Skeleton variant='rect' width="100%" height={200} />

            </Box>
            <Typography variant='body2' >{product.name}</Typography>
            <Typography variant='body2' >
                <Box component="span" fontSize='16px' fontWeight="bold">
                 {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                
            </Typography>
        </Box>
       </div>
    );
}

export default Product;