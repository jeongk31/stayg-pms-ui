import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ReservationStatus.css';

const ReservationStatus = () => {
  const { id } = useParams();
  const reservations = [
    { date: '2025-01-01', standard: 2, deluxe: 2, suite: 2, royal: 2, twin: 2, occupancy: '50%', sales: 10 },
    { date: '2025-01-02', standard: 2, deluxe: 2, suite: 2, royal: 2, twin: 2, occupancy: '50%', sales: 10 },
    { date: '2025-01-03', standard: 3, deluxe: 3, suite: 3, royal: 3, twin: 3, occupancy: '60%', sales: 15 },
    { date: '2025-01-04', standard: 4, deluxe: 4, suite: 4, royal: 4, twin: 4, occupancy: '70%', sales: 20 },
    { date: '2025-01-05', standard: 5, deluxe: 5, suite: 5, royal: 5, twin: 5, occupancy: '80%', sales: 25 },
    { date: '2025-01-06', standard: 0, deluxe: 1, suite: 2, royal: 3, twin: 4, occupancy: '50%', sales: 10 },
  ];

  return (
    <div className="reservation-status">
      <div className="status-nav">
        <button className="status-nav-item active">호텔</button>
        <button className="status-nav-item">펜션</button>
        <button className="status-nav-item">캠핑</button>
        <button className="status-nav-item">F&B</button>
        <button className="status-nav-item">기타</button>
      </div>

      <div className="status-content">
        <div className="status-sidebar">
          <Link to={`/branch/pms/${id}`} className="sidebar-item">PMS</Link>
          <Link to={`/branch/sales/${id}`} className="sidebar-item">판매일보</Link>
          <Link to={`/branch/reservation/${id}`} className="sidebar-item active">예약현황</Link>
          <Link to={`/branch/staff/${id}`} className="sidebar-item">직원관리</Link>
        </div>

        <div className="status-main">
          <div className="status-header">
            <h2>예약 리스트 대시보드</h2>
            <div className="header-controls">
              <select className="month-select">
                <option>월 (드릴다운)</option>
                <option>1월</option>
                <option>2월</option>
                <option>3월</option>
              </select>
              <input type="text" placeholder="프로젝트명" className="project-input" />
              <div className="header-actions">
                <button className="export-btn">출력</button>
                <button className="export-btn">엑셀 다운</button>
              </div>
            </div>
          </div>

          <div className="table-container">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>스탠다드</th>
                  <th>디럭스</th>
                  <th>스위트</th>
                  <th>로얄스위트</th>
                  <th>트윈</th>
                  <th>...</th>
                  <th>가동율</th>
                  <th>판매수량</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((row, index) => (
                  <tr key={index}>
                    <td>{row.date}</td>
                    <td>{row.standard}</td>
                    <td>{row.deluxe}</td>
                    <td>{row.suite}</td>
                    <td>{row.royal}</td>
                    <td>{row.twin}</td>
                    <td>...</td>
                    <td className="occupancy">{row.occupancy}</td>
                    <td>{row.sales}</td>
                  </tr>
                ))}
                {Array(6).fill(null).map((_, index) => (
                  <tr key={`empty-${index}`}>
                    <td>2025-01-{String(7 + index).padStart(2, '0')}</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationStatus;
