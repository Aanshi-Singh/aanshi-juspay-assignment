import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { PiBugBeetle } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { FiRadio } from "react-icons/fi";
import {
  Notifications as NotificationIcon,
  Subscriptions as SubscribeIcon
} from '@mui/icons-material';

const Notifications = ({ sx = {} }) => {
  const { mode } = useTheme();
  
  const notifications = [
    {
      id: 1,
      icon: <PiBugBeetle style={{ fontSize: 20, color: 'black' }} />,
      text: 'You have a bug that needs to be fixed',
      time: 'Just now'
    },
    {
      id: 2,
      icon: <GoPerson style={{ fontSize: 20, color: 'black' }} />,
      text: 'New user registered',
      time: '59 minutes ago'
    },
    {
      id: 3,
      icon: <PiBugBeetle style={{ fontSize: 20, color: 'black' }} />,
      text: 'You have a bug that needs to be fixed',
      time: '12 hours ago'
    },
    {
      id: 4,
      icon: <FiRadio style={{ fontSize: 20, color: 'black' }} />,
      text: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM'
    }
  ];

  return (
    <Box sx={{ ...sx }}>
      <Typography 
        sx={{ 
          fontWeight: '600', 
          fontSize: '14px',
          mb: 2,
          color: mode === 'dark' ? '#fff' : '#000'
        }}
      >
        Notifications
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 1, // Reduced from 2 to 1
        maxHeight: '30vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: mode === 'dark' ? '#444' : '#c1c1c1',
          borderRadius: '2px',
        },
      }}>
        {notifications.map((notification) => (
          <Box 
            key={notification.id}
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 1, // Reduced from 2 to 1
              p: 0.5, // 4px padding
              borderRadius: 1,
              '&:hover': {
                backgroundColor: mode === 'dark' ? '#333' : '#f5f5f5'
              }
            }}
          >
            <Box sx={{ 
              width: 24, 
              height: 24, 
              borderRadius: '8px', // 8px border radius
              padding: 0.5, // 4px padding
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: notification.id === 1 || notification.id === 3 ? '#E3F5FF' : '#E5ECF6'
            }}>
              {notification.icon}
            </Box>
            <Box sx={{ flex: 1, minWidth: 0, width: '80%' }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: mode === 'dark' ? '#fff' : '#000',
                  lineHeight: 1.4,
                  fontSize: '14px',
                  fontWeight: 400,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {notification.text}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#1C1C1C66',
                  fontSize: '12px',
                  fontWeight: 400
                }}
              >
                {notification.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Notifications;
