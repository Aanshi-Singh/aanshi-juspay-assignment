import React from 'react';
import { Box } from '@mui/material';
import MetricCard from './MetricCard.jsx';
import metricsData from './metricsData.json';

const MetricsGrid = ({ sx = {} }) => {
  return (
    <Box sx={{ 
      width: '100%', 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2,
      ...sx 
    }}>
      {metricsData.metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          trend={metric.trend}
          backgroundColor={metric.backgroundColor}
        />
      ))}
    </Box>
  );
};

export default MetricsGrid;
