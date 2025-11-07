import React from 'react';
import './EventLog.css';

const EventLog = () => {
  const logs = [
    { no: 1, project: '프로젝트 A', date: '2025-01-15', id: 'admin01', program: 'PMS', action: '로그인', ip: '192.168.1.1' },
    { no: 2, project: '프로젝트 A', date: '2025-01-15', id: 'admin01', program: '판매일보', action: '데이터 수정', ip: '192.168.1.1' },
  ];

  return (
    <div className="event-log">
      <div className="event-nav">
        <button className="event-nav-item active">이벤트</button>
        <button className="event-nav-item">사용자 로그</button>
        <button className="event-nav-item">CCTV</button>
      </div>

      <div className="event-content">
        <div className="event-header">
          <h2>이벤트 &gt; 사용자 로그</h2>
          <div className="search-controls">
            <select className="search-select">
              <option>시 (드릴다운)</option>
            </select>
            <select className="search-select">
              <option>구 (드릴다운)</option>
            </select>
            <select className="search-select">
              <option>일자</option>
            </select>
            <select className="search-select">
              <option>프로젝트</option>
            </select>
            <div className="export-buttons">
              <button className="export-btn">출력</button>
              <button className="export-btn">엑셀 다운</button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="event-table">
            <thead>
              <tr>
                <th>no.</th>
                <th>프로젝트</th>
                <th>로그 일자</th>
                <th>ID</th>
                <th>프로그램</th>
                <th>처리</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.no}>
                  <td>{log.no}</td>
                  <td>{log.project}</td>
                  <td>{log.date}</td>
                  <td>{log.id}</td>
                  <td>{log.program}</td>
                  <td>{log.action}</td>
                  <td>{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventLog;
