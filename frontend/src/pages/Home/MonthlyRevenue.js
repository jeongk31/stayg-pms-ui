import React from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard.css';
import './MonthlyRevenue.css';

const MonthlyRevenue = () => {
  const projects = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    name: `프로젝트 ${String.fromCharCode(65 + (i % 5))}`,
    stay: '10,000,000',
    hourly: '10,000,000',
    revenue: '20,000,000',
    adr: '70,000',
    expectedRevenue: i === 0 ? '76,923,076' : '60,000,000'
  }));

  return (
    <div className="dashboard">
      <div className="content-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/branch/pms/${project.id}`} className="project-card monthly-card">
              <div className="project-header">{project.name}</div>
              <div className="project-detail">S(숙박) {project.stay}</div>
              <div className="project-detail">u(대실) {project.hourly}</div>
              <div className="project-detail">매출 {project.revenue}</div>
              <div className="project-detail">ADR {project.adr}</div>
              <div className="project-detail expected">예상매출 {project.expectedRevenue}</div>
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

export default MonthlyRevenue;
