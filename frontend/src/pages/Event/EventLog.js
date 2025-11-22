import React, { useState } from 'react';
import './EventLog.css';

const EventLog = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchType, setSearchType] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchDistrict, setSearchDistrict] = useState('');
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);

  const searchResults = [
    { id: 1, name: '프로젝트 A - 그랜드 호텔', type: '호텔', city: '서울', district: '강남구' },
    { id: 2, name: '프로젝트 B - 오션 펜션', type: '펜션', city: '강릉', district: '강동면' },
    { id: 3, name: '프로젝트 C - 캠핑장', type: '캠핑', city: '양평', district: '서종면' },
  ];

  const handleSearch = () => {
    setShowResults(true);
  };

  const selectProperty = (property) => {
    setShowResults(false);
    setSearchExpanded(false);
  };

  const logs = [
    { no: 1, project: '프로젝트 A', date: '2025-01-15', id: 'admin01', program: 'PMS', action: '로그인', ip: '192.168.1.1' },
    { no: 2, project: '프로젝트 A', date: '2025-01-15', id: 'admin01', program: '판매일보', action: '데이터 수정', ip: '192.168.1.1' },
  ];

  return (
    <div className="event-log">
      <div className="event-content">
        <div className="property-search-bar">
          <button
            className="search-toggle-btn"
            onClick={() => setSearchExpanded(!searchExpanded)}
          >
            {searchExpanded ? '▲ 검색 닫기' : '▼ 프로젝트 검색'}
          </button>

          {searchExpanded && (
            <div className="search-expanded">
              <div className="search-filters">
                <select
                  className="search-filter-select"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="">타입 선택</option>
                  <option value="호텔">호텔</option>
                  <option value="펜션">펜션</option>
                  <option value="캠핑">캠핑</option>
                  <option value="F&B">F&B</option>
                  <option value="기타">기타</option>
                </select>

                <select
                  className="search-filter-select"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                >
                  <option value="">시 선택</option>
                  <option value="서울">서울</option>
                  <option value="강릉">강릉</option>
                  <option value="양평">양평</option>
                </select>

                <select
                  className="search-filter-select"
                  value={searchDistrict}
                  onChange={(e) => setSearchDistrict(e.target.value)}
                >
                  <option value="">구 선택</option>
                  <option value="강남구">강남구</option>
                  <option value="강동면">강동면</option>
                  <option value="서종면">서종면</option>
                </select>

                <input
                  type="text"
                  className="search-text-input"
                  placeholder="프로젝트명 검색"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <button className="search-btn" onClick={handleSearch}>
                  🔍
                </button>
              </div>

              {showResults && (
                <div className="search-results">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="search-result-item"
                      onClick={() => selectProperty(result)}
                    >
                      <span className="result-name">{result.name}</span>
                      <span className="result-details">{result.type} | {result.city} {result.district}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="event-header">
          <div className="search-controls">
            <select className="search-select">
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <select className="search-select">
              <option>1월</option>
              <option>2월</option>
              <option>3월</option>
              <option>4월</option>
              <option>5월</option>
              <option>6월</option>
              <option>7월</option>
              <option>8월</option>
              <option>9월</option>
              <option>10월</option>
              <option>11월</option>
              <option>12월</option>
            </select>
            <select className="search-select">
              <option>일</option>
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
