import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Drawer, Grid, Skeleton } from '@mui/material';

NewFeedSkeleton.propTypes = {
    
};

function NewFeedSkeleton(props) {
    return (
        <Box>
                <Grid container marginLeft='210px' marginBottom={4}>
                        <Card>
                        <Box padding={2} width={600} height={400}>
                                <Box display='flex' alignItems='center'>
                                    <Skeleton variant='circular' width="8%" height={40} sx={{ marginRight: '10px' }} />
                                    <Skeleton width={100} />
                                </Box>
                                <Skeleton width='100%'  />
                                <Skeleton variant='rect' width="100%" height={300} />
                                <Skeleton />
                                <Skeleton width="20%"/>
                            </Box>
                        </Card>
                      
                            
                      
                    
                </Grid>
            </Box>
    );
}

export default NewFeedSkeleton;