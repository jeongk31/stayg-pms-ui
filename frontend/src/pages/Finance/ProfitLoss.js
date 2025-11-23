import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Finance.css';

const ProfitLoss = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
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

  const profitLossData = [
    { month: '2025-01', revenue: 221000000, cost: 11250000, profit: 209750000, margin: '94.9%' },
    { month: '2025-02', revenue: 292500000, cost: 11250000, profit: 281250000, margin: '96.2%' },
    { month: '2025-03', revenue: 221000000, cost: 11250000, profit: 209750000, margin: '94.9%' },
    { month: '2025-04', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-05', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-06', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-07', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-08', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-09', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-10', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-11', revenue: 0, cost: 0, profit: 0, margin: '-' },
    { month: '2025-12', revenue: 0, cost: 0, profit: 0, margin: '-' },
  ];

  const monthlyBreakdown = {
    '2025-01': {
      revenue: 221000000,
      cost: 11250000,
      profit: 209750000,
      revenueDetail: [
        { channel: '야놀자 M', amount: 200000 },
        { channel: '야놀자 H', amount: 3000000 },
        { channel: '여기어때 H', amount: 5800000 },
        { channel: '여기어때 M', amount: 8600000 },
        { channel: '네이버', amount: 11400000 },
        { channel: '아고다', amount: 14200000 },
        { channel: '부킹닷컴', amount: 17000000 },
        { channel: '트립닷컴', amount: 19800000 },
        { channel: '에어비앤비', amount: 22600000 },
        { channel: '현금', amount: 25400000 },
        { channel: '이체', amount: 28200000 },
        { channel: '카드', amount: 31000000 },
        { channel: '이벤트', amount: 33800000 },
      ],
      costDetail: {
        fixed: 5000000,
        variable: 6250000,
      }
    }
  };

  const handleRowClick = (month) => {
    if (monthlyBreakdown[month]) {
      setSelectedMonth(month);
      setShowDetailModal(true);
    }
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setSelectedMonth(null);
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
            <select className="search-select">
              <option>연간</option>
              <option>월</option>
            </select>
            <div className="export-buttons">
              <button className="export-btn">출력</button>
              <button className="export-btn">엑셀 다운</button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="finance-table">
            <thead>
              <tr>
                <th>기간</th>
                <th>매출</th>
                <th>원가</th>
                <th>영업이익</th>
                <th>이익률</th>
              </tr>
            </thead>
            <tbody>
              {profitLossData.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(row.month)}
                  style={{cursor: row.revenue > 0 ? 'pointer' : 'default'}}
                >
                  <td>{row.month}</td>
                  <td>{row.revenue > 0 ? row.revenue.toLocaleString() : '-'}</td>
                  <td>{row.cost > 0 ? row.cost.toLocaleString() : '-'}</td>
                  <td className={row.profit > 0 ? 'profit-positive' : ''}>{row.profit > 0 ? row.profit.toLocaleString() : '-'}</td>
                  <td>{row.margin}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td><strong>연간 합계</strong></td>
                <td><strong>734,500,000</strong></td>
                <td><strong>33,750,000</strong></td>
                <td className="grand-total"><strong>700,750,000</strong></td>
                <td><strong>95.4%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="profit-summary">
          <div className="summary-card revenue-card">
            <h3>총 매출</h3>
            <div className="summary-amount">₩734,500,000</div>
            <div className="summary-period">2025년 1-3월</div>
          </div>
          <div className="summary-card cost-card">
            <h3>총 원가</h3>
            <div className="summary-amount">₩33,750,000</div>
            <div className="summary-period">2025년 1-3월</div>
          </div>
          <div className="summary-card profit-card">
            <h3>순이익</h3>
            <div className="summary-amount profit">₩700,750,000</div>
            <div className="summary-period">이익률 95.4%</div>
          </div>
        </div>
      </div>

      {showDetailModal && selectedMonth && monthlyBreakdown[selectedMonth] && (
        <div className="modal-overlay" onClick={closeDetailModal}>
          <div className="profit-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDetailModal}>×</button>

            <div className="profit-detail-title">
              {selectedMonth} 손익 상세 내역
            </div>

            <div className="profit-detail-header">
              <div>프로젝트: 프로젝트명</div>
              <div>기간: {selectedMonth}</div>
              <div>담당자: 홍길동</div>
            </div>

            <div className="profit-detail-content">
              <div className="profit-section">
                <h3>매출 내역</h3>
                <table className="profit-detail-table">
                  <thead>
                    <tr>
                      <th>채널</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyBreakdown[selectedMonth].revenueDetail.map((item, index) => (
                      <tr key={index}>
                        <td>{item.channel}</td>
                        <td>{item.amount.toLocaleString()}원</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td><strong>매출 합계</strong></td>
                      <td><strong>{monthlyBreakdown[selectedMonth].revenue.toLocaleString()}원</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="profit-section">
                <h3>원가 내역</h3>
                <table className="profit-detail-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>고정비</td>
                      <td>{monthlyBreakdown[selectedMonth].costDetail.fixed.toLocaleString()}원</td>
                    </tr>
                    <tr>
                      <td>유동비</td>
                      <td>{monthlyBreakdown[selectedMonth].costDetail.variable.toLocaleString()}원</td>
                    </tr>
                    <tr className="total-row">
                      <td><strong>원가 합계</strong></td>
                      <td><strong>{monthlyBreakdown[selectedMonth].cost.toLocaleString()}원</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="profit-calculation">
                <div className="calculation-row">
                  <span>매출</span>
                  <span>{monthlyBreakdown[selectedMonth].revenue.toLocaleString()}원</span>
                </div>
                <div className="calculation-row">
                  <span>- 원가</span>
                  <span>{monthlyBreakdown[selectedMonth].cost.toLocaleString()}원</span>
                </div>
                <div className="calculation-row total">
                  <span><strong>= 영업이익</strong></span>
                  <span className="profit-amount"><strong>{monthlyBreakdown[selectedMonth].profit.toLocaleString()}원</strong></span>
                </div>
                <div className="calculation-row margin">
                  <span>이익률</span>
                  <span>{((monthlyBreakdown[selectedMonth].profit / monthlyBreakdown[selectedMonth].revenue) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="profit-detail-actions">
              <button className="action-btn">출력</button>
              <button className="action-btn">PDF 다운로드</button>
              <button className="action-btn secondary" onClick={closeDetailModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitLoss;
