import React, { createContext, useContext, useState } from 'react';

const LeftSidebarContext = createContext();

export const useLeftSidebar = () => {
  const context = useContext(LeftSidebarContext);
  if (!context) {
    throw new Error('useLeftSidebar must be used within a LeftSidebarProvider');
  }
  return context;
};

export const LeftSidebarProvider = ({ children }) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true); // Default to open

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(prev => !prev);
  };

  const openLeftSidebar = () => {
    setLeftSidebarOpen(true);
  };

  const closeLeftSidebar = () => {
    setLeftSidebarOpen(false);
  };

  const value = {
    leftSidebarOpen,
    toggleLeftSidebar,
    openLeftSidebar,
    closeLeftSidebar
  };

  return (
    <LeftSidebarContext.Provider value={value}>
      {children}
    </LeftSidebarContext.Provider>
  );
};
