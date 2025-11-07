import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './StaffManagement.css';

const StaffManagement = () => {
  const { id } = useParams();
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
      <div className="staff-nav">
        <button className="staff-nav-item active">호텔</button>
        <button className="staff-nav-item">펜션</button>
        <button className="staff-nav-item">캠핑</button>
        <button className="staff-nav-item">F&B</button>
        <button className="staff-nav-item">기타</button>
      </div>

      <div className="staff-content">
        <div className="staff-sidebar">
          <Link to={`/branch/pms/${id}`} className="sidebar-item">PMS</Link>
          <Link to={`/branch/sales/${id}`} className="sidebar-item">판매일보</Link>
          <Link to={`/branch/reservation/${id}`} className="sidebar-item">예약현황</Link>
          <Link to={`/branch/staff/${id}`} className="sidebar-item active">직원관리</Link>
        </div>

        <div className="staff-main">
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
