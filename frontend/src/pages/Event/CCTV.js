import React from 'react';
import './EventLog.css';

const CCTV = () => {
  const cctvEvents = [
    { no: 1, project: '프로젝트 A', date: '2025-01-15', event: '현금', video: '링크' },
    { no: 2, project: '프로젝트 B', date: '2025-01-14', event: '폭동', video: '링크' },
    { no: 3, project: '프로젝트 C', date: '2025-01-13', event: '화재', video: '링크' },
  ];

  return (
    <div className="event-log">
      <div className="event-nav">
        <button className="event-nav-item">이벤트</button>
        <button className="event-nav-item">사용자 로그</button>
        <button className="event-nav-item active">CCTV</button>
      </div>

      <div className="event-content">
        <div className="event-header">
          <h2>이벤트 &gt; CCTV</h2>
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
              <option>이벤트</option>
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
                <th>이벤트</th>
                <th>영상 보기</th>
              </tr>
            </thead>
            <tbody>
              {cctvEvents.map((event) => (
                <tr key={event.no}>
                  <td>{event.no}</td>
                  <td>{event.project}</td>
                  <td>{event.date}</td>
                  <td>{event.event}</td>
                  <td>
                    <button className="video-btn">{event.video}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CCTV;
