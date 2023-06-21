import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListProduct from '../../features/Product/pages/ListPage';

MainContent.propTypes = {
    
};

function MainContent(props) {
    return (
        <div style={{marginTop:"50px"}}>
             <Routes>
                <Route path='/'  element={<>Home</>}> </Route>
                <Route path='/shopping' element={<ListProduct/>}> </Route>
                <Route path='/userList' element={<>User List</>}> </Route>
                <Route path='/profile' element={<>Profile</>}> </Route>
                <Route path='/sigout' element={<>Sigout</>}> </Route>
                
            </Routes>
        </div>
    );
}

export default MainContent;