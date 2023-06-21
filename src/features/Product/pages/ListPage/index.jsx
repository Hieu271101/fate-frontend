import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import ProductSkeleton from '../../components/ProductSkeleton';
import FilterSkeleton from '../../components/FilterSkeleton';



ListProduct.propTypes = {
    
};

function ListProduct(props) {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <Box>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{width: '250px'}}>
                            <Paper elevation={0}>
                                <Grid item  xs={12} sm={6} md={6} lg={11}>
                                    Filter
                                </Grid>
                                {loading ? <FilterSkeleton length={6} /> : <ListProduct></ListProduct>  }
                            </Paper>
                        </Grid>
                        <Grid item sx={{flex:'1 1 0', width:'1250px'}} >
                            <Paper elevation={0}>
                                {loading ? <ProductSkeleton length={9} /> : <ListProduct></ListProduct>  }
                            </Paper>
                        </Grid>
                    </Grid>
                        
                </Container>
            </Box>
        </div>
    );
}

export default ListProduct;