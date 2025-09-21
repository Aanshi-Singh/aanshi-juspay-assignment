import React from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export default function TopSellingProducts() {
  const { mode } = useTheme();
  
  return (
    <Box sx={{ 
      bgcolor: mode === 'dark' ? '#1a1a1a' : '#F7F9FB', 
      borderRadius: 3, 
      p: 2, 
      maxWidth: 490,
      border: mode === 'dark' ? '1px solid #333' : 'none'
    }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom>
        Top Selling Products
      </Typography>
      <Table sx={{
        borderCollapse: "collapse",
        background: mode === 'dark' ? '#1a1a1a' : '#F7F9FB',
        mt: 1
      }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ 
              color: mode === 'dark' ? '#ccc' : '#1C1C1C66', 
              fontWeight: 400, 
              borderBottom: mode === 'dark' ? '1px solid #444' : '1px solid #ededed', 
              fontSize: 12,
              padding: '8px 12px 8px 12px'
            }}>Name</TableCell>
            <TableCell sx={{ 
              color: mode === 'dark' ? '#ccc' : '#1C1C1C66', 
              fontWeight: 400, 
              borderBottom: mode === 'dark' ? '1px solid #444' : '1px solid #ededed', 
              fontSize: 12,
              padding: '8px 12px 8px 12px'
            }}>Price</TableCell>
            <TableCell sx={{ 
              color: mode === 'dark' ? '#ccc' : '#1C1C1C66', 
              fontWeight: 400, 
              borderBottom: mode === 'dark' ? '1px solid #444' : '1px solid #ededed', 
              fontSize: 12,
              padding: '8px 12px 8px 12px'
            }}>Quantity</TableCell>
            <TableCell sx={{ 
              color: mode === 'dark' ? '#ccc' : '#1C1C1C66', 
              fontWeight: 400, 
              borderBottom: mode === 'dark' ? '1px solid #444' : '1px solid #ededed', 
              fontSize: 12,
              padding: '8px 12px 8px 12px'
            }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, i) => (
            <TableRow key={row.name}>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontSize: 12,
                  fontWeight: 400,
                  color: mode === 'dark' ? '#fff' : 'black',
                  padding: '8px 12px 8px 12px'
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontSize: 12,
                  fontWeight: 400,
                  color: mode === 'dark' ? '#fff' : 'black',
                  padding: '8px 12px 8px 12px'
                }}
              >
                {row.price}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontSize: 12,
                  fontWeight: 400,
                  color: mode === 'dark' ? '#fff' : 'black',
                  padding: '8px 12px 8px 12px'
                }}
              >
                {row.quantity}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontSize: 12,
                  fontWeight: 400,
                  color: mode === 'dark' ? '#fff' : 'black',
                  padding: '8px 12px 8px 12px'
                }}
              >
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
