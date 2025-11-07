import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

const ProjectList = () => {
  const data = [
    { date: '2025-01-01', standard: 2, deluxe: 2, suite: 2, royal: 2, twin: 2, occupancy: '50%', sales: 8 },
    { date: '2025-01-02', standard: 2, deluxe: 2, suite: 2, royal: 2, twin: 2, occupancy: '50%', sales: 8 },
    { date: '2025-01-03', standard: 3, deluxe: 3, suite: 3, royal: 3, twin: 3, occupancy: '60%', sales: 12 },
    { date: '2025-01-04', standard: 4, deluxe: 4, suite: 4, royal: 4, twin: 4, occupancy: '70%', sales: 16 },
    { date: '2025-01-05', standard: 5, deluxe: 5, suite: 5, royal: 5, twin: 5, occupancy: '80%', sales: 20 },
    { date: '2025-01-06', standard: 0, deluxe: 1, suite: 2, royal: 3, twin: 4, occupancy: '50%', sales: 10 },
  ];

  return (
    <div className="project-list">
      <div className="page-header">
        <h2>프로젝트별 OCC율</h2>
        <div className="search-controls">
          <select className="search-select">
            <option>시</option>
          </select>
          <select className="search-select">
            <option>구</option>
          </select>
          <select className="search-select">
            <option>프로젝트</option>
          </select>
          <select className="search-select">
            <option>월</option>
          </select>
          <div className="export-buttons">
            <button className="export-btn">출력</button>
            <button className="export-btn">엑셀 다운</button>
          </div>
        </div>
      </div>

      <div className="project-name">프로젝트명</div>

      <div className="table-container">
        <table className="data-table">
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
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.standard}</td>
                <td>{row.deluxe}</td>
                <td>{row.suite}</td>
                <td>{row.royal}</td>
                <td>{row.twin}</td>
                <td>...</td>
                <td className="occupancy-cell">{row.occupancy}</td>
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
  );
};

export default ProjectList;
