import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SearchInput from './SearchInput';
export default function Header() {
  
  return (
  //   <div style={{
  //     height: 60,
  //     backgroundColor: 'lightskyblue',
  //     color: 'white',
  //     display: 'flex',
  //     justifyContent:'center',
  //     alignItems:'center',

  // }}>
  //     Header
  // </div>
  <div>
    <Box sx={{flexGrow:1}}>
      <AppBar position='static'>
        
        <Toolbar>
            <IconButton
              size="large"
                edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                   
                    }}
                >
                    LOGO
                </Typography>

                <SearchInput></SearchInput>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
          
      </AppBar>
    </Box>
  </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" sx={{zIndex: 1}}>
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
        
          // <Typography
          //           variant="h6"
          //           noWrap
          //           component="a"
          //           href="/"
          //           sx={{
          //           mr: 2,
          //           display: { xs: 'none', md: 'flex' },
          //           fontFamily: 'monospace',
          //           fontWeight: 700,
          //           letterSpacing: '.3rem',
          //           color: 'inherit',
          //           textDecoration: 'none',
          //           flexGrow: 1
          //           }}
          //       >
          //           LOGO
          //       </Typography>
                    
    //       <SearchInput></SearchInput>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}