import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { PiSunDuotone } from "react-icons/pi";

import { useTheme } from '../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const { mode, toggleColorMode } = useTheme();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={toggleColorMode}
        sx={{
          color: mode === 'light' ? 'black' : 'white',
          // '&:hover': {
          //   backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
          // }
        }}
      >
        {mode === 'light' ? <PiSunDuotone /> : <PiSunDuotone />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
