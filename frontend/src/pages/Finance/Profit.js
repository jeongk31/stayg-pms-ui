import React from 'react';
import './Finance.css';
import './Profit.css';

const Profit = () => {
  return (
    <div className="finance-page">
      <div className="finance-nav">
        <button className="finance-nav-item">매출</button>
        <button className="finance-nav-item">원가</button>
        <button className="finance-nav-item active">손익</button>
        <button className="finance-nav-item">자금 유동성(캐쉬 입금)</button>
      </div>

      <div className="finance-content">
        <div className="finance-header">
          <h2>재무 &gt; 손익</h2>
        </div>

        <div className="profit-placeholder">
          <h3>손익 분석</h3>
          <p>손익 계산서 및 분석 화면이 표시됩니다.</p>
          <div className="profit-summary">
            <div className="summary-card">
              <h4>총 매출</h4>
              <p className="amount">734,500,000원</p>
            </div>
            <div className="summary-card">
              <h4>총 원가</h4>
              <p className="amount">500,000,000원</p>
            </div>
            <div className="summary-card profit-card">
              <h4>영업 이익</h4>
              <p className="amount profit">234,500,000원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profit;
