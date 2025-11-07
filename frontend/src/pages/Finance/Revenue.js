import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Finance.css';

const Revenue = () => {
  const [viewMode, setViewMode] = useState('yearly');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonthForCompare, setSelectedMonthForCompare] = useState('2월');

  const yearlyData = [
    { month: '1월', yanolja_m: 200000, yanolja_h: 3000000, yogiyo_h: 5800000, yogiyo_m: 8600000, naver: 11400000, agoda: 14200000, booking: 17000000, trip: 19800000, airbnb: 22600000, cash: 25400000, transfer: 28200000, card: 31000000, event: 33800000, total: 221000000 },
    { month: '2월', yanolja_m: 300000, yanolja_h: 4000000, yogiyo_h: 7700000, yogiyo_m: 11400000, naver: 15100000, agoda: 18800000, booking: 22500000, trip: 26200000, airbnb: 29900000, cash: 33600000, transfer: 37300000, card: 41000000, event: 44700000, total: 292500000 },
    { month: '3월', yanolja_m: 200000, yanolja_h: 3000000, yogiyo_h: 5800000, yogiyo_m: 8600000, naver: 11400000, agoda: 14200000, booking: 17000000, trip: 19800000, airbnb: 22600000, cash: 25400000, transfer: 28200000, card: 31000000, event: 33800000, total: 221000000 },
  ];

  const channels = [
    '야놀자 M', '야놀자 H', '여기어때 H', '여기어때 M', '네이버', '아고다',
    '부킹닷컴', '트립닷컴', '에어비앤비', '현금', '이체', '카드', '이벤트'
  ];

  const monthlyDetailData = {
    '1월': [
      { channel: '야놀자 M', stayCount: 2, stayAmount: 150000, hourlyCount: 1, hourlyAmount: 50000, total: 200000, prevMonth: 180000, change: '+11.1%' },
      { channel: '야놀자 H', stayCount: 15, stayAmount: 2250000, hourlyCount: 15, hourlyAmount: 750000, total: 3000000, prevMonth: 2800000, change: '+7.1%' },
      { channel: '여기어때 H', stayCount: 30, stayAmount: 4500000, hourlyCount: 26, hourlyAmount: 1300000, total: 5800000, prevMonth: 5500000, change: '+5.5%' },
      { channel: '여기어때 M', stayCount: 45, stayAmount: 6750000, hourlyCount: 38, hourlyAmount: 1850000, total: 8600000, prevMonth: 8200000, change: '+4.9%' },
      { channel: '네이버', stayCount: 60, stayAmount: 9000000, hourlyCount: 48, hourlyAmount: 2400000, total: 11400000, prevMonth: 11000000, change: '+3.6%' },
      { channel: '아고다', stayCount: 75, stayAmount: 11250000, hourlyCount: 60, hourlyAmount: 2950000, total: 14200000, prevMonth: 13800000, change: '+2.9%' },
      { channel: '부킹닷컴', stayCount: 90, stayAmount: 13500000, hourlyCount: 70, hourlyAmount: 3500000, total: 17000000, prevMonth: 16500000, change: '+3.0%' },
      { channel: '트립닷컴', stayCount: 105, stayAmount: 15750000, hourlyCount: 81, hourlyAmount: 4050000, total: 19800000, prevMonth: 19200000, change: '+3.1%' },
      { channel: '에어비앤비', stayCount: 120, stayAmount: 18000000, hourlyCount: 92, hourlyAmount: 4600000, total: 22600000, prevMonth: 22000000, change: '+2.7%' },
      { channel: '현금', stayCount: 135, stayAmount: 20250000, hourlyCount: 103, hourlyAmount: 5150000, total: 25400000, prevMonth: 25000000, change: '+1.6%' },
      { channel: '이체', stayCount: 150, stayAmount: 22500000, hourlyCount: 114, hourlyAmount: 5700000, total: 28200000, prevMonth: 27800000, change: '+1.4%' },
      { channel: '카드', stayCount: 165, stayAmount: 24750000, hourlyCount: 125, hourlyAmount: 6250000, total: 31000000, prevMonth: 30500000, change: '+1.6%' },
      { channel: '이벤트', stayCount: 180, stayAmount: 27000000, hourlyCount: 136, hourlyAmount: 6800000, total: 33800000, prevMonth: 33000000, change: '+2.4%' },
    ],
    '2월': [
      { channel: '야놀자 M', stayCount: 3, stayAmount: 225000, hourlyCount: 2, hourlyAmount: 75000, total: 300000, prevMonth: 200000, change: '+50.0%' },
      { channel: '야놀자 H', stayCount: 20, stayAmount: 3000000, hourlyCount: 20, hourlyAmount: 1000000, total: 4000000, prevMonth: 3000000, change: '+33.3%' },
      { channel: '여기어때 H', stayCount: 40, stayAmount: 6000000, hourlyCount: 34, hourlyAmount: 1700000, total: 7700000, prevMonth: 5800000, change: '+32.8%' },
      { channel: '여기어때 M', stayCount: 60, stayAmount: 9000000, hourlyCount: 48, hourlyAmount: 2400000, total: 11400000, prevMonth: 8600000, change: '+32.6%' },
      { channel: '네이버', stayCount: 80, stayAmount: 12000000, hourlyCount: 62, hourlyAmount: 3100000, total: 15100000, prevMonth: 11400000, change: '+32.5%' },
      { channel: '아고다', stayCount: 100, stayAmount: 15000000, hourlyCount: 76, hourlyAmount: 3800000, total: 18800000, prevMonth: 14200000, change: '+32.4%' },
      { channel: '부킹닷컴', stayCount: 120, stayAmount: 18000000, hourlyCount: 90, hourlyAmount: 4500000, total: 22500000, prevMonth: 17000000, change: '+32.4%' },
      { channel: '트립닷컴', stayCount: 140, stayAmount: 21000000, hourlyCount: 104, hourlyAmount: 5200000, total: 26200000, prevMonth: 19800000, change: '+32.3%' },
      { channel: '에어비앤비', stayCount: 160, stayAmount: 24000000, hourlyCount: 118, hourlyAmount: 5900000, total: 29900000, prevMonth: 22600000, change: '+32.3%' },
      { channel: '현금', stayCount: 180, stayAmount: 27000000, hourlyCount: 132, hourlyAmount: 6600000, total: 33600000, prevMonth: 25400000, change: '+32.3%' },
      { channel: '이체', stayCount: 200, stayAmount: 30000000, hourlyCount: 146, hourlyAmount: 7300000, total: 37300000, prevMonth: 28200000, change: '+32.3%' },
      { channel: '카드', stayCount: 220, stayAmount: 33000000, hourlyCount: 160, hourlyAmount: 8000000, total: 41000000, prevMonth: 31000000, change: '+32.3%' },
      { channel: '이벤트', stayCount: 240, stayAmount: 36000000, hourlyCount: 174, hourlyAmount: 8700000, total: 44700000, prevMonth: 33800000, change: '+32.2%' },
    ],
    '3월': [
      { channel: '야놀자 M', stayCount: 2, stayAmount: 150000, hourlyCount: 1, hourlyAmount: 50000, total: 200000, prevMonth: 300000, change: '-33.3%' },
      { channel: '야놀자 H', stayCount: 15, stayAmount: 2250000, hourlyCount: 15, hourlyAmount: 750000, total: 3000000, prevMonth: 4000000, change: '-25.0%' },
      { channel: '여기어때 H', stayCount: 30, stayAmount: 4500000, hourlyCount: 26, hourlyAmount: 1300000, total: 5800000, prevMonth: 7700000, change: '-24.7%' },
      { channel: '여기어때 M', stayCount: 45, stayAmount: 6750000, hourlyCount: 38, hourlyAmount: 1850000, total: 8600000, prevMonth: 11400000, change: '-24.6%' },
      { channel: '네이버', stayCount: 60, stayAmount: 9000000, hourlyCount: 48, hourlyAmount: 2400000, total: 11400000, prevMonth: 15100000, change: '-24.5%' },
      { channel: '아고다', stayCount: 75, stayAmount: 11250000, hourlyCount: 60, hourlyAmount: 2950000, total: 14200000, prevMonth: 18800000, change: '-24.5%' },
      { channel: '부킹닷컴', stayCount: 90, stayAmount: 13500000, hourlyCount: 70, hourlyAmount: 3500000, total: 17000000, prevMonth: 22500000, change: '-24.4%' },
      { channel: '트립닷컴', stayCount: 105, stayAmount: 15750000, hourlyCount: 81, hourlyAmount: 4050000, total: 19800000, prevMonth: 26200000, change: '-24.4%' },
      { channel: '에어비앤비', stayCount: 120, stayAmount: 18000000, hourlyCount: 92, hourlyAmount: 4600000, total: 22600000, prevMonth: 29900000, change: '-24.4%' },
      { channel: '현금', stayCount: 135, stayAmount: 20250000, hourlyCount: 103, hourlyAmount: 5150000, total: 25400000, prevMonth: 33600000, change: '-24.4%' },
      { channel: '이체', stayCount: 150, stayAmount: 22500000, hourlyCount: 114, hourlyAmount: 5700000, total: 28200000, prevMonth: 37300000, change: '-24.4%' },
      { channel: '카드', stayCount: 165, stayAmount: 24750000, hourlyCount: 125, hourlyAmount: 6250000, total: 31000000, prevMonth: 41000000, change: '-24.4%' },
      { channel: '이벤트', stayCount: 180, stayAmount: 27000000, hourlyCount: 136, hourlyAmount: 6800000, total: 33800000, prevMonth: 44700000, change: '-24.4%' },
    ]
  };

  const handleRowClick = (month) => {
    setSelectedMonth(month);
    setShowDetailModal(true);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setSelectedMonth(null);
  };

  return (
    <div className="finance-page">
      <div className="finance-nav">
        <Link to="/finance/revenue" className="finance-nav-item active">매출</Link>
        <Link to="/finance/cost" className="finance-nav-item">원가</Link>
        <Link to="/finance/cash-flow" className="finance-nav-item">자금 유동성</Link>
      </div>

      <div className="finance-content">
        <div className="finance-header">
          <h2>재무 &gt; 매출</h2>
          <div className="search-controls">
            <select className="search-select">
              <option>시 (드릴다운)</option>
            </select>
            <select className="search-select">
              <option>구 (드릴다운)</option>
            </select>
            <select className="search-select">
              <option>프로젝트 전체</option>
            </select>
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
            className={viewMode === 'yearly' ? 'view-tab active' : 'view-tab'}
            onClick={() => setViewMode('yearly')}
          >
            연간
          </button>
          <button
            className={viewMode === 'monthly' ? 'view-tab active' : 'view-tab'}
            onClick={() => setViewMode('monthly')}
          >
            월
          </button>
        </div>

        <div className="project-name">프로젝트명</div>

        <div className="table-container">
          {viewMode === 'yearly' ? (
            <table className="finance-table">
              <thead>
                <tr>
                  <th>연간</th>
                  <th>프로젝트명</th>
                  {channels.map((channel, idx) => (
                    <th key={idx}>{channel}</th>
                  ))}
                  <th>기타</th>
                  <th>합계</th>
                </tr>
              </thead>
              <tbody>
              {yearlyData.map((row, index) => (
                <tr key={index} onClick={() => handleRowClick(row.month)} style={{cursor: 'pointer'}}>
                  <td>{row.month}</td>
                  <td></td>
                  <td>{row.yanolja_m.toLocaleString()}</td>
                  <td>{row.yanolja_h.toLocaleString()}</td>
                  <td>{row.yogiyo_h.toLocaleString()}</td>
                  <td>{row.yogiyo_m.toLocaleString()}</td>
                  <td>{row.naver.toLocaleString()}</td>
                  <td>{row.agoda.toLocaleString()}</td>
                  <td>{row.booking.toLocaleString()}</td>
                  <td>{row.trip.toLocaleString()}</td>
                  <td>{row.airbnb.toLocaleString()}</td>
                  <td>{row.cash.toLocaleString()}</td>
                  <td>{row.transfer.toLocaleString()}</td>
                  <td>{row.card.toLocaleString()}</td>
                  <td>{row.event.toLocaleString()}</td>
                  <td>-</td>
                  <td className="total-cell">{row.total.toLocaleString()}</td>
                </tr>
              ))}
              {Array(9).fill(null).map((_, index) => (
                <tr key={`empty-${index}`}>
                  <td>{index + 4}월</td>
                  <td></td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>.</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))}
              <tr className="total-row">
                <td><strong>합계</strong></td>
                <td></td>
                <td><strong>700,000</strong></td>
                <td><strong>10,000,000</strong></td>
                <td><strong>19,300,000</strong></td>
                <td><strong>28,600,000</strong></td>
                <td><strong>37,900,000</strong></td>
                <td><strong>47,200,000</strong></td>
                <td><strong>56,500,000</strong></td>
                <td><strong>65,800,000</strong></td>
                <td><strong>75,100,000</strong></td>
                <td><strong>84,400,000</strong></td>
                <td><strong>93,700,000</strong></td>
                <td><strong>103,000,000</strong></td>
                <td><strong>112,300,000</strong></td>
                <td><strong>-</strong></td>
                <td className="grand-total"><strong>734,500,000</strong></td>
              </tr>
              </tbody>
            </table>
          ) : (
            <>
              <h3 className="month-detail-title">{selectedMonthForCompare} 프로젝트명</h3>
              <table className="finance-table monthly-detail-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>야놀자 M</th>
                    <th>야놀자 H</th>
                    <th>여기어때 H</th>
                    <th>여기어때 M</th>
                    <th>네이버</th>
                    <th>아고다</th>
                    <th>부킹닷컴</th>
                    <th>트립닷컴</th>
                    <th>에어비앤비</th>
                    <th>현금</th>
                    <th>이체</th>
                    <th>카드</th>
                    <th>이벤트</th>
                    <th>합계</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>숙박 건수</strong></td>
                    <td>10</td>
                    <td>11</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td></td>
                    <td>96</td>
                  </tr>
                  <tr>
                    <td><strong>숙박 금액</strong></td>
                    <td>500,000</td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>4,100,000</td>
                  </tr>
                  <tr>
                    <td><strong>대실 건수</strong></td>
                    <td>-</td>
                    <td>1</td>
                    <td>3</td>
                    <td>5</td>
                    <td>7</td>
                    <td>9</td>
                    <td>11</td>
                    <td>13</td>
                    <td>15</td>
                    <td>17</td>
                    <td>19</td>
                    <td>21</td>
                    <td></td>
                    <td>121</td>
                  </tr>
                  <tr>
                    <td><strong>대실 금액</strong></td>
                    <td>-</td>
                    <td>30,000</td>
                    <td>90,000</td>
                    <td>150,000</td>
                    <td>210,000</td>
                    <td>270,000</td>
                    <td>330,000</td>
                    <td>390,000</td>
                    <td>450,000</td>
                    <td>510,000</td>
                    <td>570,000</td>
                    <td>630,000</td>
                    <td></td>
                    <td>3,630,000</td>
                  </tr>
                  <tr className="total-row">
                    <td><strong>소계</strong></td>
                    <td>500,000</td>
                    <td>630,000</td>
                    <td>90,000</td>
                    <td>750,000</td>
                    <td>210,000</td>
                    <td>870,000</td>
                    <td>330,000</td>
                    <td>990,000</td>
                    <td>450,000</td>
                    <td>1,110,000</td>
                    <td>570,000</td>
                    <td>1,230,000</td>
                    <td></td>
                    <td className="grand-total"><strong>7,730,000</strong></td>
                  </tr>
                </tbody>
              </table>

              <h3 className="month-compare-title">24년 12월 비교 (자동 전월)</h3>
              <table className="finance-table monthly-detail-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>야놀자 M</th>
                    <th>야놀자 H</th>
                    <th>여기어때 H</th>
                    <th>여기어때 M</th>
                    <th>네이버</th>
                    <th>아고다</th>
                    <th>부킹닷컴</th>
                    <th>트립닷컴</th>
                    <th>에어비앤비</th>
                    <th>현금</th>
                    <th>이체</th>
                    <th>카드</th>
                    <th>이벤트</th>
                    <th>합계</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>숙박 건수</strong></td>
                    <td>10</td>
                    <td>11</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td></td>
                    <td>96</td>
                  </tr>
                  <tr>
                    <td><strong>숙박 금액</strong></td>
                    <td>500,000</td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>600,000</td>
                    <td></td>
                    <td>4,100,000</td>
                  </tr>
                  <tr>
                    <td><strong>대실 건수</strong></td>
                    <td>-</td>
                    <td>1</td>
                    <td>3</td>
                    <td>5</td>
                    <td>7</td>
                    <td>9</td>
                    <td>11</td>
                    <td>13</td>
                    <td>15</td>
                    <td>17</td>
                    <td>19</td>
                    <td>21</td>
                    <td></td>
                    <td>121</td>
                  </tr>
                  <tr>
                    <td><strong>대실 금액</strong></td>
                    <td>-</td>
                    <td>30,000</td>
                    <td>90,000</td>
                    <td>150,000</td>
                    <td>210,000</td>
                    <td>270,000</td>
                    <td>330,000</td>
                    <td>390,000</td>
                    <td>450,000</td>
                    <td>510,000</td>
                    <td>570,000</td>
                    <td>630,000</td>
                    <td></td>
                    <td>3,630,000</td>
                  </tr>
                  <tr className="total-row">
                    <td><strong>소계</strong></td>
                    <td>500,000</td>
                    <td>630,000</td>
                    <td>90,000</td>
                    <td>750,000</td>
                    <td>210,000</td>
                    <td>870,000</td>
                    <td>330,000</td>
                    <td>990,000</td>
                    <td>450,000</td>
                    <td>1,110,000</td>
                    <td>570,000</td>
                    <td>1,230,000</td>
                    <td></td>
                    <td className="grand-total"><strong>7,730,000</strong></td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>

      {showDetailModal && selectedMonth && monthlyDetailData[selectedMonth] && (
        <div className="modal-overlay" onClick={closeDetailModal}>
          <div className="revenue-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDetailModal}>×</button>

            <div className="revenue-detail-title">
              {selectedMonth} 매출 상세 내역
            </div>

            <div className="revenue-detail-header">
              <div>프로젝트: 프로젝트명</div>
              <div>기간: 2025-{selectedMonth}</div>
              <div>담당자: 홍길동</div>
            </div>

            <div className="revenue-detail-content">
              <table className="revenue-detail-table">
                <thead>
                  <tr>
                    <th rowSpan="2">채널</th>
                    <th colSpan="2">숙박</th>
                    <th colSpan="2">대실</th>
                    <th rowSpan="2">합계</th>
                    <th rowSpan="2">전월</th>
                    <th rowSpan="2">증감</th>
                  </tr>
                  <tr>
                    <th>건수</th>
                    <th>금액</th>
                    <th>건수</th>
                    <th>금액</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyDetailData[selectedMonth].map((item, index) => (
                    <tr key={index}>
                      <td>{item.channel}</td>
                      <td>{item.stayCount}건</td>
                      <td>{item.stayAmount.toLocaleString()}원</td>
                      <td>{item.hourlyCount}건</td>
                      <td>{item.hourlyAmount.toLocaleString()}원</td>
                      <td><strong>{item.total.toLocaleString()}원</strong></td>
                      <td>{item.prevMonth.toLocaleString()}원</td>
                      <td className={item.change.startsWith('+') ? 'change-positive' : 'change-negative'}>
                        {item.change}
                      </td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td><strong>합계</strong></td>
                    <td><strong>{monthlyDetailData[selectedMonth].reduce((sum, item) => sum + item.stayCount, 0)}건</strong></td>
                    <td><strong>{monthlyDetailData[selectedMonth].reduce((sum, item) => sum + item.stayAmount, 0).toLocaleString()}원</strong></td>
                    <td><strong>{monthlyDetailData[selectedMonth].reduce((sum, item) => sum + item.hourlyCount, 0)}건</strong></td>
                    <td><strong>{monthlyDetailData[selectedMonth].reduce((sum, item) => sum + item.hourlyAmount, 0).toLocaleString()}원</strong></td>
                    <td className="grand-total"><strong>{monthlyDetailData[selectedMonth].reduce((sum, item) => sum + item.total, 0).toLocaleString()}원</strong></td>
                    <td><strong>{monthlyDetailData[selectedMonth].reduce((sum, item) => sum + item.prevMonth, 0).toLocaleString()}원</strong></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="revenue-detail-actions">
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

export default Revenue;
