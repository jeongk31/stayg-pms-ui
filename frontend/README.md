# PMS Frontend - Property Management System

This is the frontend UI for the PMS (Property Management System) based on the proposal document.

## Features

### 1. Dashboard / Home
- **실시간 (Real-time)**: View real-time status of all projects showing occupancy, revenue, and staff
- **당월 누적매출 (Monthly Revenue)**: Monthly accumulated revenue with ADR and expected revenue
- **OCC율 (Occupancy Rate)**: Occupancy rates comparison with previous month

### 2. Project Management
- **프로젝트별 (By Project)**: Detailed view of each project with room type breakdown and occupancy

### 3. Branch Management (지점)
- **호텔 리스트 (Hotel List)**: List of all hotel branches with search functionality
- **PMS**: Real-time room management system with color-coded room status
  - Room status tracking (Available, Cleaning, Occupied, etc.)
  - Check-in/Check-out management
  - Channel management (Yanolja, Yogiyo, Naver, Agoda, Booking.com, etc.)
- **판매일보 (Sales Report)**: Daily sales report with booking details
- **예약현황 (Reservation Status)**: Calendar view of reservations
- **직원관리 (Staff Management)**: Employee attendance and work hour tracking

### 4. Finance (재무)
- **매출 (Revenue)**: Revenue breakdown by channel (yearly/monthly views)
- **원가 (Cost)**: Fixed and variable cost tracking
- **손익 (Profit)**: Profit and loss analysis
- **자금 유동성 (Cash Flow)**: Cash flow management by payment channel

### 5. Asset Management (자산)
- Asset inventory tracking
- Item specifications and condition monitoring

### 6. Events
- **사용자 로그 (User Log)**: System access logs
- **CCTV**: CCTV event monitoring

### 7. Settings (설정)
- Room configuration
- Rate settings
- Project management
- Channel management
- User management

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout.js          # Main layout with navigation
│   │   └── Layout.css
│   ├── pages/
│   │   ├── Dashboard.js       # Home/Dashboard
│   │   ├── ProjectList.js     # Project list view
│   │   ├── Home/
│   │   │   ├── RealTime.js
│   │   │   ├── MonthlyRevenue.js
│   │   │   └── OccupancyRate.js
│   │   ├── Branch/
│   │   │   ├── BranchList.js
│   │   │   ├── PMS.js         # Room management
│   │   │   ├── SalesReport.js
│   │   │   ├── ReservationStatus.js
│   │   │   └── StaffManagement.js
│   │   ├── Finance/
│   │   │   ├── Revenue.js
│   │   │   ├── Cost.js
│   │   │   ├── Profit.js
│   │   │   └── CashFlow.js
│   │   ├── Event/
│   │   │   ├── EventLog.js
│   │   │   └── CCTV.js
│   │   ├── AssetManagement.js
│   │   └── Settings.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Sample Data

All screens are populated with placeholder sample data as specified in the proposal document. The data includes:

- Multiple projects (프로젝트 A, B, C, etc.)
- Room types (Standard, Deluxe, Suite, Royal Suite, Twin)
- Booking channels (Yanolja, Yogiyo, Naver, Agoda, Booking.com, Expedia, Trip.com, Airbnb, Walk-in)
- Payment methods (Online, Card, Bank Transfer, Cash)
- Financial data (Revenue, Costs, Profit)

## UI Design

The UI follows the exact design specifications from the PMS proposal document (pms 제안서.pdf):

- Yellow (#ffeb3b) highlights for active navigation items
- Black borders and headers for emphasis
- Grid layouts for project cards
- Tabular data views for reports
- Modal dialogs for room management
- Color-coded room status indicators

## Technologies Used

- React 18.2.0
- React Router DOM 6.8.0
- CSS3 (No external UI libraries - custom styled components)
- Create React App

## Notes

- This is a frontend-only implementation with sample data
- No backend API integration (ready for future integration)
- All interactive elements are functional UI components
- Responsive design considerations for desktop usage
- Korean language support throughout the interface
