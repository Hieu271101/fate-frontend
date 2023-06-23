import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TelegramIcon from '@mui/icons-material/Telegram';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
SideBar.propTypes = {
  
};

function SideBar(props) {
  const navigate = useNavigate();

  return (
    <Menu
      style={{
        width: '250px',
      }}
      onClick={({ key }) => {
        navigate(key);
      }}
      defaultSelectedKeys={[window.location.pathname]}
    >
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }} // Add margin
        key="/"
        icon={<HomeIcon style={{ fontSize: '24px' }} />}
      >
        Trang chủ
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/shopping"
        icon={<ShoppingCartIcon style={{ fontSize: '24px' }} />}
      >
        Shopping
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/userlist"
        icon={<NotificationsIcon style={{ fontSize: '24px' }} />}
      >
        Thông báo
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/message"
        icon={<TelegramIcon style={{ fontSize: '24px' }} />}
      >
        Tin nhắn
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/cart"
        icon={<ShoppingCartIcon style={{ fontSize: '24px' }} />}
      >
        Giỏ hàng
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/switch"
        icon={<WifiProtectedSetupIcon style={{ fontSize: '24px' }} />}
      >
        Đổi chế độ
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/setting"
        icon={<SettingsIcon style={{ fontSize: '24px' }} />}
      >
        Cài đặt
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: '18px', margin: '10px 0' }}
        key="/more"
        icon={<MenuIcon style={{ fontSize: '24px' }} />}
      >
        Xem thêm
      </Menu.Item>
    </Menu>
  );
}

export default SideBar;