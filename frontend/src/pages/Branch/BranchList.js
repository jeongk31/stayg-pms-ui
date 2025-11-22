import React from 'react';
import { Link } from 'react-router-dom';
import './BranchList.css';

const BranchList = () => {
  const branches = [
    { id: 1, region: '서울', district: '은평구', name: 'A', type: '호텔' },
    { id: 2, region: '서울', district: '은평구', name: 'B', type: '호텔' },
    { id: 3, region: '서울', district: '은평구', name: 'C', type: '호텔' },
  ];

  const categories = ['호텔', '펜션', '캠핑', 'F&B', '기타'];

  return (
    <div className="branch-list">
      <div className="content-section">
        <div className="page-header">
          <div className="search-box">
            <input type="text" placeholder="시" className="search-input" />
            <input type="text" placeholder="구" className="search-input" />
            <input type="text" placeholder="프로젝트명" className="search-input" />
            <button className="search-btn">검색</button>
          </div>
        </div>

        <div className="branches-table">
          <table className="data-table">
            <thead>
              <tr>
                <th>지역</th>
                <th>프로젝트명</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch.id}>
                  <td>{branch.region} {branch.district}</td>
                  <td>{branch.name}</td>
                  <td>
                    <Link to={`/branch/pms/${branch.id}`} className="select-btn">
                      클릭 (선택) (상세 페이지로 이동)
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          1,2,3,4,페이지 &gt;
        </div>
      </div>
    </div>
  );
};

export default BranchList;
