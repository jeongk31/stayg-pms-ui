# PMS Frontend - Quick Start Guide

## Overview

I've created a complete frontend UI for the PMS (Property Management System) based on the proposal document (pms 제안서.pdf). All screens have been implemented with sample placeholder data.

## What's Included

### ✅ All Major Screens Implemented:

1. **Dashboard (홈)**
   - Real-time view (실시간)
   - Monthly cumulative revenue (당월 누적매출)
   - Occupancy rate (OCC율)

2. **Project Management (프로젝트별)**
   - Detailed project view with room type breakdown

3. **Branch Management (지점 > 호텔)**
   - Branch list with search
   - **PMS Room Management** - Interactive room status board with modal
   - Sales daily report (판매일보)
   - Reservation status (예약현황)
   - Staff management (직원관리)

4. **Finance (재무)**
   - Revenue by channel (매출)
   - Cost analysis (원가) - Fixed vs Variable
   - Profit & Loss (손익)
   - Cash flow (자금 유동성)

5. **Asset Management (자산)**
   - Asset inventory tracking

6. **Events (이벤트)**
   - User access logs (사용자 로그)
   - CCTV monitoring

7. **Settings (설정)**
   - System configuration options

## Quick Start

### 1. Navigate to the frontend directory:
```bash
cd "/Users/thet/Desktop/Loop Dimension/Projects/Working/스테이지/PMS/frontend"
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the development server:
```bash
npm start
```

### 4. Open your browser:
The app will automatically open at [http://localhost:3000](http://localhost:3000)

## Key Features

### Interactive Elements:
- ✅ **Navigation** - Main navigation bar with 6 sections (홈, 지점, 재무, 자산, 이벤트, 설정)
- ✅ **Sub-navigation** - Yellow-highlighted active tabs
- ✅ **Project Cards** - Clickable cards that link to detailed views
- ✅ **Room Management Modal** - Click any room in PMS to see detailed management options
- ✅ **Data Tables** - Sortable, searchable tables throughout
- ✅ **Search & Filters** - Dropdown filters for location, project, dates
- ✅ **Export Buttons** - Print and Excel export buttons (UI only)

### Sample Data:
- 15+ projects with realistic Korean names
- Multiple room types (Standard, Deluxe, Suite, Royal Suite, Twin)
- Booking channels (야놀자, 여기어때, 네이버, 아고다, 부킹닷컴, etc.)
- Financial data with Korean currency formatting
- Staff attendance records
- Asset inventory

### Design Highlights:
- **Yellow accent color (#ffeb3b)** for active states
- **Black borders** for emphasis
- **Grid layouts** for project cards
- **Table views** for data
- **Modal dialogs** for room management
- **Color-coded status** for rooms (available, cleaning, occupied, etc.)
- **Responsive tables** with horizontal scroll

## File Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── Layout.js (Main navigation & layout)
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── ProjectList.js
│   │   ├── Home/ (3 files)
│   │   ├── Branch/ (5 files)
│   │   ├── Finance/ (4 files)
│   │   ├── Event/ (2 files)
│   │   ├── AssetManagement.js
│   │   └── Settings.js
│   ├── App.js
│   └── index.js
└── package.json
```

**Total: 21 JavaScript files + CSS files**

## Next Steps

### To customize the app:
1. Modify sample data in each component
2. Add API integration for real data
3. Implement authentication
4. Add data persistence
5. Enhance interactivity (sorting, filtering, etc.)

### To deploy:
```bash
npm run build
```
This creates an optimized production build in the `/build` folder.

## Troubleshooting

If you encounter any issues:

1. **Port already in use**: Change port in package.json or stop other React apps
2. **Dependencies fail**: Try `rm -rf node_modules package-lock.json && npm install`
3. **Blank screen**: Check browser console for errors

## Technologies

- React 18.2
- React Router DOM 6.8
- Pure CSS (no UI libraries)
- Create React App

## Support

For questions or issues, check:
- React documentation: https://react.dev
- React Router: https://reactrouter.com

---

**Created**: October 26, 2025
**Based on**: PMS 제안서.pdf specifications
**Status**: ✅ Complete - All screens implemented with sample data
