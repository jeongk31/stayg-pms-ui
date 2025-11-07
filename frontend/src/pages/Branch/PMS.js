import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PMS.css';

const PMS = () => {
  const { id } = useParams();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [paymentType, setPaymentType] = useState('full'); // 'full' or 'partial'
  const [payments, setPayments] = useState([{ method: '카드', amount: '' }]);

  const rooms = [
    { number: '101', type: '스탠다드', channel: 'M야', guest: '홍실동', status: 'stay', checkIn: '12:00', elapsed: '1:00', isStay: true },
    { number: '102', type: '디럭스', channel: 'H여', guest: '김혜수', status: 'hourly', checkIn: '13:00', elapsed: '2:00', isStay: false },
    { number: '103', type: '스위트', channel: '부킹', guest: '', status: 'available', checkIn: '', elapsed: '', isStay: true },
    { number: '104', type: '로얄스위트', channel: '아고', guest: '', status: 'available', checkIn: '', elapsed: '', isStay: false },
    { number: '105', type: '트윈', channel: '네', guest: '', status: 'cleaning-request', checkIn: '', elapsed: '', isStay: true },
    { number: '201', type: '스탠다드', channel: '에어', guest: '홍실동', status: 'extended-stay', checkIn: '12:00', elapsed: '25:00', isStay: true },
    { number: '202', type: '디럭스', channel: '익스', guest: '', status: 'cleaning-progress', checkIn: '', elapsed: '', isStay: false },
    { number: '203', type: '스위트', channel: '트립', guest: '', status: 'complete', checkIn: '', elapsed: '', isStay: false },
    { number: '204', type: '로얄스위트', channel: '워', guest: '', status: 'inspection', checkIn: '', elapsed: '', isStay: false },
    { number: '205', type: '트윈', channel: '네', guest: '', status: 'unavailable', checkIn: '', elapsed: '', isStay: false },
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'stay': return 'room-stay';
      case 'hourly': return 'room-hourly';
      case 'extended-stay': return 'room-extended-stay';
      case 'available': return 'room-available';
      case 'cleaning-request': return 'room-cleaning-request';
      case 'cleaning-progress': return 'room-cleaning-progress';
      case 'complete': return 'room-complete';
      case 'inspection': return 'room-inspection';
      case 'unavailable': return 'room-unavailable';
      default: return '';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'stay': return 'S = 숙박';
      case 'hourly': return 'U = 대실';
      case 'extended-stay': return '연박';
      case 'available': return '공실';
      case 'cleaning-request': return '청소요청';
      case 'cleaning-progress': return '청소중';
      case 'complete': return '청소 완료';
      case 'inspection': return '점검중';
      case 'unavailable': return '판매불가';
      default: return '';
    }
  };

  const getTypePrefix = (room) => {
    if (room.status === 'stay' || room.status === 'extended-stay') return 'S';
    if (room.status === 'hourly') return 'U';
    if (room.status === 'available') return room.isStay ? 'S' : 'U';
    return '';
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setPaymentType('full');
    setPayments([{ method: '카드', amount: '' }]);
  };

  const addPaymentField = () => {
    setPayments([...payments, { method: '카드', amount: '' }]);
  };

  const removePaymentField = (index) => {
    setPayments(payments.filter((_, i) => i !== index));
  };

  const updatePayment = (index, field, value) => {
    const newPayments = [...payments];
    newPayments[index][field] = value;
    setPayments(newPayments);
  };

  return (
    <div className="pms-container">
      <div className="pms-nav">
        <button className="pms-nav-item active">호텔</button>
        <button className="pms-nav-item">펜션</button>
        <button className="pms-nav-item">캠핑</button>
        <button className="pms-nav-item">F&B</button>
        <button className="pms-nav-item">기타</button>
      </div>

      <div className="pms-content">
        <div className="pms-sidebar">
          <div className="sidebar-section">
            <Link to={`/branch/pms/${id}`} className="sidebar-item active">PMS</Link>
            <Link to={`/branch/sales/${id}`} className="sidebar-item">판매일보</Link>
            <Link to={`/branch/reservation/${id}`} className="sidebar-item">예약현황</Link>
            <Link to={`/branch/staff/${id}`} className="sidebar-item">직원관리</Link>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-title">리포트</div>
          </div>
        </div>

        <div className="pms-main">
          <div className="pms-header">
            <h2>지점 &gt; 호텔 &gt; PMS</h2>
            <div className="header-info">
              <div className="sales-info">
                <div><strong>U(대실)</strong> 온라인 120,000 / 카드 10,000 / 현금 100,000</div>
                <div><strong>S(숙박)</strong> 온라인 1,200,000 / 카드 100,000 / 현금 1,000,000</div>
              </div>
            </div>
          </div>

          <div className="inventory-info">
            당일 실시간 타입별 재고량: 스탠다드 10/5, 디럭스 10/6, 스위트 10/7, 로얄스위트 10/8, 트윈 10/1
          </div>

          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`room-card ${getStatusClass(room.status)}`}
                onClick={() => handleRoomClick(room)}
              >
                <div className="room-number">
                  {getTypePrefix(room) && <span className="room-prefix">{getTypePrefix(room)} </span>}
                  {room.number}/{room.type}
                </div>
                <div className="room-channel">{room.channel}</div>
                <div className="room-guest">{room.guest || '공실'}</div>
                {room.checkIn && (
                  <>
                    <div className="room-time">입실: {room.checkIn}</div>
                    <div className="room-time">경과: {room.elapsed}</div>
                  </>
                )}
                {room.status === 'available' && <div className="room-status-text">공실</div>}
                {room.status === 'cleaning-request' && <div className="room-status-text">청소요청</div>}
                {room.status === 'cleaning-progress' && <div className="room-status-text">청소중</div>}
                {room.status === 'complete' && <div className="room-status-text">청소 완료</div>}
                {room.status === 'inspection' && <div className="room-status-text">점검중</div>}
                {room.status === 'unavailable' && <div className="room-status-text">판매불가</div>}
                {room.status === 'extended-stay' && <div className="room-status-text">연박</div>}
              </div>
            ))}
          </div>

          <div className="legend">
            <h3>호실 상태 (색상으로 구분)</h3>
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-color room-stay"></span>
                <span>S = 숙박</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-hourly"></span>
                <span>U = 대실</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-extended-stay"></span>
                <span>연박</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-available"></span>
                <span>공실</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-cleaning-request"></span>
                <span>청소요청</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-cleaning-progress"></span>
                <span>청소중</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-complete"></span>
                <span>청소 완료</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-inspection"></span>
                <span>점검중</span>
              </div>
              <div className="legend-item">
                <span className="legend-color room-unavailable"></span>
                <span>판매불가</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedRoom && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>객실 상세 - {selectedRoom.number}호</h2>
            <div className="modal-body">
              <div className="modal-section">
                <h3>기본 정보</h3>
                <div className="info-row">
                  <div className="info-item">
                    <label>호실</label>
                    <div>{selectedRoom.number} - {selectedRoom.type}</div>
                  </div>
                  <div className="info-item">
                    <label>상태</label>
                    <div>{getStatusText(selectedRoom.status)}</div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>예약 정보</h3>
                <div className="modal-input-group">
                  <label>채널</label>
                  <select className="modal-select">
                    <option>{selectedRoom.channel}</option>
                    <option>야놀자 H</option>
                    <option>야놀자 M</option>
                    <option>여기어때 H</option>
                    <option>여기어때 M</option>
                    <option>네이버</option>
                    <option>아고다</option>
                    <option>부킹닷컴</option>
                    <option>익스피디아</option>
                    <option>트립닷컴</option>
                    <option>에어비앤비</option>
                    <option>워크인</option>
                  </select>
                </div>

                <div className="modal-input-group">
                  <label>예약자명</label>
                  <input type="text" placeholder="홍길동" className="modal-input" defaultValue={selectedRoom.guest} />
                </div>

                <div className="modal-input-group">
                  <label>연락처</label>
                  <input type="text" placeholder="010-1234-5678" className="modal-input" />
                </div>

                <div className="info-row">
                  <div className="info-item">
                    <label>체크인</label>
                    <input type="datetime-local" className="modal-input" />
                  </div>
                  <div className="info-item">
                    <label>체크아웃</label>
                    <input type="datetime-local" className="modal-input" />
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>요금 정보</h3>

                <div className="modal-radio-group">
                  <label>구분</label>
                  <div style={{display: 'flex', gap: '20px'}}>
                    <label>
                      <input type="radio" name="type" value="stay" defaultChecked />
                      숙박(S)
                    </label>
                    <label>
                      <input type="radio" name="type" value="hourly" />
                      대실(U)
                    </label>
                  </div>
                </div>

                <div className="modal-input-group">
                  <label>객실 요금</label>
                  <input type="text" placeholder="50,000" className="modal-input" />
                </div>

                <div className="modal-input-group">
                  <label>추가요금</label>
                  <input type="text" placeholder="0" className="modal-input" />
                </div>

                <div className="modal-radio-group">
                  <label>결제 방식</label>
                  <div style={{display: 'flex', gap: '20px'}}>
                    <label>
                      <input
                        type="radio"
                        name="paymentType"
                        value="full"
                        checked={paymentType === 'full'}
                        onChange={(e) => setPaymentType(e.target.value)}
                      />
                      일시불
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentType"
                        value="partial"
                        checked={paymentType === 'partial'}
                        onChange={(e) => setPaymentType(e.target.value)}
                      />
                      부분 결제
                    </label>
                  </div>
                </div>

                {payments.map((payment, index) => (
                  <div key={index} className="payment-row">
                    <div className="payment-fields">
                      <div className="modal-input-group" style={{flex: 1}}>
                        <label>결제 수단</label>
                        <select
                          className="modal-select"
                          value={payment.method}
                          onChange={(e) => updatePayment(index, 'method', e.target.value)}
                        >
                          <option>카드</option>
                          <option>현금</option>
                          <option>이체</option>
                        </select>
                      </div>
                      <div className="modal-input-group" style={{flex: 1}}>
                        <label>금액</label>
                        <input
                          type="text"
                          placeholder="0"
                          className="modal-input"
                          value={payment.amount}
                          onChange={(e) => updatePayment(index, 'amount', e.target.value)}
                        />
                      </div>
                    </div>
                    {paymentType === 'partial' && payments.length > 1 && (
                      <button
                        className="remove-payment-btn"
                        onClick={() => removePaymentField(index)}
                      >
                        삭제
                      </button>
                    )}
                  </div>
                ))}

                {paymentType === 'partial' && (
                  <button className="add-payment-btn" onClick={addPaymentField}>
                    + 결제 수단 추가
                  </button>
                )}
              </div>

              <div className="modal-section">
                <h3>추가 정보</h3>
                <div className="modal-input-group">
                  <label>인원</label>
                  <input type="number" placeholder="2" className="modal-input" defaultValue="2" />
                </div>

                <div className="modal-input-group">
                  <label>차량번호</label>
                  <input type="text" placeholder="12가3456" className="modal-input" />
                </div>

                <div className="modal-input-group">
                  <label>어메니티</label>
                  <select className="modal-select">
                    <option>기본</option>
                    <option>워킹</option>
                    <option>이벤트</option>
                    <option>없음</option>
                  </select>
                </div>

                <div className="modal-input-group">
                  <label>특이사항</label>
                  <textarea className="modal-input" rows="3" placeholder="특이사항을 입력하세요"></textarea>
                </div>
              </div>

              <div className="modal-section">
                <h3>객실 관리</h3>
                <div className="modal-input-group">
                  <label>객실 상태</label>
                  <select className="modal-select">
                    <option>S = 숙박</option>
                    <option>U = 대실</option>
                    <option>연박</option>
                    <option>공실</option>
                    <option>청소요청</option>
                    <option>청소중</option>
                    <option>청소 완료</option>
                    <option>점검중</option>
                    <option>판매불가</option>
                  </select>
                </div>
              </div>

              <div className="modal-section">
                <h3>판매일보 연동</h3>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '10px'}}>
                  PMS에서 입력한 내용을 판매일보로 전송합니다
                </p>
                <div style={{display: 'flex', gap: '10px'}}>
                  <button className="sync-btn" style={{flex: 1}}>판매일보로 전송</button>
                  <button className="action-btn">판매일보 보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PMS;
