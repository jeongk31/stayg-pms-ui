import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './StaffManagement.css';

const StaffManagement = () => {
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

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const staffData = [
    { project: '제주 A', name: '홍길동', attendance: [8, 0, 0, 0, 0, 0, 0, 0, 0], double: [3, 2, 1], ot: [16, 12, 4], additional: [0] },
  ];

  const getSundayClass = (day) => {
    const date = new Date(2025, 0, day);
    return date.getDay() === 0 ? 'sunday' : '';
  };

  const getSaturdayClass = (day) => {
    const date = new Date(2025, 0, day);
    return date.getDay() === 6 ? 'saturday' : '';
  };

  return (
    <div className="staff-management">
      <div className="staff-content">
        <div className="staff-main">
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

          <div className="staff-header">
            <h2>직원관리</h2>
            <div className="header-controls">
              <select className="control-select">
                <option>월 (드릴다운)</option>
              </select>
              <select className="control-select">
                <option>프로젝트 명 (드릴다운)</option>
              </select>
              <select className="control-select">
                <option>성명 (드릴다운)</option>
              </select>
              <div className="header-actions">
                <button className="export-btn">출력</button>
                <button className="export-btn">엑셀 다운</button>
              </div>
            </div>
          </div>

          <div className="table-actions">
            <button className="table-action-btn add">출석 추가</button>
            <button className="table-action-btn edit">테이블 수정</button>
          </div>

          <div className="table-container">
            <table className="staff-table">
              <thead>
                <tr>
                  <th rowSpan="2">프로젝트</th>
                  <th rowSpan="2">이름</th>
                  <th rowSpan="2">항목</th>
                  {days.map((day) => (
                    <th key={day} className={`${getSundayClass(day)} ${getSaturdayClass(day)}`}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staffData.map((staff, idx) => (
                  <React.Fragment key={idx}>
                    <tr>
                      <td rowSpan="4">{staff.project}</td>
                      <td rowSpan="4">{staff.name}</td>
                      <td>출근</td>
                      {staff.attendance.map((val, i) => (
                        <td key={i}>{val}</td>
                      ))}
                      {Array(22).fill(null).map((_, i) => (
                        <td key={`empty-${i}`}></td>
                      ))}
                    </tr>
                    <tr>
                      <td>더블</td>
                      {staff.double.map((val, i) => (
                        <td key={i}>{val}</td>
                      ))}
                      {Array(28).fill(null).map((_, i) => (
                        <td key={`empty-${i}`}></td>
                      ))}
                    </tr>
                    <tr>
                      <td>OT</td>
                      {staff.ot.map((val, i) => (
                        <td key={i}>{val}</td>
                      ))}
                      {Array(28).fill(null).map((_, i) => (
                        <td key={`empty-${i}`}></td>
                      ))}
                    </tr>
                    <tr>
                      <td>추가근무</td>
                      {staff.additional.map((val, i) => (
                        <td key={i}>{val}</td>
                      ))}
                      {Array(30).fill(null).map((_, i) => (
                        <td key={`empty-${i}`}></td>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
