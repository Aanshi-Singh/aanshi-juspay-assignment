import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const CustomPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  onPrevious, 
  onNext 
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 1,
        p: 1,
        backgroundColor: 'background.paper',
        maxWidth: 'fit-content'
      }}
    >
      {/* Previous Arrow */}
      <IconButton
        onClick={onPrevious}
        disabled={currentPage === 1}
        sx={{
          p: 0.5,
          color: 'text.primary',
          '&:disabled': {
            color: 'text.disabled',
          },
          '&:hover': {
            backgroundColor: 'action.hover',
          }
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Box
          key={page}
          onClick={() => onPageChange(page)}
          sx={{
            minWidth: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            cursor: 'pointer',
            backgroundColor: page === currentPage ? 'action.selected' : 'transparent',
            color: page === currentPage ? 'text.primary' : 'text.secondary',
            fontWeight: page === currentPage ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: page === currentPage ? 'action.selected' : 'action.hover',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'inherit' }}>
            {page}
          </Typography>
        </Box>
      ))}

      {/* Next Arrow */}
      <IconButton
        onClick={onNext}
        disabled={currentPage === totalPages}
        sx={{
          p: 0.5,
          color: 'text.primary',
          '&:disabled': {
            color: 'text.disabled',
          },
          '&:hover': {
            backgroundColor: 'action.hover',
          }
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default CustomPagination;
