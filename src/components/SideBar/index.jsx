import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';

SideBar.propTypes = {
  
};

function SideBar(props) {
  const navigate = useNavigate();

  return (
    
      <Menu 
      style={{
        width:'250px'
      }}
      onClick={({key}) => {
        navigate(key);
      }}
      
      defaultSelectedKeys={[window.location.pathname]}
      items={[      {label:"Home", key:"/" },
                    {label:"Shopping", key:"/shopping"},
                    {label:"User List", key:"/userlist"},
                    {label:"Profile", key:"/profile"},
                    {label:"Sigout", key:"/sigout"},
                    ]}> 

      </Menu>
      
   
  );
}

export default SideBar;