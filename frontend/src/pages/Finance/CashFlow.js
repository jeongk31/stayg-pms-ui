import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Finance.css';

const CashFlow = () => {
  const [selectedMonth, setSelectedMonth] = useState('1월');
  const [selectedProject, setSelectedProject] = useState('프로젝트명');
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({});
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

  // 날짜 배열 생성 (1일 ~ 31일)
  const days = Array.from({ length: 31 }, (_, i) => {
    const day = String(i + 1).padStart(2, '0');
    return `2025-01-${day}`;
  });

  // 채널별 데이터 구조
  const channels = [
    { id: 'yanolja_m', name: '야놀자 M', colspan: 3 },
    { id: 'yanolja_h', name: '야놀자 H', colspan: 3 },
    { id: 'yeogi_h', name: '여기어때 H', colspan: 3 },
    { id: 'yeogi_m', name: '여기어때 M', colspan: 3 },
    { id: 'naver', name: '네이버', colspan: 3 },
    { id: 'agoda', name: '아고다', colspan: 3 },
    { id: 'booking', name: '부킹닷컴', colspan: 3 },
    { id: 'trip', name: '트립닷컴', colspan: 3 },
    { id: 'airbnb', name: '에어비앤비', colspan: 3 },
    { id: 'transfer', name: '이체', colspan: 3 },
    { id: 'card', name: '카드', colspan: 3 },
    { id: 'cash', name: '현금', colspan: 3 },
    { id: 'event', name: '이벤트', colspan: 3 },
    { id: 'etc', name: '기타', colspan: 3 },
  ];

  // 샘플 데이터
  const [cashFlowData, setCashFlowData] = useState({
    '2025-01-01': {
      yanolja_m: { sales: 200000, deposit: '', depositDate: '' },
      yanolja_h: { sales: 3000000, deposit: '', depositDate: '' },
      yeogi_h: { sales: 5800000, deposit: '', depositDate: '' },
      yeogi_m: { sales: 8600000, deposit: '', depositDate: '' },
      naver: { sales: 11400000, deposit: '', depositDate: '' },
      agoda: { sales: 14200000, deposit: '', depositDate: '' },
      booking: { sales: 17000000, deposit: '', depositDate: '' },
      trip: { sales: 19800000, deposit: '', depositDate: '' },
      airbnb: { sales: 22600000, deposit: '', depositDate: '' },
      transfer: { sales: 28200000, deposit: '', depositDate: '' },
      card: { sales: 31000000, deposit: '', depositDate: '' },
      cash: { sales: 25400000, deposit: '', depositDate: '' },
      event: { sales: 33800000, deposit: '', depositDate: '' },
      etc: { sales: 0, deposit: '', depositDate: '' },
    },
    '2025-01-02': {
      yanolja_m: { sales: 300000, deposit: '', depositDate: '' },
      yanolja_h: { sales: 4000000, deposit: '', depositDate: '' },
      yeogi_h: { sales: 7700000, deposit: '', depositDate: '' },
      yeogi_m: { sales: 11400000, deposit: '', depositDate: '' },
      naver: { sales: 15100000, deposit: '', depositDate: '' },
      agoda: { sales: 18800000, deposit: '', depositDate: '' },
      booking: { sales: 22500000, deposit: '', depositDate: '' },
      trip: { sales: 26200000, deposit: '', depositDate: '' },
      airbnb: { sales: 29900000, deposit: '', depositDate: '' },
      transfer: { sales: 37300000, deposit: '', depositDate: '' },
      card: { sales: 41000000, deposit: '', depositDate: '' },
      cash: { sales: 33600000, deposit: '', depositDate: '' },
      event: { sales: 44700000, deposit: '', depositDate: '' },
      etc: { sales: 0, deposit: '', depositDate: '' },
    },
    '2025-01-03': {
      yanolja_m: { sales: 200000, deposit: '', depositDate: '' },
      yanolja_h: { sales: 3000000, deposit: '', depositDate: '' },
      yeogi_h: { sales: 5800000, deposit: '', depositDate: '' },
      yeogi_m: { sales: 8600000, deposit: '', depositDate: '' },
      naver: { sales: 11400000, deposit: '', depositDate: '' },
      agoda: { sales: 14200000, deposit: '', depositDate: '' },
      booking: { sales: 17000000, deposit: '', depositDate: '' },
      trip: { sales: 19800000, deposit: '', depositDate: '' },
      airbnb: { sales: 22600000, deposit: '', depositDate: '' },
      transfer: { sales: 28200000, deposit: '', depositDate: '' },
      card: { sales: 31000000, deposit: '', depositDate: '' },
      cash: { sales: 25400000, deposit: '', depositDate: '' },
      event: { sales: 33800000, deposit: '', depositDate: '' },
      etc: { sales: 0, deposit: '', depositDate: '' },
    },
  });

  const handleInputChange = (date, channel, field, value) => {
    if (!isEditing) return;

    setTempData(prev => ({
      ...prev,
      [date]: {
        ...prev[date],
        [channel]: {
          ...prev[date]?.[channel],
          [field]: value
        }
      }
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(JSON.parse(JSON.stringify(cashFlowData)));
  };

  const handleSave = () => {
    setCashFlowData(tempData);
    setIsEditing(false);
    setTempData({});
    alert('저장되었습니다.');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempData({});
  };

  const getCurrentData = (date, channel) => {
    if (isEditing) {
      return tempData[date]?.[channel] || { sales: 0, deposit: '', depositDate: '' };
    }
    return cashFlowData[date]?.[channel] || { sales: 0, deposit: '', depositDate: '' };
  };

  return (
    <div className="finance-page">
      <div className="finance-content">
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

        <div className="finance-header">
          <div className="search-controls">
            <select className="search-select">
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <select className="search-select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
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
            <div className="export-buttons">
              <button className="export-btn">출력</button>
              <button className="export-btn">엑셀 다운</button>
            </div>
          </div>
        </div>

        <div className="table-actions">
          {!isEditing ? (
            <button className="table-action-btn edit" onClick={handleEdit}>수정</button>
          ) : (
            <>
              <button className="table-action-btn add" onClick={handleSave}>저장</button>
              <button className="table-action-btn" onClick={handleCancel}>취소</button>
            </>
          )}
        </div>

        <div className="cashflow-table-wrapper">
          <table className="cashflow-table">
            <thead>
              <tr>
                <th rowSpan="2" className="date-header">월</th>
                <th rowSpan="2" className="project-header">프로젝트명</th>
                {channels.map(channel => (
                  <th key={channel.id} colSpan={channel.colspan} className="channel-header">
                    {channel.name}
                  </th>
                ))}
              </tr>
              <tr>
                {channels.map(channel => (
                  <React.Fragment key={`sub-${channel.id}`}>
                    <th className="sub-header">매출</th>
                    <th className="sub-header">입금액<br/>(수기입력)</th>
                    <th className="sub-header">입금일<br/>(수기입력)</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.slice(0, 3).map(date => (
                <tr key={date}>
                  <td className="date-cell">{date}</td>
                  <td className="project-cell">{selectedProject}</td>
                  {channels.map(channel => {
                    const data = getCurrentData(date, channel.id);
                    return (
                      <React.Fragment key={`${date}-${channel.id}`}>
                        <td className="amount-cell">{data.sales ? data.sales.toLocaleString() : ''}</td>
                        <td className="input-cell">
                          {isEditing ? (
                            <input
                              type="text"
                              className="deposit-input"
                              value={data.deposit}
                              onChange={(e) => handleInputChange(date, channel.id, 'deposit', e.target.value)}
                              placeholder=""
                            />
                          ) : (
                            <span className="readonly-text">{data.deposit}</span>
                          )}
                        </td>
                        <td className="input-cell">
                          {isEditing ? (
                            <input
                              type="text"
                              className="date-input"
                              value={data.depositDate}
                              onChange={(e) => handleInputChange(date, channel.id, 'depositDate', e.target.value)}
                              placeholder=""
                            />
                          ) : (
                            <span className="readonly-text">{data.depositDate}</span>
                          )}
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              ))}
              {/* 나머지 날짜들 */}
              {days.slice(3).map(date => (
                <tr key={date}>
                  <td className="date-cell">{date}</td>
                  <td className="project-cell">{selectedProject}</td>
                  {channels.map(channel => {
                    const data = getCurrentData(date, channel.id);
                    return (
                      <React.Fragment key={`${date}-${channel.id}`}>
                        <td className="amount-cell">{data.sales ? data.sales.toLocaleString() : ''}</td>
                        <td className="input-cell">
                          {isEditing ? (
                            <input
                              type="text"
                              className="deposit-input"
                              value={data.deposit}
                              onChange={(e) => handleInputChange(date, channel.id, 'deposit', e.target.value)}
                              placeholder=""
                            />
                          ) : (
                            <span className="readonly-text">{data.deposit}</span>
                          )}
                        </td>
                        <td className="input-cell">
                          {isEditing ? (
                            <input
                              type="text"
                              className="date-input"
                              value={data.depositDate}
                              onChange={(e) => handleInputChange(date, channel.id, 'depositDate', e.target.value)}
                              placeholder=""
                            />
                          ) : (
                            <span className="readonly-text">{data.depositDate}</span>
                          )}
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              ))}
              {/* 합계 행 */}
              <tr className="total-row">
                <td colSpan="2" className="total-label">합계</td>
                {channels.map(channel => {
                  const dataSource = isEditing ? tempData : cashFlowData;
                  const total = Object.keys(dataSource).reduce((sum, date) => {
                    return sum + (dataSource[date]?.[channel.id]?.sales || 0);
                  }, 0);
                  return (
                    <React.Fragment key={`total-${channel.id}`}>
                      <td className="amount-cell total-amount">{total > 0 ? total.toLocaleString() : ''}</td>
                      <td className="input-cell">-</td>
                      <td className="input-cell">-</td>
                    </React.Fragment>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
