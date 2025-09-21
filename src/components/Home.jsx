import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Home = () => {
  const { mode } = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ 
        textAlign: 'center',
        py: 8,
        px: 4,
        backgroundColor: mode === 'light' ? '#f8f9fa' : '#1a1a1a',
        borderRadius: 2,
        border: `1px solid ${mode === 'light' ? '#e0e0e0' : '#333'}`,
        boxShadow: mode === 'light' ? '0 2px 8px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.3)'
      }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 700,
            mb: 3,
            color: mode === 'light' ? '#1C1C1C' : '#FFFFFF',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Welcome to E-commerce Analytics Dashboard
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: mode === 'light' ? '#1C1C1C66' : '#FFFFFF66',
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          A comprehensive dashboard for managing orders, tracking analytics, and monitoring business performance.
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mt: 6
        }}>
          <Box sx={{ 
            p: 3,
            backgroundColor: mode === 'light' ? 'white' : '#2a2a2a',
            borderRadius: 2,
            border: `1px solid ${mode === 'light' ? '#e0e0e0' : '#444'}`,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === 'light' ? '0 8px 25px rgba(0,0,0,0.15)' : '0 8px 25px rgba(0,0,0,0.4)'
            }
          }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: mode === 'light' ? '#1C1C1C' : '#FFFFFF' }}>
              Order Management
            </Typography>
            <Typography variant="body2" sx={{ color: mode === 'light' ? '#1C1C1C66' : '#FFFFFF66' }}>
              View, filter, and manage all your orders with advanced search and sorting capabilities.
            </Typography>
          </Box>

          <Box sx={{ 
            p: 3,
            backgroundColor: mode === 'light' ? 'white' : '#2a2a2a',
            borderRadius: 2,
            border: `1px solid ${mode === 'light' ? '#e0e0e0' : '#444'}`,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === 'light' ? '0 8px 25px rgba(0,0,0,0.15)' : '0 8px 25px rgba(0,0,0,0.4)'
            }
          }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: mode === 'light' ? '#1C1C1C' : '#FFFFFF' }}>
              Analytics Dashboard
            </Typography>
            <Typography variant="body2" sx={{ color: mode === 'light' ? '#1C1C1C66' : '#FFFFFF66' }}>
              Track sales performance, revenue trends, and key business metrics with interactive charts.
            </Typography>
          </Box>

          <Box sx={{ 
            p: 3,
            backgroundColor: mode === 'light' ? 'white' : '#2a2a2a',
            borderRadius: 2,
            border: `1px solid ${mode === 'light' ? '#e0e0e0' : '#444'}`,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === 'light' ? '0 8px 25px rgba(0,0,0,0.15)' : '0 8px 25px rgba(0,0,0,0.4)'
            }
          }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: mode === 'light' ? '#1C1C1C' : '#FFFFFF' }}>
              Real-time Updates
            </Typography>
            <Typography variant="body2" sx={{ color: mode === 'light' ? '#1C1C1C66' : '#FFFFFF66' }}>
              Stay updated with notifications, activities, and contact management in real-time.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
