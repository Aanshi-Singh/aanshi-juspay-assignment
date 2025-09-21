import React from 'react';
import { Box, TextField, InputAdornment, IconButton, Tooltip } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, FilterList as FilterIcon, UnfoldMore as SortIcon } from '@mui/icons-material';
import { FiSearch } from "react-icons/fi";
import { LuArrowDownUp } from "react-icons/lu";
import { useTheme } from '../contexts/ThemeContext.jsx';

const SearchFilterBar = ({ searchTerm, onSearchChange, onSortToggle, sortDirection }) => {
  const { mode } = useTheme();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 1, // 8px padding
        backgroundColor: mode === 'light' ? '#F7F9FB' : '#2C2C2C',
        borderRadius: 2, // 8px border radius
        mb: 2
      }}
    >
      {/* Left side - Icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> {/* 8px gap */}
        <Tooltip title="Add new item">
          <IconButton 
            size="20px"
            sx={{ 
              width: 20, 
              height: 20,
              color: mode === 'light' ? 'text.primary' : '#ffffff66',
              borderRadius: 1,
              cursor: 'not-allowed',
              '&:hover': {
                backgroundColor: 'action.hover',
                transform: 'scale(1.05)',
                borderRadius: 1,
              }
            }}
          >
            <AddIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Filter options">
          <IconButton 
            size="20px"
            sx={{ 
              width: 20, 
              height: 20,
              color: mode === 'light' ? 'text.primary' : '#ffffff66',
              borderRadius: 1,
              cursor: 'not-allowed',
              '&:hover': {
                backgroundColor: 'action.hover',
                transform: 'scale(1.05)',
                borderRadius: 1,
              }
            }}
          >
            <FilterIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
        
        <Tooltip title={`Sort by user name (${sortDirection === 'asc' ? 'Descending' : 'Ascending'})`}>
          <IconButton 
            size="20px"
            onClick={onSortToggle}
            sx={{ 
              
              color: mode === 'light' ? 'text.primary' : '#ffffff66',
              borderRadius: 1,
              p: 0,
              '&:hover': {
                backgroundColor: 'action.hover',
                transform: 'scale(1.05)',
                borderRadius: 1,
              },
              '&.active': {
                color: 'primary.main',
                backgroundColor: 'primary.light',
              }
            }}
          >
            <LuArrowDownUp size={20}/>
          </IconButton>
        </Tooltip>
      </Box>

      {/* Right side - Search */}
      <TextField
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FiSearch sx={{ fontSize: 20, color: mode === 'light' ? '#1C1C1C33' : '#ffffff66' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          minWidth: 200,
          '& .MuiOutlinedInput-root': {
            backgroundColor: mode === 'light' ? 'white' : '#4A4A4A',
            borderRadius: '8px',
            '& fieldset': {
              borderColor: mode === 'light' ? '#1C1C1C33' : '#ffffff66',
            },
            '&:hover fieldset': {
              borderColor: mode === 'light' ? '#1C1C1C33' : '#ffffff66',
            },
            '&.Mui-focused fieldset': {
              borderColor: mode === 'light' ? '#1C1C1C33' : '#ffffff66',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: mode === 'light' ? '#1C1C1C33' : '#ffffff66',
            opacity: 1,
          },
          '& .MuiInputBase-input': {
            color: mode === 'light' ? 'black' : 'white',
          },
        }}
      />
    </Box>
  );
};

export default SearchFilterBar;
