import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Drawer, Grid, Skeleton } from '@mui/material';
import NewFeedSkeleton from './components/NewFeedSkeleton';

NewsFeed.propTypes = {
    
};

function NewsFeed(props) {
    return (
        <div>

        <NewFeedSkeleton></NewFeedSkeleton>
        <NewFeedSkeleton></NewFeedSkeleton>
      
            
         </div>
    );
}

export default NewsFeed;