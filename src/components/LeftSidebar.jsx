import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  Chip,
  Collapse
} from '@mui/material';
import {
  Person as PersonIcon,
  AccountBox as AccountIcon,
  Business as CorporateIcon,
  Article as BlogIcon,
  Chat as SocialIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ByeWindLogo from '../assets/ByeWindLogo.svg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { PiNotebookBold } from "react-icons/pi";
import { PiChatsCircleDuotone } from "react-icons/pi";



const LeftSidebar = ({ open, onClose, drawerWidth = 220 }) => {
  const { mode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { text: 'Home', icon: <HomeOutlinedIcon />, path: '/' },
    { text: 'Order List', icon: <ListAltOutlinedIcon />, path: '/orderlist' },
    { text: 'Analytics', icon: <DonutSmallOutlinedIcon />, path: '/analytics' }
  ];

  const pagesData = [
    { 
      text: 'User Profile', 
      icon: <AccountBoxTwoToneIcon />, 
      path: '/user-profile',
      subItems: [
        { text: 'Overview', path: '/user-profile/overview' },
        { text: 'Projects', path: '/user-profile/projects' },
        { text: 'Campaigns', path: '/user-profile/campaigns' },
        { text: 'Documents', path: '/user-profile/documents' },
        { text: 'Followers', path: '/user-profile/followers' }
      ]
    },
    { text: 'Account', icon: <RecentActorsTwoToneIcon />, path: '/account', hasChevron: true },
    { text: 'Corporate', icon: <GroupsOutlinedIcon />, path: '/corporate', hasChevron: true },
    { text: 'Blog', icon: <PiNotebookBold  size={20}/>, path: '/blog', hasChevron: true },
    { text: 'Social', icon: <PiChatsCircleDuotone  size={20}/>, path: '/social', hasChevron: true }
  ];

  const [expandedItems, setExpandedItems] = useState(['User Profile']);

  const toggleExpanded = (itemText) => {
    setExpandedItems(prev => 
      prev.includes(itemText) 
        ? prev.filter(item => item !== itemText)
        : [...prev, itemText]
    );
  };

  const favoritesData = [
    { text: 'Overview', path: '/favorites/overview' },
    { text: 'Projects', path: '/favorites/projects' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const sidebarContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* User Profile Section */}
      <Box sx={{ py: 3, px: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img
                src={ByeWindLogo}
                alt="ByeWind Logo"
                style={{
                  width: 40,
                  height: 40
                }}
              />
              <Typography>
            ByeWind
          </Typography>
        </Box>
      </Box>

      {/* Navigation Categories */}
      <Box sx={{ p: 2, px: 1 }}>
        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Typography 
            sx={{ 
              color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
              fontWeight: 400,
              fontSize: '14px',
              cursor: 'not-allowed'
            }}
          >
            Favorites
          </Typography>
          <Typography 
            sx={{ 
              color: mode === 'light' ? '#1C1C1C33' : '#ffffff33',
              fontWeight: 400,
              fontSize: '14px',
              cursor: 'not-allowed'
            }}
          >
            Recently
          </Typography>
        </Box>

        {/* Favorites Dummy Data */}
        <Box sx={{ mb: 2 }}>
          {favoritesData.map((item, index) => (
            <Box 
              key={item.text}
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
              mb: 1,
                px: 2,
                cursor: 'not-allowed'
            }}
          >
              <Box 
              sx={{
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  backgroundColor: mode === 'light' ? '#1C1C1C33' : '#ffffff33',
                  mr: 2
                }} 
              />
              <Typography 
                variant="body2" 
                sx={{ 
                  color: mode === 'light' ? 'black' : 'white',
                  fontSize: '14px',
                  fontWeight: 'normal'
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Dashboards Section */}
        <Box sx={{ mt: 3}}> 
          <Typography 
            sx={{ 
              color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
              mb: 2,
              px: 2
            }}
          >
            Dashboards
          </Typography>

            <List component="div" disablePadding>
              {navigationItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton 
                    onClick={() => handleNavigation(item.path)}
                    sx={{ 
                      position: 'relative',
                      borderRadius: "8px",
                      mb: 0.5,
                      pl: 4,
                      backgroundColor: location.pathname === item.path 
                        ? (mode === 'light' ? '#f5f5f5' : '#FFFFFF1A')
                        : 'transparent',
                      '&::before': location.pathname === item.path
                        ? {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '25%',
                            height: '50%',
                            width: '4px',
                            backgroundColor: mode === 'light' ? 'black' : '#C6C7F8',
                            borderRadius: '8px',
                          }
                        : {},
                      '&:hover': {
                        backgroundColor: location.pathname === item.path 
                          ? (mode === 'light' ? '#f5f5f5' : '#FFFFFF1A')
                          : 'action.hover'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32, color: mode === 'light' ? 'black' : 'white'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                          color: mode === 'light' ? 'black' : 'white',
                          fontSize: '14px'
                        }
                      }}
                    />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Pages Section */}
        <Box sx={{ mt: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
              mb: 2,
              px: 2,
              fontSize: '14px',
              fontWeight: 400
            }}
          >
            Pages
          </Typography>

          <List component="div" disablePadding>
            {pagesData.map((item) => (
              <React.Fragment key={item.text}>
                <ListItem disablePadding>
                  <ListItemButton 
                    onClick={() => item.subItems ? toggleExpanded(item.text) : (item.text === 'User Profile' ? handleNavigation(item.path) : null)}
                    sx={{
                      position: 'relative',
                      borderRadius: "8px",
                      mb: 0.5,
                      pl: 4,
                      backgroundColor: location.pathname === item.path
                        ? (mode === 'light' ? '#f5f5f5' : '#FFFFFF1A')
                        : 'transparent',
                      cursor: item.text === 'User Profile' ? 'pointer' : 'not-allowed',
                      '&::before': location.pathname === item.path
                        ? {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '25%',
                            height: '50%',
                            width: '4px',
                            backgroundColor: mode === 'light' ? 'black' : '#C6C7F8',
                            borderRadius: '8px',
                          }
                        : {},
                      '&:hover': {
                        backgroundColor: item.text === 'User Profile' ? (location.pathname === item.path
                          ? (mode === 'light' ? '#f5f5f5' : '#FFFFFF1A')
                          : 'action.hover') : 'transparent'
                      }
                    }}
                  >
                    {(item.subItems || item.hasChevron) && (
                      item.subItems ? (
                        expandedItems.includes(item.text) ? 
                          <ExpandMoreIcon sx={{ fontSize: 16, color: mode === 'light' ? '#1C1C1C66' : '#ffffff66', mr: 1 }} /> :
                          <ChevronRightIcon sx={{ fontSize: 16, color: mode === 'light' ? '#1C1C1C66' : '#ffffff66', mr: 1 }} />
                      ) : (
                        <ChevronRightIcon sx={{ fontSize: 16, color: mode === 'light' ? '#1C1C1C66' : '#ffffff66', mr: 1 }} />
                      )
                    )}
                    <ListItemIcon sx={{ minWidth: 32, color: mode === 'light' ? 'black' : 'white'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                          color: mode === 'light' ? 'black' : 'white',
                          fontSize: '14px'
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                
                {item.subItems && (
                  <Collapse in={expandedItems.includes(item.text)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.text} disablePadding>
                          <ListItemButton 
                            onClick={() => handleNavigation(subItem.path)}
                            sx={{
                              pl: 8,
                              cursor: 'not-allowed',
                              '&:hover': {
                                backgroundColor: 'action.hover'
                              }
                            }}
                          >
                            <ListItemText 
                              primary={subItem.text}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  color: mode === 'light' ? 'black' : 'white',
                                  fontSize: '14px',
                                  fontWeight: 400
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderRightColor: 'divider',
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  );
};

export default LeftSidebar;
