import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const projects = [
    { id: 1, name: '프로젝트 A', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 2, name: '프로젝트 B', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 3, name: '프로젝트 C', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 4, name: '프로젝트 D', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 5, name: '프로젝트 E', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 6, name: '프로젝트 F', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 7, name: '프로젝트 G', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 8, name: '프로젝트 H', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
    { id: 9, name: '프로젝트 I', stay: '100/50', hourly: '100/50', revenue: '3,000,000', staff: '홍길동' },
  ];

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

export default Dashboard;
