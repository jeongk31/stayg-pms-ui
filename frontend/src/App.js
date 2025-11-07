import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import RealTime from './pages/Home/RealTime';
import MonthlyRevenue from './pages/Home/MonthlyRevenue';
import OccupancyRate from './pages/Home/OccupancyRate';
import CategoryByProject from './pages/Home/CategoryByProject';
import ProjectList from './pages/ProjectList';
import BranchList from './pages/Branch/BranchList';
import PMS from './pages/Branch/PMS';
import SalesReport from './pages/Branch/SalesReport';
import ReservationStatus from './pages/Branch/ReservationStatus';
import StaffManagement from './pages/Branch/StaffManagement';
import FinanceRevenue from './pages/Finance/Revenue';
import FinanceCost from './pages/Finance/Cost';
import CashFlow from './pages/Finance/CashFlow';
import AssetManagement from './pages/AssetManagement';
import EventLog from './pages/Event/EventLog';
import CCTV from './pages/Event/CCTV';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home/realtime" element={<RealTime />} />
          <Route path="/home/monthly-revenue" element={<MonthlyRevenue />} />
          <Route path="/home/occupancy" element={<OccupancyRate />} />
          <Route path="/home/category-by-project" element={<CategoryByProject />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/branch" element={<BranchList />} />
          <Route path="/branch/pms/:id" element={<PMS />} />
          <Route path="/branch/sales/:id" element={<SalesReport />} />
          <Route path="/branch/reservation/:id" element={<ReservationStatus />} />
          <Route path="/branch/staff/:id" element={<StaffManagement />} />
          <Route path="/finance/revenue" element={<FinanceRevenue />} />
          <Route path="/finance/cost" element={<FinanceCost />} />
          <Route path="/finance/cash-flow" element={<CashFlow />} />
          <Route path="/assets" element={<AssetManagement />} />
          <Route path="/events/log" element={<EventLog />} />
          <Route path="/events/cctv" element={<CCTV />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
