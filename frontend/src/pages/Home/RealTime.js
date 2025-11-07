import React from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard.css';

const RealTime = () => {
  const projects = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    name: `프로젝트 ${String.fromCharCode(65 + (i % 5))}`,
    stay: '100/50',
    hourly: '100/50',
    revenue: '3,000,000',
    staff: '홍길동'
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <Link to="/home/realtime" className="dashboard-nav-item active">실시간</Link>
        <Link to="/home/monthly-revenue" className="dashboard-nav-item">당월 누적매출</Link>
        <Link to="/home/occupancy" className="dashboard-nav-item">OCC율</Link>
      </div>

      <div className="content-section">
        <h2>카테고리 &gt; 실시간</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/branch/pms/${project.id}`} className="project-card">
              <div className="project-header">{project.name}</div>
              <div className="project-detail">S(숙박) {project.stay}</div>
              <div className="project-detail">u(대실) {project.hourly}</div>
              <div className="project-detail">매출 {project.revenue}</div>
              <div className="project-detail">근무자 {project.staff}</div>
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

export default RealTime;
