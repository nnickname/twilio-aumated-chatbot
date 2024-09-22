'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import IonIcon from '@reacticons/ionicons';
import LogoRevizora from '@/public/brand/logo_primary.png';
import { Badge, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import { useState } from 'react';
import { TopSideBarListHeader, TopSideBarListUser, TopSideBarProps } from '../models';
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));


const TopSideBar: React.FC<TopSideBarProps> = ({sideBarChildren}) =>  {
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Abrir menu"
            onClick={handleDrawerOpen}
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <IonIcon name="menu-outline"/>
          </IconButton>
          <img src={LogoRevizora.src} width='100px' />
          
          <Box sx={{ flexGrow: 1 }} />
            <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <IonIcon name='clipboard-outline'/>
              </Badge>
            </IconButton>
            
         
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img width='100px' src={LogoRevizora.src}/>
          <IconButton onClick={handleDrawerClose}>
            <IonIcon name="chevron-back-outline"/>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {TopSideBarListHeader.map((e, index) => (
            <ListItem key={e.name} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {TopSideBarListUser.map((e, index) => (
            <ListItem key={e.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        {sideBarChildren}
      </Main>
      
    </Box>
  );
}
export default TopSideBar;