import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ReservationStatus.css';

const ReservationStatus = () => {
  const { id } = useParams();
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
      <div className="status-content">
        <div className="status-main">
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
