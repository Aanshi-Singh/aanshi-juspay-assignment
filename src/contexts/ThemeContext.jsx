import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  // Update body background color when theme changes
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#fafafa' : '#121212';
    document.body.style.color = mode === 'light' ? '#212121' : '#ffffff';
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#1976d2' : '#90caf9',
          },
          secondary: {
            main: mode === 'light' ? '#dc004e' : '#f48fb1',
          },
          background: {
            default: mode === 'light' ? '#fafafa' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
          text: {
            primary: mode === 'light' ? '#212121' : '#ffffff',
            secondary: mode === 'light' ? '#757575' : '#b0b0b0',
          },
        },
        components: {
          MuiTableHead: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent',
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                '&.status-in-progress': {
                  backgroundColor: mode === 'light' ? '#f3e5f5' : '#4a148c',
                  color: mode === 'light' ? '#9c27b0' : '#e1bee7',
                },
                '&.status-complete': {
                  backgroundColor: mode === 'light' ? '#e8f5e8' : '#1b5e20',
                  color: mode === 'light' ? '#4caf50' : '#a5d6a7',
                },
                '&.status-pending': {
                  backgroundColor: mode === 'light' ? '#e3f2fd' : '#0d47a1',
                  color: mode === 'light' ? '#2196f3' : '#90caf9',
                },
                '&.status-approved': {
                  backgroundColor: mode === 'light' ? '#fff3e0' : '#e65100',
                  color: mode === 'light' ? '#ff9800' : '#ffb74d',
                },
                '&.status-rejected': {
                  backgroundColor: mode === 'light' ? '#f5f5f5' : '#424242',
                  color: mode === 'light' ? '#9e9e9e' : '#bdbdbd',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  const value = {
    mode,
    toggleColorMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};