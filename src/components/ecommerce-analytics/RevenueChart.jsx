import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const chartData = [
  { month: "Jan", current: 12, previous: 15 },
  { month: "Feb", current: 8, previous: 20 },
  { month: "Mar", current: 10, previous: 13 },
  { month: "Apr", current: 16, previous: 15 },
  { month: "May", current: 20, previous: 12 },
  { month: "Jun", current: 24, previous: 18 },
];

export default function RevenueChart() {
  const { mode } = useTheme();
  
  return (
    <Box sx={{ 
      background: mode === 'dark' ? '#1a1a1a' : '#F7F9FB', 
      p: 2, 
      borderRadius: 3,
      border: mode === 'dark' ? '1px solid #333' : 'none'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography 
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            mr: 2
          }}
        >
          Revenue
        </Typography>
        
        {/* Vertical Divider */}
        <Box sx={{ 
          width: '1px', 
          height: '20px', 
          backgroundColor: '#E0E0E0', 
          mr: 2 
        }} />
        
        {/* Legend */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%',
              backgroundColor: 'black' 
            }} />
            <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#666' }}>
              Current Week
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: 'black' }}>
              $58,211
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%',
              backgroundColor: '#97bbda' 
            }} />
            <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#666' }}>
              Previous Week
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: 'black' }}>
              $68,768
            </Typography>
          </Box>
        </Box>
      </Box>
      
        <LineChart
        series={[
          {
            data: chartData.map((d) => d.current),
            color: "#222",
            curve: "monotoneX",
            showMark: false,
            dashed: [5, 5], // for dashed line effect
            lineWidth: 3
          },
          {
            data: chartData.map((d) => d.previous),
            color: "#97bbda",
            curve: "monotoneX",
            showMark: false,
            lineWidth: 3
          },
        ]}
        xAxis={[{
          data: chartData.map((d) => d.month),
          scaleType: "band"
        }]}
        height={260}
        width={480}
        margin={{ left: -40, bottom: 30, right: 30, top: 30 }}
        legend={{
          display: false
        }}
        grid={{ vertical: false, horizontal: true }}
        sx={{
          "& .MuiChartsAxis-root": {
            color: mode === 'dark' ? '#fff' : '#000'
          },
          "& .MuiChartsAxis-tickLabel": {
            color: mode === 'dark' ? '#fff' : '#000'
          },
          "& .MuiChartsLegend-root": {
            color: mode === 'dark' ? '#fff' : '#000'
          }
        }}
      />
    </Box>
  );
}
