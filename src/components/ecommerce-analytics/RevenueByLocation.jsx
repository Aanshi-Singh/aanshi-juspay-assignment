import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import worldmapImage from "../../assets/WorldMap.png";

// Data
const locations = [
  { city: "New York", value: 72, dot: { left: "30%", top: "32%" } },
  { city: "San Francisco", value: 39, dot: { left: "15%", top: "35%" } },
  { city: "Sydney", value: 25, dot: { left: "82%", top: "70%" } },
  { city: "Singapore", value: 61, dot: { left: "70%", top: "55%" } }
];
const maxValue = 72;

function WorldMapWithDots() {
  // Use your SVG map or a public domain map here
  return (
    <Box sx={{ position: "relative", width: "100%", height: 82, mb: 2 }}>
      <img
        src={worldmapImage}
        alt="World Map"
        style={{
          width: "100%",
          height: 82,
          objectFit: "cover",
          opacity: 0.32,
          borderRadius: 8
        }}
      />
    </Box>
  );
}

export default function RevenueByLocationFullCard() {
  const { mode } = useTheme();
  
  return (
    <Box sx={{ 
      bgcolor: mode === 'dark' ? '#1a1a1a' : '#F7F9FB', 
      p: 2.5, 
      borderRadius: 4, 
      width: 180,
      border: mode === 'dark' ? '1px solid #333' : 'none'
    }}>
      <Typography fontWeight={700} fontSize={14} gutterBottom>
        Revenue by Location
      </Typography>
      <WorldMapWithDots />
      {locations.map(loc => (
        <Box key={loc.city} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 400 }}>{loc.city}</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>{loc.value}K</Typography>
          </Box>
          <Box
            sx={{
              height: 3,
              width: "100%",
              bgcolor: "#e3f0fc",
              borderRadius: 2,
              position: "relative"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: `${(loc.value / maxValue) * 100}%`,
                bgcolor: mode === 'dark' ? '#A8C5DA' : '#b4d0ee',
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
