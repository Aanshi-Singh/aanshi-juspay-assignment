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
  const getTrendIcon = () => {
    if (trend === 'down') {
      return <TrendingDownIcon sx={{ fontSize: 16, color: 'black' }} />;
    }
    return <TrendingUpOutlinedIcon sx={{ fontSize: 16, color: 'black' }} />;
  };

  return (
    <Card
      sx={{
        backgroundColor: backgroundColor,
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
              color: 'black',
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
                color: 'black',
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
                  color: 'black'
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
