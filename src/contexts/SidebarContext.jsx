import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setRightSidebarOpen(prev => !prev);
  };

  const openRightSidebar = () => {
    setRightSidebarOpen(true);
  };

  const closeRightSidebar = () => {
    setRightSidebarOpen(false);
  };

  const value = {
    rightSidebarOpen,
    toggleRightSidebar,
    openRightSidebar,
    closeRightSidebar
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};
