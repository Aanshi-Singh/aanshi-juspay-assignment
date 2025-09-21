import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  MoreVert as MoreVertIcon,
  OnlinePrediction as OnlineIcon,
  Circle as CircleIcon
} from '@mui/icons-material';
import Notifications from './Notifications';
import Activities from './Activities';

const RightSidebar = ({ open, onClose, drawerWidth = 220 }) => {
  const contacts = [
    {
      id: 1,
      name: 'Natali Craig',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Drew Cano',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Orlando Diggs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Andi Lane',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Kate Morrison',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#4caf50';
      case 'away': return '#ff9800';
      case 'offline': return '#9e9e9e';
      default: return '#9e9e9e';
    }
  };

  const sidebarContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Notifications Section - 30% */}
      <Box sx={{ 
        height: '30vh', 
        padding: "20px", 
        borderBottom: '1px solid', 
        borderColor: 'divider',
        overflow: 'hidden'
      }}>
        <Notifications />
      </Box>

      {/* Activities Section - 30% */}
      <Box sx={{ 
        height: '30vh', 
        padding: "20px", 
        borderBottom: '1px solid', 
        borderColor: 'divider',
        overflow: 'hidden',
        pb: 10,
      }}>
        <Activities />
      </Box>

      {/* Contacts Section - 30% */}
      <Box sx={{ 
        height: '30vh', 
        padding: "20px", 
        overflow: 'hidden'
      }}>
        <Typography 
          sx={{ 
            fontWeight: '600', 
            fontSize: '14px',
            mb: 2,
            color: 'text.primary'
          }}
        >
          Contacts
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 1.5,
          height: 'calc(100% - 40px)', // Subtract title height
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c1c1c1',
            borderRadius: '2px',
          },
        }}>
          {contacts.map((contact) => (
            <Box 
              key={contact.id}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                py: 0.5, // 4px vertical padding
                borderRadius: 1,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'action.hover'
                }
              }}
            >
              <Avatar 
                src={contact.avatar}
                sx={{ 
                  width: 24, 
                  height: 24
                }}
              />
              <Typography 
                sx={{ 
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'text.primary'
                }}
              >
                {contact.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
          borderLeft: '1px solid',
          borderLeftColor: 'divider',
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          zIndex: 1300
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  );
};

export default RightSidebar;
