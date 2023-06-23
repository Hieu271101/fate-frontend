import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import Product from './Product';

ListProduct.propTypes = {
    data: PropTypes.number,
};

function ListProduct({data = []}) {
    return (
        <div>
            <Box>
                <Grid container>
                    {data.map( (product) => (
                        <Grid item key = {product.id} xs={12} sm={6} md={6} lg={4} >
                            <Product product={product} />
                        </Grid>
                    ) )}
                </Grid>

            </Box>
        </div>
    );
}

export default ListProduct;