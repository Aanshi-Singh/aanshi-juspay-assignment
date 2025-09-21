# Components Documentation

This directory contains all the React components for the SaaS Dashboard application. Each component is designed to be modular, reusable, and well-documented.

## Component Structure

### Core Components

#### `App.jsx`
- **Purpose**: Root component with context providers and routing
- **Features**: Lazy loading, theme management, sidebar state management
- **Dependencies**: React Router, Material-UI, custom contexts

#### `CustomNavBar.jsx`
- **Purpose**: Top navigation bar with sidebar controls and search
- **Features**: Responsive design, theme toggle, search functionality
- **Props**: `leftSidebarWidth`, `rightSidebarWidth`

#### `LeftSidebar.jsx`
- **Purpose**: Left navigation sidebar with menu items
- **Features**: Collapsible sections, navigation, user profile
- **Props**: `open`, `onClose`, `drawerWidth`

#### `RightSidebar.jsx`
- **Purpose**: Right information sidebar with contacts and activities
- **Features**: Contact list, notifications, activity feed
- **Props**: `open`, `onClose`, `drawerWidth`

### Analytics Components

#### `Analytics.jsx`
- **Purpose**: Main analytics dashboard
- **Features**: Grid layout, responsive design, data visualization
- **Dependencies**: All ecommerce-analytics components

#### `ecommerce-analytics/MetricCard.jsx`
- **Purpose**: Individual metric display card
- **Features**: Trend indicators, hover animations, theme support
- **Props**: `title`, `value`, `change`, `trend`, `backgroundColor`, `sx`

#### `ecommerce-analytics/MetricsGrid.jsx`
- **Purpose**: Grid layout for metric cards
- **Features**: Responsive grid, data mapping
- **Props**: `sx`

#### `ecommerce-analytics/ProjectionsVsActualsChart.jsx`
- **Purpose**: Bar chart comparing projections vs actuals
- **Features**: Interactive charts, theme support, responsive design
- **Dependencies**: MUI X Charts

#### `ecommerce-analytics/RevenueChart.jsx`
- **Purpose**: Line chart for revenue trends
- **Features**: Multiple data series, legend, responsive design
- **Dependencies**: MUI X Charts

#### `ecommerce-analytics/RevenueByLocation.jsx`
- **Purpose**: Geographic revenue distribution
- **Features**: Location-based data visualization
- **Dependencies**: MUI X Charts

#### `ecommerce-analytics/TopSellingProducts.jsx`
- **Purpose**: Best performing products display
- **Features**: Product rankings, sales data
- **Dependencies**: MUI X Charts

#### `ecommerce-analytics/TotalSales.jsx`
- **Purpose**: Overall sales summary
- **Features**: Sales metrics, trend indicators
- **Dependencies**: MUI X Charts

### Order Management Components

#### `OrderList.jsx`
- **Purpose**: Comprehensive order management table
- **Features**: Search, filtering, sorting, pagination, row selection
- **Props**: None (uses internal state)

#### `SearchFilterBar.jsx`
- **Purpose**: Search and filter controls for order list
- **Features**: Search input, filter buttons, sort controls
- **Props**: `searchTerm`, `onSearchChange`, `onSortToggle`, `sortDirection`

#### `CustomPagination.jsx`
- **Purpose**: Custom pagination component
- **Features**: Page navigation, responsive design
- **Props**: `currentPage`, `totalPages`, `onPageChange`, `onPrevious`, `onNext`

### Utility Components

#### `ThemeToggle.jsx`
- **Purpose**: Theme switching button
- **Features**: Animated transitions, tooltip
- **Props**: None (uses context)

#### `LayoutWrapper.jsx`
- **Purpose**: Main layout wrapper with sidebars
- **Features**: Responsive layout, sidebar management
- **Props**: `children`

## Component Design Patterns

### 1. Context Pattern
- Components use React Context for global state management
- Theme, sidebar states, and other global states are managed through contexts

### 2. Compound Component Pattern
- Complex components are broken down into smaller, focused components
- Each component has a single responsibility

### 3. Render Props Pattern
- Some components accept render functions for customization
- Allows for flexible component composition

### 4. Higher-Order Component Pattern
- Context providers wrap components to provide shared state
- Custom hooks provide easy access to context values

## Styling Guidelines

### Material-UI Integration
- All components use Material-UI components and theming
- Consistent spacing using theme.spacing()
- Responsive design with breakpoints

### Animation Guidelines
- Use Material-UI's built-in animation components (Fade, Slide, Grow)
- Consistent timing functions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover effects with scale and transform

### Theme Support
- All components support both light and dark themes
- Use theme.palette for consistent colors
- Conditional styling based on theme mode

## Performance Considerations

### Lazy Loading
- Route components are lazy loaded for better performance
- Reduces initial bundle size


### ARIA Labels
- All interactive elements have proper ARIA labels
- Screen reader support for all components

### Keyboard Navigation
- Full keyboard accessibility
- Focus management for modals and sidebars

### Color Contrast
- WCAG compliant color schemes
- High contrast mode support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

### Core Dependencies
- React 19.1.1
- Material-UI 7.3.2
- React Router DOM 7.9.1

### Chart Dependencies
- MUI X Charts 8.11.3

### Icon Dependencies
- React Icons 5.5.0
- Material-UI Icons

### Animation Dependencies
- Material-UI built-in animations
- CSS transitions and transforms
