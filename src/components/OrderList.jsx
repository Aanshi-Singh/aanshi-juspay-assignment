import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  Fade,
  Slide,
  Grow
} from '@mui/material';
import { useSidebar } from '../contexts/SidebarContext.jsx';
import { useLeftSidebar } from '../contexts/LeftSidebarContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';
import {
  CalendarToday as CalendarIcon,
  Description as DescriptionIcon,
  MoreHorizOutlined as MoreHorizOutlinedIcon
} from '@mui/icons-material';
import SearchFilterBar from './SearchFilterBar.jsx';
import CustomPagination from './CustomPagination.jsx';
import mockOrders from '../data/mockOrders.json';

const OrderList = () => {
  const { rightSidebarOpen } = useSidebar();
  const { leftSidebarOpen } = useLeftSidebar();
  const { mode } = useTheme();
  const [orders] = useState(mockOrders);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [userSortDirection, setUserSortDirection] = useState('asc');

  const getStatusColor = (status) => {
    const statusColors = {
      'In Progress': mode === 'light' ? '#8A8CD9' : '#8A8CD9',
      'Complete': mode === 'light' ? '#4AA785' : '#4AA785',
      'Pending': mode === 'light' ? '#59A8D4' : '#59A8D4',
      'Approved': mode === 'light' ? '#FFC555' : '#FFC555',
      'Rejected': mode === 'light' ? '#1C1C1C66' : '#FFFFFF66'
    };
    return statusColors[status] || '#6B7280'; // Default grey
  };

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders.filter(order => {
      const matchesSearch = 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });

    if (sortField) {
      filtered.sort((a, b) => {
        let aValue = a[sortField];
        let bValue = b[sortField];
        
        if (sortField === 'user') {
          aValue = a.user.name;
          bValue = b.user.name;
        }
        
        if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (sortDirection === 'asc') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
    }

    return filtered;
  }, [orders, searchTerm, sortField, sortDirection]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredAndSortedOrders.map((order) => order.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage - 1); // Convert to 0-based index
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(filteredAndSortedOrders.length / rowsPerPage) - 1) {
      setPage(page + 1);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleUserSortToggle = () => {
    const newDirection = userSortDirection === 'asc' ? 'desc' : 'asc';
    setUserSortDirection(newDirection);
    setSortField('user');
    setSortDirection(newDirection);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredAndSortedOrders.length) : 0;

  // Calculate available width based on sidebar states
  const leftSidebarWidth = leftSidebarOpen ? 260 : 0;
  const rightSidebarWidth = rightSidebarOpen ? 250 : 0;
  const availableWidth = `calc(100vw - ${leftSidebarWidth + rightSidebarWidth}px)`;

  return (
    <Fade in={true} timeout={600}>
      <Box sx={{ 
        width: '100%', 
        maxWidth: availableWidth,
        py: 2, 
        margin: 0, 
        paddingLeft: 4, 
        paddingRight: 2, 
        overflow: 'hidden',
        boxSizing: 'border-box',
        '&::-webkit-scrollbar': {
          height: '8px',
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c1c1c1',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#a8a8a8',
          },
        },
      }}>
      <Slide in={true} direction="down" timeout={800}>
        <Typography  sx={{ mb: 3, fontSize: '14px', fontWeight: 600 }}>
          Order List
        </Typography>
      </Slide>
      
      {/* Search and Filter Bar */}
      <SearchFilterBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSortToggle={handleUserSortToggle}
        sortDirection={userSortDirection}
      />

      <Grow in={true} timeout={1000}>
        <TableContainer sx={{ 
          border: 'none', 
          width: '100%', 
          maxWidth: '100%',
          overflow: 'auto',
          maxHeight: 'calc(100vh - 200px)', // Prevent vertical overflow
        boxSizing: 'border-box',
        overflowX: 'scroll', // Force horizontal scrollbar to always show
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          height: '8px',
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c1c1c1',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#a8a8a8',
          },
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: '#f1f1f1',
        },
      }}>
        <Table sx={{ 
          minWidth: 800, // Minimum width for content
          border: 'none', 
          width: '100%', 
          maxWidth: '100%',
          tableLayout: 'fixed', // Fixed layout for better control
          '& .MuiTableCell-root': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }
        }} aria-label="order table">
          <TableHead sx={{ 
            position: 'sticky', 
            top: 0, 
            zIndex: 10, 
            backgroundColor: mode === 'light' ? 'white' : '#1e1e1e'
          }}>
            <TableRow sx={{ height: '40px' }}>
              <TableCell 
                padding="checkbox" 
                sx={{ 
                  width: '5%',
                  height: '40px',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                  
                }}
              >
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < filteredAndSortedOrders.length}
                  checked={filteredAndSortedOrders.length > 0 && selected.length === filteredAndSortedOrders.length}
                  onChange={handleSelectAllClick}
                  size="small"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 16,
                    },
                    color: mode === 'light' ? 'black' : '#C6C7F8',
                    '&.Mui-checked': {
                      color: mode === 'light' ? 'black' : '#C6C7F8',
                    },
                    '&.MuiCheckbox-indeterminate': {
                      color: mode === 'light' ? 'black' : '#C6C7F8',
                    }
                  }}
                />
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  cursor: 'pointer', 
                  width: '10%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                }}
                onClick={() => handleSort('id')}
              >
                Order ID
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  cursor: 'pointer', 
                  width: '18%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                }}
                onClick={() => handleSort('user')}
              >
                User
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  cursor: 'pointer', 
                  width: '18%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                  
                }}
                onClick={() => handleSort('project')}
              >
                Project
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  cursor: 'pointer', 
                  width: '25%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                  
                }}
                onClick={() => handleSort('address')}
              >
                Address
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  cursor: 'pointer', 
                  width: '15%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                  
                }}
                onClick={() => handleSort('date')}
              >
                Date
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  cursor: 'pointer', 
                  width: '12%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                  
                }}
                onClick={() => handleSort('status')}
              >
                Status
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 400, 
                  width: '5%',
                  height: '40px',
                  fontSize: '12px',
                  color: mode === 'light' ? '#1C1C1C66' : '#ffffff66',
                  padding: 0,
                  
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => {
                const isItemSelected = isSelected(order.id);
                return (
                  <TableRow
                    hover
                    key={order.id}
                    selected={isItemSelected}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f8f9fa',
                      },
                      '&.Mui-selected': {
                        backgroundColor: mode === 'light' ? '#f5f5f5' : '#FFFFFF1A',
                        borderLeft: `4px solid ${mode === 'light' ? 'black' : '#C6C7F8'}`,
                      }
                    }}
                  >
                    <TableCell padding="checkbox" sx={{ width: '5%', py: 1, px: 0 }}>
                      <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, order.id)}
                        size="small"
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 16,
                          },
                          color: mode === 'light' ? 'black' : '#C6C7F8',
                          '&.Mui-checked': {
                            color: mode === 'light' ? 'black' : '#C6C7F8',
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'medium', width: '10%', py: 1, px: 0, fontSize: '12px' }}>
                      {order.id}
                    </TableCell>
                    <TableCell sx={{ width: '18%', py: 1, px: 0, fontSize: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar 
                          src={order.user.avatar}
                          sx={{ 
                            width: 24, 
                            height: 24, 
                            flexShrink: 0,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                          }}
                        >
                          {order.user.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Typography variant="body2" sx={{ fontSize: '12px' }}>{order.user.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '18%', py: 1, px: 0, fontSize: '12px' }}>{order.project}</TableCell>
                    <TableCell sx={{ width: '25%', py: 1, px: 0, fontSize: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" sx={{ fontSize: '12px' }}>{order.address}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '15%', py: 1, px: 0, fontSize: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ fontSize: '12px' }}>{order.date}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '12%', py: 1, px: 0, fontSize: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: getStatusColor(order.status),
                            flexShrink: 0
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '12px',
                            fontWeight: 'medium',
                            color: getStatusColor(order.status)
                          }}
                        >
                          {order.status}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '5%', py: 1, px: 0, fontSize: '12px' }}>
                      {isItemSelected && (
                        <Tooltip title="More actions">
                          <IconButton size="small">
                            <MoreHorizOutlinedIcon sx={{ color: mode === 'light' ? 'black' : 'white' }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </TableCell>
                    </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={8} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </Grow>

      <Slide in={true} direction="up" timeout={1200}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Rows per page:
          </Typography>
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              displayEmpty
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomPagination
            currentPage={page + 1}
            totalPages={Math.ceil(filteredAndSortedOrders.length / rowsPerPage)}
            onPageChange={handleChangePage}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </Box>
      </Box>
      </Slide>
      </Box>
    </Fade>
  );
};

export default OrderList;
