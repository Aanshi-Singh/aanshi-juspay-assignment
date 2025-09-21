import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Description as DocumentIcon,
  Search as SearchIcon,
  WbSunny as SunIcon,
  History as HistoryIcon,
  Notifications as BellIcon,
  Assignment as PageIcon
} from '@mui/icons-material';
import { PiBellDuotone } from "react-icons/pi";
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import { PiClockCounterClockwiseDuotone } from "react-icons/pi";

import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { FiSearch, FiCommand } from "react-icons/fi";

import { useTheme } from '../contexts/ThemeContext.jsx';
import { useSidebar } from '../contexts/SidebarContext.jsx';
import { useLeftSidebar } from '../contexts/LeftSidebarContext.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import NoteIconSvg from '../assets/NoteIcon.svg';
import StarIconSvg from '../assets/StarIcon.svg';

const CustomNavBar = ({ leftSidebarWidth, rightSidebarWidth }) => {
  const { mode } = useTheme();
  const { rightSidebarOpen, toggleRightSidebar } = useSidebar();
  const { leftSidebarOpen, toggleLeftSidebar } = useLeftSidebar();
  const location = useLocation();

  // Function to get the current page name based on the route
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/orderlist':
        return 'Order List';
      case '/analytics':
        return 'Analytics';
      default:
        return 'Default';
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: mode === 'light' ? 'white' : '#1e1e1e',
        marginLeft: leftSidebarOpen ? `${leftSidebarWidth}px` : '0px',
        marginRight: rightSidebarOpen ? `${rightSidebarWidth}px` : '0px',
        width: `calc(100% - ${leftSidebarOpen ? `${leftSidebarWidth}px` : '0px'} - ${rightSidebarOpen ? `${rightSidebarWidth}px` : '0px'})`,
        transition: 'margin-right 0.3s ease',
        zIndex: 1200,
        color: mode === 'light' ? 'black' : 'white',
        borderBottom: '1px solid #1C1C1C1A'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        py: 0, 
        minHeight: '64px', 
        height: '64px',
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={leftSidebarOpen ? "Close left sidebar" : "Open left sidebar"}>
            <IconButton onClick={toggleLeftSidebar}>
              <img
                src={NoteIconSvg}
                alt="Note"
                style={{
                  width: 22,
                  height: 22,
                  filter: mode === 'dark' ? 'invert(1) brightness(1.2)' : 'none'
                }}
              />
            </IconButton>
          </Tooltip>

          <IconButton>
            <img
              src={StarIconSvg}
              alt="Star"
              style={{
                width: 20,
                height: 20,
                filter: mode === 'dark' ? 'invert(1) brightness(1.2)' : 'none'
              }}
            />
          </IconButton>

              <Typography variant="body1" sx={{ fontWeight: 'medium', fontSize: '14px', display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ color: mode === 'light' ? '#1C1C1C66' : '#ffffff66' }}>Dashboard</span>
                <span style={{ color: mode === 'light' ? '#1C1C1C66' : '#ffffff66' }}>/</span>
                <span style={{ color: mode === 'light' ? 'black' : 'white' }}>{getCurrentPageName()}</span>
              </Typography>
        </Box>


        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Search Bar */}
          <TextField
            placeholder="Search"
            size="small"
            disabled
            InputProps={{
              startAdornment: (
                    <InputAdornment position="start">
                      <FiSearch sx={{ fontSize: 20, color: mode === 'light' ? '#1C1C1C33' : '#ffffff33' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FiCommand sx={{ fontSize: 16, opacity: '20%', color: mode === 'light' ? '#1C1C1C50' : '#ffffff50' }} />
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: mode === 'light' ? '#1C1C1C33' : 'white' }}>/</Typography>
                      </Box>
                    </InputAdornment>
                  ),
            }}
                sx={{
                  minWidth: 80,
                  maxWidth: 200,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: mode === 'light' ? '#f5f5f5' : '#FFFFFF1A',
                    borderRadius: '8px',
                    color: mode === 'light' ? 'black' : 'white',
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none',
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: mode === 'light' ? '#1C1C1C33' : '#ffffff33',
                    opacity: 1,
                    fontSize: '14px',
                  },
                }}
          />

          <ThemeToggle />

          <Tooltip title="Refresh page">
            <IconButton 
              onClick={() => window.location.reload()}
              sx={{
                color: mode === 'light' ? 'black' : 'white',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)'
                }
              }}
            >
              <PiClockCounterClockwiseDuotone sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>

              <IconButton sx={{
                color: mode === 'light' ? 'black' : 'white',
                cursor: 'not-allowed'
              }}>
                <PiBellDuotone sx={{ fontSize: 20 }} />
              </IconButton>

          <Tooltip title={rightSidebarOpen ? "Close Right sidebar" : "Open Right Sidebar"}>
            <IconButton onClick={toggleRightSidebar}>
              <img
                src={NoteIconSvg}
                alt="Note"
                style={{
                  width: 22,
                  height: 22,
                  filter: mode === 'dark' ? 'invert(1) brightness(1.2)' : 'none'
                }}
              />
            </IconButton>
          </Tooltip>


        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavBar;
