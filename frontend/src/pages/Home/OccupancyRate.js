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
      <div className="content-section">
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
