import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Fade,
  Slide
} from '@mui/material';
import { PiBellDuotone } from "react-icons/pi";
import { PiClockCounterClockwiseDuotone } from "react-icons/pi";
import { FiSearch, FiCommand } from "react-icons/fi";

import { useTheme } from '../contexts/ThemeContext.jsx';
import { useSidebar } from '../contexts/SidebarContext.jsx';
import { useLeftSidebar } from '../contexts/LeftSidebarContext.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import NoteIconSvg from '../assets/NoteIcon.svg';
import StarIconSvg from '../assets/StarIcon.svg';

/**
 * CustomNavBar Component
 * 
 * A responsive navigation bar with sidebar controls, search functionality, and theme toggle.
 * Features smooth animations and microinteractions for enhanced user experience.
 * 
 * @param {number} leftSidebarWidth - Width of the left sidebar in pixels
 * @param {number} rightSidebarWidth - Width of the right sidebar in pixels
 * 
 * @example
 * <CustomNavBar 
 *   leftSidebarWidth={220}
 *   rightSidebarWidth={250}
 * />
 */
const CustomNavBar = ({ leftSidebarWidth, rightSidebarWidth }) => {
  const { mode } = useTheme();
  const { rightSidebarOpen, toggleRightSidebar } = useSidebar();
  const { leftSidebarOpen, toggleLeftSidebar } = useLeftSidebar();
  const location = useLocation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Function to get the current page name based on the route
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Analytics';
      case '/order-list':
        return 'Order List';
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
        <Fade in={true} timeout={600}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={leftSidebarOpen ? "Close left sidebar" : "Open left sidebar"}>
              <IconButton 
                onClick={toggleLeftSidebar}
                sx={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
                  }
                }}
              >
                <img
                  src={NoteIconSvg}
                  alt="Note"
                  style={{
                    width: 22,
                    height: 22,
                    filter: mode === 'dark' ? 'invert(1) brightness(1.2)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </IconButton>
            </Tooltip>

            <IconButton
              sx={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'scale(1.1) rotate(15deg)',
                  backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
                }
              }}
            >
              <img
                src={StarIconSvg}
                alt="Star"
                style={{
                  width: 20,
                  height: 20,
                  filter: mode === 'dark' ? 'invert(1) brightness(1.2)' : 'none',
                  transition: 'transform 0.3s ease',
                }}
              />
            </IconButton>

              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 'medium', 
                  fontSize: '14px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ 
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  transition: 'color 0.3s ease',
                }}>Dashboard</span>
                <span style={{ 
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  transition: 'color 0.3s ease',
                }}>/</span>
                <span style={{ 
                  color: mode === 'light' ? 'black' : 'white',
                  transition: 'color 0.3s ease',
                  fontWeight: 600,
                }}>{getCurrentPageName()}</span>
              </Typography>
          </Box>
        </Fade>


        {/* Right Section */}
        <Slide direction="left" in={true} timeout={800}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Search Bar */}
            <TextField
              placeholder="Search"
              size="small"
              disabled
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              InputProps={{
                startAdornment: (
                      <InputAdornment position="start">
                        <FiSearch sx={{ 
                          fontSize: 20, 
                          color: mode === 'light' ? '#1C1C1C33' : '#ffffff33',
                          transition: 'color 0.3s ease',
                        }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <FiCommand sx={{ 
                            fontSize: 16, 
                            opacity: '20%', 
                            color: mode === 'light' ? '#1C1C1C50' : '#ffffff50',
                            transition: 'all 0.3s ease',
                          }} />
                          <Typography sx={{ 
                            fontSize: 18, 
                            fontWeight: 'bold', 
                            color: mode === 'light' ? '#1C1C1C33' : 'white',
                            transition: 'color 0.3s ease',
                          }}>/</Typography>
                        </Box>
                      </InputAdornment>
                    ),
              }}
                  sx={{
                    minWidth: 80,
                    maxWidth: 200,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isSearchFocused ? 'scale(1.02)' : 'scale(1)',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: mode === 'light' ? '#f5f5f5' : '#FFFFFF1A',
                      borderRadius: '8px',
                      color: mode === 'light' ? 'black' : 'white',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                        backgroundColor: mode === 'light' ? '#eeeeee' : '#FFFFFF2A',
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                        backgroundColor: mode === 'light' ? '#e0e0e0' : '#FFFFFF3A',
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
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
                  }
                }}
              >
                <PiClockCounterClockwiseDuotone sx={{ 
                  fontSize: 20,
                }} />
              </IconButton>
            </Tooltip>

            <IconButton sx={{
              color: mode === 'light' ? 'black' : 'white',
              cursor: 'not-allowed',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
              }
            }}>
              <PiBellDuotone sx={{ 
                fontSize: 20,
                transition: 'transform 0.3s ease',
              }} />
            </IconButton>

            <Tooltip title={rightSidebarOpen ? "Close Right sidebar" : "Open Right Sidebar"}>
              <IconButton 
                onClick={toggleRightSidebar}
                sx={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
                  }
                }}
              >
                <img
                  src={NoteIconSvg}
                  alt="Note"
                  style={{
                    width: 22,
                    height: 22,
                    filter: mode === 'dark' ? 'invert(1) brightness(1.2)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </IconButton>
            </Tooltip>


          </Box>
        </Slide>
      </Toolbar>
    </AppBar>
  );
};

// PropTypes for type safety
CustomNavBar.propTypes = {
  leftSidebarWidth: PropTypes.number.isRequired,
  rightSidebarWidth: PropTypes.number.isRequired
};

export default CustomNavBar;
