import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress, Fade, Slide } from '@mui/material';
import { CustomThemeProvider, useTheme } from './contexts/ThemeContext.jsx';
import { SidebarProvider } from './contexts/SidebarContext.jsx';
import { LeftSidebarProvider } from './contexts/LeftSidebarContext.jsx';
import CustomNavBar from './components/CustomNavBar.jsx';
import LayoutWrapper from './components/LayoutWrapper.jsx';

// Lazy load components
const OrderList = React.lazy(() => import('./components/OrderList.jsx'));
const Analytics = React.lazy(() => import('./components/Analytics.jsx'));

const AppContent = () => {
  const { mode } = useTheme();
  const leftSidebarWidth = 250;
  const rightSidebarWidth = 250;

  return (
    <Box sx={{ 
      flexGrow: 1, 
      minHeight: '100vh',
      backgroundColor: mode === 'light' ? 'white' : 'background.default',
      color: 'text.primary'
    }}>
      <CustomNavBar 
        leftSidebarWidth={leftSidebarWidth}
        rightSidebarWidth={rightSidebarWidth}
      />
      
      <LayoutWrapper>
        <Fade in={true} timeout={600}>
          <Box sx={{ mt: 3, flex: 1, overflow: 'auto', width: '100%' }}>
            <Suspense fallback={
              <Slide direction="up" in={true} timeout={800}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: '200px',
                  transition: 'all 0.3s ease',
                }}>
                  <CircularProgress 
                    sx={{
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0.5 },
                        '100%': { opacity: 1 },
                      }
                    }}
                  />
                </Box>
              </Slide>
            }>
              <Routes>
                <Route path="/" element={<Analytics />} />
                <Route path="/order-list" element={<OrderList />} />
              </Routes>
            </Suspense>
          </Box>
        </Fade>
      </LayoutWrapper>
    </Box>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <LeftSidebarProvider>
        <SidebarProvider>
          <Router basename="/aanshi-juspay-assignment">
            <AppContent />
          </Router>
        </SidebarProvider>
      </LeftSidebarProvider>
    </CustomThemeProvider>
  );
}

export default App;
