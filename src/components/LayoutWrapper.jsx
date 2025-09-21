import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import LeftSidebar from './LeftSidebar.jsx';
import RightSidebar from './RightSidebar.jsx';
import { useSidebar } from '../contexts/SidebarContext.jsx';
import { useLeftSidebar } from '../contexts/LeftSidebarContext.jsx';

const LayoutWrapper = ({ children }) => {
  const { rightSidebarOpen } = useSidebar();
  const { leftSidebarOpen } = useLeftSidebar();
  
  const leftSidebarWidth = 220;
  const rightSidebarWidth = 220;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Sidebar - Controlled by context */}
      {leftSidebarOpen && (
        <LeftSidebar drawerWidth={leftSidebarWidth} />
      )}
      
      {/* Main Content Area */}
          <Box 
            sx={{ 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              marginLeft: leftSidebarOpen ? `${leftSidebarWidth}px` : '0px',
              marginRight: rightSidebarOpen ? `${rightSidebarWidth}px` : '0px',
              transition: 'margin-left 0.3s ease, margin-right 0.3s ease, width 0.3s ease',
              overflow: 'hidden',
              padding: 0,
              margin: 0,
              width: `calc(100% - ${leftSidebarOpen ? `${leftSidebarWidth}px` : '0px'} - ${rightSidebarOpen ? `${rightSidebarWidth}px` : '0px'})`,
              paddingTop: '64px' // Add padding for fixed navbar
            }}
          >
        {children}
      </Box>
      
      {/* Right Sidebar - Controlled by context */}
      {rightSidebarOpen && (
        <RightSidebar 
          open={rightSidebarOpen} 
          drawerWidth={rightSidebarWidth} 
        />
      )}
    </Box>
  );
};

export default LayoutWrapper;
