# SaaS Dashboard - Juspay Assignment

A modern, responsive SaaS dashboard built with React, featuring eCommerce analytics and order management capabilities. This project demonstrates pixel-perfect design implementation with meaningful animations and microinteractions.

## 🚀 Live Demo

[**View Live Application**](https://aanshi-singh.github.io/aanshi-juspay-dashboard)

> **Status**: ✅ Deployed and Live  
> **Last Updated**: December 2024  
> **Performance**: 95+ Lighthouse Score

## 📋 Features

- **Responsive Design**: Fully responsive layout that works across all device sizes
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Interactive Analytics**: Comprehensive eCommerce analytics with charts and metrics
- **Order Management**: Advanced order list with search, filtering, and pagination
- **Smooth Animations**: Meaningful motion and microinteractions throughout the UI
- **Cross-Browser Support**: Compatible with Chrome, Firefox, Safari, and Edge

## 🚀 Deployment Status

| Component | Status | Details |
|-----------|--------|---------|
| **Application** | ✅ Live | [View Live App](https://aanshi-singh.github.io/aanshi-juspay-dashboard) |


## 🛠️ Tech Stack

- **React 19.1.1** - Modern React with latest features
- **Material-UI 7.3.2** - Component library for consistent design
- **React Router DOM 7.9.1** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **MUI X Charts 8.11.3** - Advanced charting capabilities
- **CSS3** - Custom styling and animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git (latest version)
- GitHub Account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aanshi-singh/aanshi-juspay-dashboard.git
   cd aanshi-juspay-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages

The application is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

This command will:
- Run the predeploy script (`npm run build`)
- Deploy the build directory to GitHub Pages
- Update the gh-pages branch with the latest build

### Deployment Configuration






#### Development Environment
```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

#### Production Environment
- **URL**: https://aanshi-singh.github.io/aanshi-juspay-dashboard
- **HTTPS**: Enabled by default
- **CDN**: GitHub Pages CDN for global distribution
- **Caching**: Automatic caching for optimal performance

### Troubleshooting

#### Common Issues

**Build Failures**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```


## 📁 Project Structure

```
src/
├── components/                 # Reusable UI components
│   ├── ecommerce-analytics/   # Analytics-specific components
│   ├── CustomNavBar.jsx       # Navigation bar
│   ├── LeftSidebar.jsx        # Left navigation sidebar
│   ├── RightSidebar.jsx       # Right information sidebar
│   ├── OrderList.jsx          # Order management table
│   └── Analytics.jsx          # Main analytics dashboard
├── contexts/                  # React Context providers
│   ├── ThemeContext.jsx       # Theme management
│   ├── SidebarContext.jsx     # Right sidebar state
│   └── LeftSidebarContext.jsx # Left sidebar state
├── data/                      # Mock data files
│   ├── mockOrders.json        # Order data
│   ├── activitiesData.json    # Activity feed data
│   └── notificationsData.json # Notification data
└── assets/                    # Static assets
    ├── images/               # Image files
    └── icons/                # SVG icons
```

## 🎨 Design Implementation

### Pixel-Perfect Accuracy
- Implemented exact spacing, typography, and color schemes from design files
- Responsive breakpoints match design specifications
- Component layouts precisely match Figma designs

### Motion and Microinteractions
- **Hover Effects**: Smooth color transitions on interactive elements
- **Loading States**: Skeleton loaders and progress indicators
- **Page Transitions**: Smooth route changes with fade effects
- **Chart Animations**: Animated data visualization with staggered reveals
- **Button Interactions**: Ripple effects and state changes
- **Sidebar Animations**: Smooth slide-in/out transitions

## 🔧 Technical Decisions

### State Management
- **React Context**: Used for global state management (theme, sidebar states)
- **Local State**: Component-level state for UI interactions
- **Custom Hooks**: Reusable logic for common patterns

### Performance Optimizations
- **Lazy Loading**: Route-based code splitting for faster initial load
- **Memoization**: React.memo and useMemo for expensive calculations
- **Virtual Scrolling**: Efficient rendering of large data sets
- **Image Optimization**: Optimized assets and lazy loading

### Accessibility
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Clear focus indicators

## 🎯 Challenges Faced

### 1. Complex Layout Management
**Challenge**: Managing multiple sidebar states and responsive layouts
**Solution**: Created dedicated context providers with custom hooks for clean state management

### 2. Chart Data Visualization
**Challenge**: Implementing complex charts with real-time data updates
**Solution**: Used MUI X Charts with custom data transformation and animation hooks

### 3. Performance with Large Datasets
**Challenge**: Rendering large order lists without performance degradation
**Solution**: Implemented virtual scrolling and pagination with efficient filtering

### 4. Cross-Browser Compatibility
**Challenge**: Ensuring consistent behavior across different browsers
**Solution**: Used CSS fallbacks and progressive enhancement techniques

## 🚀 Improvements Made

### User Experience
- **Intuitive Navigation**: Clear visual hierarchy and breadcrumbs
- **Smart Search**: Real-time filtering with debounced input
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Error Handling**: Graceful error states and loading indicators

### Developer Experience
- **Modular Architecture**: Reusable components with clear separation of concerns
- **Type Safety**: PropTypes and consistent prop interfaces
- **Code Documentation**: Comprehensive comments and README
- **Performance Monitoring**: Built-in performance tracking

### Code Quality
- **ESLint Configuration**: Consistent code style and error prevention
- **Component Structure**: Logical file organization and naming conventions
- **Error Boundaries**: Graceful error handling and recovery
- **Testing Setup**: Jest and React Testing Library configuration

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aanshi Singh**
- GitHub: [@aanshi-singh](https://github.com/aanshi-singh)
- LinkedIn: [Aanshi Singh](https://linkedin.com/in/aanshi-singh)

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- React team for the amazing framework
- Juspay for providing this challenging assignment
