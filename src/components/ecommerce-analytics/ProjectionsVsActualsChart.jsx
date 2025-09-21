import * as React from "react";
import { BarChart } from "@mui/x-charts";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const chartData = [
  { month: "Jan", projection: 22, actual: 18 },
  { month: "Feb", projection: 25, actual: 20 },
  { month: "Mar", projection: 20, actual: 17 },
  { month: "Apr", projection: 28, actual: 22 },
  { month: "May", projection: 16, actual: 13 },
  { month: "Jun", projection: 24, actual: 20 }
];

export default function ProjectionsVsActualsChart() {
  const { mode } = useTheme();

  return (
    <Box
      sx={{
        background: mode === 'dark' ? '#1a1a1a' : '#F7F9FB',
        borderRadius: 2, // 16px (theme.spacing(2) usually = 16px)
        p: 3,
        border: mode === 'dark' ? '1px solid #333' : 'none',
      }}
    >
      <Typography 
        sx={{
          fontSize: '12px',
          fontWeight: 600,
          color: mode === 'dark' ? '#fff' : 'black'
        }}
      >
        Projections vs Actuals
      </Typography>
      <BarChart
        height={180} // set height here
        width={300}
        margin={{
          left: -20, // negative margin to push chart to the left edge
          right: 0,
          top: 0,
          bottom: 0
        }}
        series={[
          {
            data: chartData.map(d => d.actual),
            label: "Actuals",
            stack: "total",
            color: "#b1cce0",
            borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
          },
          {
            data: chartData.map(d => Math.max(0, d.projection - d.actual)),
            label: "Projections",
            stack: "total",
            color: "#e6eef4",
            borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
          }
        ]}
        xAxis={[
          {
            data: chartData.map(d => d.month),
            scaleType: "band",
            categoryGapRatio: 0.5,
            barGapRatio: -0.2,
            tickLabelStyle: {
              fill: mode === 'dark' ? '#fff' : "#1C1C1C66",
              fontSize: "12px"
            }
          }
        ]}
        yAxis={[
          {
            tickLabelStyle: {
              fill: mode === 'dark' ? '#fff' : "#1C1C1C66",
              fontSize: "12px",
            },
            disableLine: true,
            disableTicks: true,
            minDistance: 20,
          }
        ]}
        sx={{
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            stroke: mode === 'dark' ? '#555' : "#C4C4C4",
            strokeWidth: 1,
          },
          "& .MuiChartsLegend-root": { display: "none" },
          background: mode === 'dark' ? '#1a1a1a' : "#F7F9FB",
          borderRadius: "16px",
        }}
        slotProps={{
          bar: {
            borderRadius: 4,
            barSize: 20, // bar width set here
          }
        }}
      />
    </Box>
  );
}
