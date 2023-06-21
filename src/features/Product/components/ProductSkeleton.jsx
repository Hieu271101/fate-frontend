import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

ProductSkeleton.propTypes = {
    length: PropTypes.number,
};


function ProductSkeleton({length = 6}) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map( (x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6} lg={4} >
                        <Box padding={1}>
                            <Skeleton variant='rect' width="100%" height={200} />
                            <Skeleton />
                            <Skeleton width="60%"/>
                        </Box>
                    </Grid>
                ) )}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;