import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SalesReport.css';

const SalesReport = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('stay');
  const [showReport, setShowReport] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
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

  const salesData = [
    { no: 1, project: '프로젝트 A', status: '예약', room: '101', channel: '야놀자 H', checkIn: '2025-01-15', checkOut: '2025-01-16', period: '1N', guest: '홍길동', payment: '온라인', amount: '120,000', amenity: '워킹', transport: '차량', vehicle: '12가3456', finalPayment: '카드', finalAmount: '10,000', note: '' },
    { no: 2, project: '프로젝트 A', status: '입실', room: '102', channel: '야놀자 M', checkIn: '2025-01-15', checkOut: '2025-01-16', period: '1N', guest: '김철수', payment: '카드', amount: '100,000', amenity: '이체', transport: '차량', vehicle: '34나5678', finalPayment: '이체', finalAmount: '5,000', note: '' },
    { no: 3, project: '프로젝트 B', status: '입실', room: '103', channel: '여기어때 H', checkIn: '2025-01-15', checkOut: '2025-01-17', period: '2N', guest: '이영희', payment: '카드', amount: '200,000', amenity: '이체', transport: '차량', vehicle: '56다7890', finalPayment: '이체', finalAmount: '0', note: '' },
    { no: 4, project: '프로젝트 C', status: '예약', room: '104', channel: '여기어때 M', checkIn: '2025-01-16', checkOut: '2025-01-19', period: '3N', guest: '박민수', payment: '이체', amount: '300,000', amenity: '현금', transport: '이벤트', vehicle: '', finalPayment: '현금', finalAmount: '0', note: '' },
    { no: 5, project: '프로젝트 A', status: '입실', room: '105', channel: '네이버', checkIn: '2025-01-15', checkOut: '2025-01-15', period: '', guest: '최영수', payment: '현금', amount: '80,000', amenity: '이벤트', transport: '선결제', vehicle: '', finalPayment: '선결제', finalAmount: '0', note: '' },
    { no: 6, project: '프로젝트 B', status: '예약', room: '201', channel: '아고다', checkIn: '2025-01-16', checkOut: '2025-01-17', period: '1N', guest: '정하나', payment: '선결제', amount: '150,000', amenity: '', transport: '', vehicle: '', finalPayment: '', finalAmount: '', note: '' },
  ];

  const hourlyData = [
    { no: 1, project: '프로젝트 A', status: '예약', room: '201', channel: '야놀자 H', checkIn: '2025-01-15 14:00', checkOut: '2025-01-15 18:00', guest: '김대실', payment: '온라인', amount: '50,000', amenity: '카드', transport: '워킹', vehicle: '', finalPayment: '카드', finalAmount: '0', note: '' },
    { no: 2, project: '프로젝트 B', status: '입실', room: '202', channel: '야놀자 M', checkIn: '2025-01-15 15:00', checkOut: '2025-01-15 19:00', guest: '이단기', payment: '카드', amount: '45,000', amenity: '이체', transport: '차량', vehicle: '78마9012', finalPayment: '이체', finalAmount: '0', note: '' },
    { no: 3, project: '프로젝트 A', status: '입실', room: '203', channel: '여기어때 H', checkIn: '2025-01-15 16:00', checkOut: '2025-01-15 20:00', guest: '박시간', payment: '카드', amount: '50,000', amenity: '이체', transport: '차량', vehicle: '90바1234', finalPayment: '현금', finalAmount: '5,000', note: '' },
    { no: 4, project: '프로젝트 C', status: '입실', room: '204', channel: '여기어때 M', checkIn: '2025-01-15 17:00', checkOut: '2025-01-15 21:00', guest: '최휴식', payment: '이체', amount: '40,000', amenity: '현금', transport: '이벤트', vehicle: '', finalPayment: '현금', finalAmount: '0', note: '' },
    { no: 5, project: '프로젝트 A', status: '예약', room: '205', channel: '네이버', checkIn: '2025-01-15 18:00', checkOut: '2025-01-15 22:00', guest: '김편히', payment: '현금', amount: '45,000', amenity: '이벤트', transport: '선결제', vehicle: '', finalPayment: '선결제', finalAmount: '0', note: '' },
  ];

  const allData = activeTab === 'stay' ? salesData : hourlyData;
  const currentData = projectFilter === 'all'
    ? allData
    : allData.filter(item => item.project === projectFilter);

  return (
    <div className="sales-report">
      <div className="sales-content">
        <div className="sales-main">
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

          <div className="sales-header">
            <div>
              <h2>판매/예약 리스트 대시보드</h2>
            </div>
            <div className="header-actions">
              <button className="export-btn">출력</button>
              <button className="export-btn">엑셀 다운</button>
            </div>
          </div>

          <div className="inventory-info">
            당일 실시간 타입별 재고량: 스탠다드 10/5, 디럭스 10/6, 스위트 10/7, 로얄스위트 10/8, 트윈 10/1
          </div>

          <div className="sales-tabs">
            <button
              className={activeTab === 'stay' ? 'sales-tab active' : 'sales-tab'}
              onClick={() => setActiveTab('stay')}
            >
              S숙박(1번 페이지)
            </button>
            <button
              className={activeTab === 'hourly' ? 'sales-tab active' : 'sales-tab'}
              onClick={() => setActiveTab('hourly')}
            >
              U대실(2번페이지)
            </button>
            <button className="send-btn">전송</button>
          </div>

          <div className="sales-summary">
            <div className="summary-row">
              <strong>판매</strong>
              <div className="summary-values">
                <div><strong>U</strong> 온라인 120,000 / 카드 10,000 / 현 100,000</div>
                <div><strong>S</strong> 온라인 1,200,000 / 카드 100,000 / 현 1,000,000</div>
              </div>
            </div>
            <div className="summary-actions">
              <button className="action-btn" onClick={() => setShowReport(true)}>리포트</button>
              <button className="action-btn">경비</button>
              <button className="action-btn">매출</button>
            </div>
          </div>

          <div className="table-actions">
            <button className="table-action-btn add">예약 추가</button>
            <button className="table-action-btn edit">예약 수정</button>
            <button className="table-action-btn delete">예약 삭제</button>
          </div>

          <div className="table-container">
            <table className="sales-table">
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>프로젝트</th>
                  <th>객실 상태</th>
                  <th>호실</th>
                  <th>채널</th>
                  <th>C/I</th>
                  <th>C/O</th>
                  {activeTab === 'stay' && <th>기간</th>}
                  <th>예약자</th>
                  <th>결제수단</th>
                  <th>금액</th>
                  <th>어메니티</th>
                  <th>이동수단</th>
                  <th>차량번호</th>
                  <th>결제수단</th>
                  <th>금액</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr key={row.no}>
                    <td>{row.no}</td>
                    <td>{row.project}</td>
                    <td>{row.status}</td>
                    <td>{row.room}</td>
                    <td>{row.channel}</td>
                    <td>{row.checkIn}</td>
                    <td>{row.checkOut}</td>
                    {activeTab === 'stay' && <td>{row.period}</td>}
                    <td>{row.guest}</td>
                    <td>{row.payment}</td>
                    <td>{row.amount}</td>
                    <td>{row.amenity}</td>
                    <td>{row.transport}</td>
                    <td>{row.vehicle}</td>
                    <td>{row.finalPayment}</td>
                    <td>{row.finalAmount}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showReport && (
        <div className="modal-overlay" onClick={() => setShowReport(false)}>
          <div className="report-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowReport(false)}>×</button>
            <h2 className="report-title">일일 매출 요약 보고서</h2>

            <div className="report-content">
              <div className="report-header-info">
                <div>날짜: 2025년 1월 15일</div>
                <div>프로젝트: 프로젝트 A</div>
                <div>근무자: 홍길동</div>
              </div>

              <div className="report-section">
                <h3>매출 요약</h3>
                <table className="report-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>건수</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>숙박(S)</td>
                      <td>6건</td>
                      <td>1,000,000원</td>
                    </tr>
                    <tr>
                      <td>대실(U)</td>
                      <td>5건</td>
                      <td>230,000원</td>
                    </tr>
                    <tr className="total-row">
                      <td><strong>합계</strong></td>
                      <td><strong>11건</strong></td>
                      <td><strong>1,230,000원</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="report-section">
                <h3>결제 수단별</h3>
                <table className="report-table">
                  <tbody>
                    <tr>
                      <td>온라인</td>
                      <td>1,320,000원</td>
                    </tr>
                    <tr>
                      <td>카드</td>
                      <td>110,000원</td>
                    </tr>
                    <tr>
                      <td>이체</td>
                      <td>0원</td>
                    </tr>
                    <tr>
                      <td>현금</td>
                      <td>1,100,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="report-section">
                <h3>채널별 매출</h3>
                <table className="report-table">
                  <tbody>
                    <tr><td>야놀자 H</td><td>170,000원</td></tr>
                    <tr><td>야놀자 M</td><td>145,000원</td></tr>
                    <tr><td>여기어때 H</td><td>250,000원</td></tr>
                    <tr><td>여기어때 M</td><td>340,000원</td></tr>
                    <tr><td>네이버</td><td>125,000원</td></tr>
                    <tr><td>아고다</td><td>150,000원</td></tr>
                    <tr><td>워크인</td><td>50,000원</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="report-actions">
                <button className="export-btn" onClick={() => window.print()}>인쇄</button>
                <button className="export-btn">PDF 다운로드</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesReport;
