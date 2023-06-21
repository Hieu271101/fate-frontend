import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, Paper, Skeleton } from '@mui/material';

FilterSkeleton.propTypes = {
    length: PropTypes.number
};

function FilterSkeleton({length}) {
    return (
        <div>
            <Grid item sx={{width: '200px'}}>
                <Paper elevation={0}>
                {Array.from(new Array(length)).map( (x, index) => (
                 <Grid item key={index} xs={12} sm={6} md={6} lg={11}>
                 <Box padding={1} >
                        
                     <Skeleton />
                    
                 </Box>
                </Grid>
            )
               
            )}
                  
                </Paper>
        </Grid>
        </div>
    );
}

export default FilterSkeleton;