import React from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard.css';
import './OccupancyRate.css';

const OccupancyRate = () => {
  const projects = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    name: `프로젝트 ${String.fromCharCode(65 + (i % 5))}`,
    stayRate: '50%',
    stayPrev: '60%',
    hourlyRate: '30%',
    hourlyPrev: '40%',
    totalRate: '40%',
    totalPrev: '50%'
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <Link to="/home/realtime" className="dashboard-nav-item">실시간</Link>
        <Link to="/home/monthly-revenue" className="dashboard-nav-item">당월 누적매출</Link>
        <Link to="/home/occupancy" className="dashboard-nav-item active">OCC율</Link>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>카테고리 &gt; OCC율</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/home/category-by-project" className="export-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>프로젝트별로</Link>
            <button className="export-btn">출력</button>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/branch/reservation/${project.id}`} className="project-card occ-card">
              <div className="project-header">{project.name}</div>
              <div className="project-detail">S(숙박) {project.stayRate} / 전월 {project.stayPrev}</div>
              <div className="project-detail">u(대실) {project.hourlyRate} / 전월 {project.hourlyPrev}</div>
              <div className="project-detail total">total {project.totalRate} / 전월 {project.totalPrev}</div>
            </Link>
          ))}
        </div>

        <div className="pagination">
          1,2,3,4,페이지 &gt;
        </div>
      </div>
    </div>
  );
};

export default OccupancyRate;
