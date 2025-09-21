import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MetricsGrid from './ecommerce-analytics/MetricsGrid.jsx';
import ProjectionsVsActualsChart from './ecommerce-analytics/ProjectionsVsActualsChart.jsx';
import RevenueChart from './ecommerce-analytics/RevenueChart.jsx';
import RevenueByLocation from './ecommerce-analytics/RevenueByLocation.jsx';
import TopSellingProducts from './ecommerce-analytics/TopSellingProducts.jsx';
import TotalSales from './ecommerce-analytics/TotalSales.jsx';

const Analytics = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography  
        sx={{ 
          mb: 4, 
          fontWeight: 600,
          fontSize: '14px',
          fontStyle: 'normal',
          color: 'text.primary'
        }}
      >
        eCommerce
      </Typography>
      
      {/* Main Content Grid */}
      <Grid container spacing={3} alignItems="flex-start">
        {/* Left Half - Metrics Grid */}
        <Grid item xs={12} md={6}>
          <MetricsGrid />
        </Grid>
        
        {/* Right Half - Chart */}
        <Grid item xs={12} md={6}>
          <ProjectionsVsActualsChart />
        </Grid>
      </Grid>
      
      {/* Second Row - Revenue Components */}
      <Grid container spacing={3} sx={{ mt: 3 }} alignItems="flex-start">
        {/* Left Half - Revenue Chart */}
        <Grid item xs={12} md={8}>
          <RevenueChart />
        </Grid>
        
        {/* Right Half - Revenue by Location */}
        <Grid item xs={12} md={4}>
          <RevenueByLocation />
        </Grid>
      </Grid>
      
      {/* Third Row - Final Components */}
      <Grid container spacing={3} sx={{ mt: 3 }} alignItems="flex-start">
        {/* Left Half - Top Selling Products */}
        <Grid item xs={12} md={8}>
          <TopSellingProducts />
        </Grid>
        
        {/* Right Half - Total Sales */}
        <Grid item xs={12} md={4}>
          <TotalSales />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
