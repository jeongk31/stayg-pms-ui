import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Finance.css';

const Cost = () => {
  const [viewMode, setViewMode] = useState('monthly'); // 'detail', 'monthly' or 'yearly'
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [costType, setCostType] = useState('fixed'); // 'fixed' or 'variable'
  const [selectedItem, setSelectedItem] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [vendor, setVendor] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cycle, setCycle] = useState('');
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

  const costData = [
    { month: '2025-01', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-02', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-03', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-04', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-05', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-06', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-07', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-08', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-09', fixed: 200000, variable: 300000, total: 500000 },
    { month: '2025-10', fixed: 200000, variable: 300000, total: 500000 },
  ];

  const fixedCostItemsList = [
    '휴대폰', 'CCTV', 'TV인터넷', 'OTT', '방역', '엘리베이터 관리',
    '전기안전관리', '소방안전관리', '화재보험', '재난보험', '승강기보험',
    '바이럴마케팅', '야놀자광고', '여기어때광고', '키폰', 'CMS', 'PMS',
    '관리비', '임대료', '단말기'
  ];

  const variableCostItemsList = [
    '세탁비', '비품(유통)', '가스요금', '전기요금', '수도요금', '급여',
    '청소알바', '쿠팡', '스낵바', '각종수수료', '청소소모품', '시설수선비',
    '사무소모품', '프런트알바', '4대보험', '기타수당', '부가세', '소득세',
    '면허세', '린넨'
  ];

  // 월간 요약 데이터 (23페이지)
  const monthlySummary = {
    fixed: [
      { name: 'TV인터넷', amount: 200000 },
      { name: 'OTT', amount: 300000 },
      { name: '방역', amount: 30000 },
      { name: '엘리베이터 관리', amount: 20000 },
    ],
    variable: [
      { name: '세탁비', amount: 0 },
      { name: '비품(유통)', amount: 20000 },
      { name: '가스요금', amount: 20000 },
      { name: '전기요금', amount: 20000 },
      { name: '수도요금', amount: 20000 },
      { name: '급여', amount: 20000 },
    ],
  };

  const [costItems, setCostItems] = useState([
    { id: 1, date: '2025-01-01', type: '고정비', item: 'TV인터넷', vendor: 'KT', paymentMethod: '카드', amount: 200000, cycle: '월' },
    { id: 2, date: '2025-01-01', type: '고정비', item: 'OTT', vendor: '넷플릭스', paymentMethod: '카드', amount: 300000, cycle: '월' },
    { id: 3, date: '2025-01-02', type: '유동비', item: '세탁비', vendor: '세탁업체', paymentMethod: '이체', amount: 20000, cycle: '주' },
  ]);

  const fixedCostItems = [
    { name: '휴대폰', amount: 150000 },
    { name: 'CCTV', amount: 120000 },
    { name: 'TV인터넷', amount: 300000 },
    { name: 'OTT', amount: 50000 },
    { name: '방역', amount: 200000 },
    { name: '엘리베이터 관리', amount: 180000 },
    { name: '전기안전관리', amount: 100000 },
    { name: '소방안전관리', amount: 150000 },
    { name: '화재보험', amount: 250000 },
    { name: '재난보험', amount: 200000 },
    { name: '승강기보험', amount: 150000 },
    { name: '바이럴마케팅', amount: 500000 },
    { name: '야놀자광고', amount: 800000 },
    { name: '여기어때광고', amount: 800000 },
    { name: '키폰', amount: 300000 },
    { name: 'CMS', amount: 150000 },
    { name: 'PMS', amount: 200000 },
    { name: '관리비', amount: 1500000 },
    { name: '임대료', amount: 5000000 },
    { name: '단말기', amount: 100000 },
  ];

  const variableCostItems = [
    { name: '세탁비', amount: 800000 },
    { name: '비품(유통)', amount: 300000 },
    { name: '가스요금', amount: 250000 },
    { name: '전기요금', amount: 1500000 },
    { name: '수도요금', amount: 400000 },
    { name: '급여', amount: 3000000 },
    { name: '청소알바', amount: 1200000 },
    { name: '쿠팡', amount: 200000 },
    { name: '스낵바', amount: 150000 },
    { name: '각종수수료', amount: 500000 },
    { name: '청소소모품', amount: 300000 },
    { name: '시설수선비', amount: 400000 },
    { name: '사무소모품', amount: 150000 },
    { name: '프런트알바', amount: 800000 },
    { name: '4대보험', amount: 900000 },
    { name: '기타수당', amount: 200000 },
    { name: '부가세', amount: 600000 },
    { name: '소득세', amount: 400000 },
    { name: '면허세', amount: 50000 },
    { name: '린넨', amount: 300000 },
  ];

  const openAddModal = () => {
    setShowAddModal(true);
    setCostType('fixed');
    setSelectedItem('');
    setItemAmount('');
    setVendor('');
    setPaymentMethod('');
    setCycle('');
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const handleAddCost = () => {
    const newItem = {
      id: costItems.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: costType === 'fixed' ? '고정비' : '유동비',
      item: selectedItem,
      vendor: vendor,
      paymentMethod: paymentMethod,
      amount: parseInt(itemAmount) || 0,
      cycle: cycle
    };
    setCostItems([...costItems, newItem]);
    closeAddModal();
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  const fixedTotal = calculateTotal(monthlySummary.fixed);
  const variableTotal = calculateTotal(monthlySummary.variable);
  const grandTotal = fixedTotal + variableTotal;

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

        <div className="view-mode-tabs">
          <button
            className={`view-tab ${viewMode === 'detail' ? 'active' : ''}`}
            onClick={() => setViewMode('detail')}
          >
            세부내역
          </button>
          <button
            className={`view-tab ${viewMode === 'monthly' ? 'active' : ''}`}
            onClick={() => setViewMode('monthly')}
          >
            월
          </button>
          <button
            className={`view-tab ${viewMode === 'yearly' ? 'active' : ''}`}
            onClick={() => setViewMode('yearly')}
          >
            연간
          </button>
        </div>

        {viewMode === 'detail' ? (
          <>
            <div className="table-actions">
              <button className="table-action-btn add" onClick={openAddModal}>추가</button>
              <button className="table-action-btn edit">수정</button>
            </div>

            <div className="table-container">
              <table className="finance-table">
                <thead>
                  <tr>
                    <th>날짜</th>
                    <th>항목</th>
                    <th>업체명</th>
                    <th>지불수단</th>
                    <th>금액</th>
                    <th>주기</th>
                  </tr>
                </thead>
                <tbody>
                  {costItems.map((item) => (
                    <tr key={item.id}>
                      <td className="date-cell">{item.date}</td>
                      <td>{item.item}</td>
                      <td>{item.vendor}</td>
                      <td className="center-cell">{item.paymentMethod}</td>
                      <td className="amount-cell">{item.amount.toLocaleString()}</td>
                      <td className="center-cell">{item.cycle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : viewMode === 'monthly' ? (
          <>
            <div className="table-container">
              <table className="finance-table">
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>항목</th>
                    <th>금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cost-category-row">
                    <td rowSpan={monthlySummary.fixed.length + 1} className="category-cell">고정비</td>
                  </tr>
                  {monthlySummary.fixed.map((item, index) => (
                    <tr key={`fixed-${index}`}>
                      <td>{item.name}</td>
                      <td className="amount-cell">{item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="cost-subtotal-row">
                    <td>소계</td>
                    <td className="amount-cell">{fixedTotal.toLocaleString()}</td>
                  </tr>
                  <tr className="cost-category-row">
                    <td rowSpan={monthlySummary.variable.length + 1} className="category-cell">유동비</td>
                  </tr>
                  {monthlySummary.variable.map((item, index) => (
                    <tr key={`variable-${index}`}>
                      <td>{item.name}</td>
                      <td className="amount-cell">{item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="cost-subtotal-row">
                    <td>소계</td>
                    <td className="amount-cell">{variableTotal.toLocaleString()}</td>
                  </tr>
                  <tr className="cost-total-row">
                    <td colSpan="2">total</td>
                    <td className="amount-cell">{grandTotal.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="table-container">
              <table className="finance-table">
                <thead>
                  <tr>
                    <th>월</th>
                    <th>고정비</th>
                    <th>유동비</th>
                    <th>합계</th>
                  </tr>
                </thead>
                <tbody>
                  {costData.map((data) => (
                    <tr key={data.month}>
                      <td className="month-cell">{data.month}</td>
                      <td className="amount-cell">{data.fixed.toLocaleString()}</td>
                      <td className="amount-cell">{data.variable.toLocaleString()}</td>
                      <td className="amount-cell total-amount">{data.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={closeAddModal}>
          <div className="cost-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAddModal}>×</button>

            <div className="cost-detail-title">
              원가 항목 추가
            </div>

            <div className="cost-detail-content">
              <div className="form-group">
                <label>구분</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="fixed"
                      checked={costType === 'fixed'}
                      onChange={(e) => {
                        setCostType(e.target.value);
                        setSelectedItem('');
                      }}
                    />
                    고정비
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="variable"
                      checked={costType === 'variable'}
                      onChange={(e) => {
                        setCostType(e.target.value);
                        setSelectedItem('');
                      }}
                    />
                    유동비
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>항목</label>
                <select
                  className="form-select"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                >
                  <option value="">선택하세요</option>
                  {(costType === 'fixed' ? fixedCostItemsList : variableCostItemsList).map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>업체명</label>
                <input
                  type="text"
                  className="form-input"
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  placeholder="업체명을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label>지불수단</label>
                <select
                  className="form-select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">선택하세요</option>
                  <option value="카드">카드</option>
                  <option value="이체">이체</option>
                  <option value="현금">현금</option>
                </select>
              </div>

              <div className="form-group">
                <label>금액</label>
                <input
                  type="number"
                  className="form-input"
                  value={itemAmount}
                  onChange={(e) => setItemAmount(e.target.value)}
                  placeholder="금액을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label>주기</label>
                <select
                  className="form-select"
                  value={cycle}
                  onChange={(e) => setCycle(e.target.value)}
                >
                  <option value="">선택하세요</option>
                  <option value="일">일</option>
                  <option value="주">주</option>
                  <option value="월">월</option>
                  <option value="년">년</option>
                </select>
              </div>
            </div>

            <div className="cost-detail-actions">
              <button className="action-btn" onClick={handleAddCost}>추가</button>
              <button className="action-btn secondary" onClick={closeAddModal}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cost;
