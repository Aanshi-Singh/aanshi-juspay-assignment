import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const salesData = [
  { label: "Direct", value: 300.56, color: "#000000" },
  { label: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { label: "Sponsored", value: 154.02, color: "#95A4FC" },
  { label: "E-mail", value: 48.96, color: "#B1E3FF" }
];

const getSalesDataForTheme = (mode) => {
  if (mode === 'dark') {
    return [
      { label: "Direct", value: 300.56, color: "#C6C7F8" },
      { label: "Affiliate", value: 135.18, color: "#BAEDBD" },
      { label: "Sponsored", value: 154.02, color: "#95A4FC" },
      { label: "E-mail", value: 48.96, color: "#B1E3FF" }
    ];
  }
  return salesData;
};

export default function TotalSales() {
  const { mode } = useTheme();
  const themeSalesData = getSalesDataForTheme(mode);

  return (
    <Box sx={{
      bgcolor: mode === 'dark' ? '#1a1a1a' : '#F7F9FB',
      borderRadius: 2, // 16px
      p: 2, // 16px padding
      width: 240,
      border: mode === 'dark' ? '1px solid #333' : 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <Typography 
        sx={{ 
          fontWeight: 600, 
          fontSize: '14px',
          color: mode === 'dark' ? 'white' : 'black',
          mb: 2
        }}
      >
        Total Sales
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 2, position: 'relative' }}>
        <PieChart
          series={[
            {
              data: themeSalesData.map((item) => ({
                value: item.value,
                // label: item.label,
                color: item.color
              })),
              innerRadius: 40,
              outerRadius: 60,
              cornerRadius: 4,
              paddingAngle: 2,
            }
          ]}
          width={120}
          height={120}
         
          sx={{
            "& .MuiChartsAxis-root": {
              color: mode === 'dark' ? '#fff' : '#000'
            },
            "& .MuiChartsAxis-tickLabel": {
              color: mode === 'dark' ? '#fff' : '#000'
            }
          }}
        />
        
        {/* Center percentage badge */}
        <Box sx={{
          position: 'absolute',
          left: '35%',
          top: '80%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#4A4A4A',
          borderRadius: 1,
          px: 1,
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 40
        }}>
          <Typography sx={{ 
            color: 'white', 
            fontWeight: 600, 
            fontSize: '12px' 
          }}>
            38.6%
          </Typography>
        </Box>
      </Box>
      
      <Stack spacing={1} sx={{ width: '100%' }}>
        {themeSalesData.map((item, idx) => (
          <Box key={item.label} sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{
                width: 8,
                height: 8,
                bgcolor: item.color,
                borderRadius: "50%",
                mr: 1
              }} />
              <Typography sx={{
                fontWeight: 500,
                fontSize: '14px',
                color: mode === 'dark' ? '#fff' : '#000'
              }}>
                {item.label}
              </Typography>
            </Box>
            <Typography sx={{
              fontWeight: 500,
              fontSize: '14px',
              color: mode === 'dark' ? '#fff' : '#000'
            }}>
              ${item.value.toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
