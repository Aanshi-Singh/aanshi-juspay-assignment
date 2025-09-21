import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Container, CircularProgress } from '@mui/material';
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
  const leftSidebarWidth = 220;
  const rightSidebarWidth = 220;

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
        <Box sx={{ mt: 3, flex: 1, overflow: 'auto', width: '100%' }}>
          <Suspense fallback={
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '200px' 
            }}>
              <CircularProgress />
            </Box>
          }>
            <Routes>
              <Route path="/" element={<OrderList />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Suspense>
        </Box>
      </LayoutWrapper>
    </Box>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <LeftSidebarProvider>
        <SidebarProvider>
          <Router>
            <AppContent />
          </Router>
        </SidebarProvider>
      </LeftSidebarProvider>
    </CustomThemeProvider>
  );
}

export default App;
