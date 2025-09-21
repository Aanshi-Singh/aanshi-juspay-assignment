import React from 'react';
import { IconButton, Tooltip, Fade } from '@mui/material';
import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";

import { useTheme } from '../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const { mode, toggleColorMode } = useTheme();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={toggleColorMode}
        sx={{
          color: mode === 'light' ? 'black' : 'white',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)',
            transform: 'scale(1.1) rotate(180deg)',
          }
        }}
      >
        <Fade in={true} timeout={300}>
          {mode === 'light' ? (
            <PiSunDuotone style={{ fontSize: 20, transition: 'transform 0.3s ease' }} />
          ) : (
            <PiSunDuotone style={{ fontSize: 20, transition: 'transform 0.3s ease' }} />
          )}
        </Fade>
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
