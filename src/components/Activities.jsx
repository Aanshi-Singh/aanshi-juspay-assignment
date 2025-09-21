import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Activities = ({ sx = {} }) => {
  const { mode } = useTheme();
  
  const activities = [
    {
      id: 1,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      text: 'You have a bug that needs to be fixed',
      time: 'Just now'
    },
    {
      id: 2,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      text: 'Released a new version',
      time: '59 minutes ago'
    },
    {
      id: 3,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      text: 'Submitted a bug',
      time: '12 hours ago'
    },
    {
      id: 4,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      text: 'Modified A data in Page X',
      time: 'Today, 11:59 AM'
    },
    {
      id: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      text: 'Deleted a page in Project X',
      time: 'Feb 2, 2023'
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
        Activities
      </Typography>
      
      <Box sx={{ position: 'relative' }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: mode === 'dark' ? '#444' : '#e0e0e0',
            zIndex: 1
          }}
        />
        
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
          {activities.map((activity, index) => (
            <Box key={activity.id}>
              {/* Small connecting line between activities */}
              {index > 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 20,
                    top: -8,
                    width: 2,
                    height: 8,
                    backgroundColor: mode === 'dark' ? '#444' : '#e0e0e0',
                    zIndex: 1
                  }}
                />
              )}
              <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 1, // Reduced from 2 to 1
                p: 0.5, // 4px padding
                borderRadius: 1,
                position: 'relative',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? '#333' : '#f5f5f5'
                }
              }}
              >
              {/* Avatar */}
              <Box sx={{ position: 'relative', left: 4, zIndex: 2 }}>
                <Avatar
                  src={activity.avatar}
                  sx={{ 
                    width: 24, 
                    height: 24, 
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
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
                  {activity.text}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#1C1C1C66',
                    fontSize: '12px',
                    fontWeight: 400
                  }}
                >
                  {activity.time}
                </Typography>
              </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Activities;

