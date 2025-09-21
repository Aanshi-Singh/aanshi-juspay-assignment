import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import {
  TrendingUpOutlined as TrendingUpOutlinedIcon,
  TrendingDown as TrendingDownIcon
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext.jsx';

const MetricCard = ({
  title,
  value,
  change,
  trend = 'up', // 'up', 'down'
  backgroundColor = 'transparent',
  sx = {}
}) => {
  const { mode } = useTheme();
  
  // Check if this is Orders (id: 2) or Revenue (id: 3) card for dark theme
  const isSecondOrThirdCard = title === 'Orders' || title === 'Revenue';
  const getTrendIcon = () => {
    const iconColor = mode === 'dark' && isSecondOrThirdCard ? 'white' : 'black';
    if (trend === 'down') {
      return <TrendingDownIcon sx={{ fontSize: 16, color: iconColor }} />;
    }
    return <TrendingUpOutlinedIcon sx={{ fontSize: 16, color: iconColor }} />;
  };

  return (
    <Card
      sx={{
        backgroundColor: mode === 'dark' && isSecondOrThirdCard ? '#FFFFFF0D' : backgroundColor,
        borderRadius: 2, // 16px
        boxShadow: 'none',
        border: 'none',
        p: 1.5,
        ...sx
      }}
    >
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Box sx={{ 
          p: 1.5, // 12px padding
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          {/* Title */}
          <Typography 
            sx={{ 
              color: mode === 'dark' && isSecondOrThirdCard ? 'white' : 'black',
              fontWeight: 600,
              fontSize: '14px',
              fontStyle: 'normal'
            }}
          >
            {title}
          </Typography>
          
          {/* Value and Change Row */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            mt: 1
          }}>
            <Typography 
              sx={{ 
                fontWeight: 600,
                fontSize: '24px',
                fontStyle: 'normal',
                color: mode === 'dark' && isSecondOrThirdCard ? 'white' : 'black',
                mr: 1,
              }}
            >
              {value}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography 
                sx={{ 
                  fontSize: '12px',
                  fontWeight: 400,
                  color: mode === 'dark' && isSecondOrThirdCard ? 'white' : 'black'
                }}
              >
                {change}
              </Typography>
              {getTrendIcon()}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
