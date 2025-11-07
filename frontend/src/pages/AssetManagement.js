import React, { useState } from 'react';
import './AssetManagement.css';

const AssetManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  // 폼 상태
  const [formData, setFormData] = useState({
    item: '',
    spec: '',
    project: '',
    quantity: '',
    year: '',
    price: '',
    condition: '',
    history: '',
    note: ''
  });

  const [assets, setAssets] = useState([
    { no: 1, item: 'TV', spec: '삼성55IN', project: 'A', quantity: 10, year: 2025, price: 550000, condition: 'A', history: '리퍼 제품 구매', note: '' },
    { no: 2, item: 'TV', spec: 'LG65IN', project: 'B', quantity: 10, year: 2015, price: 600000, condition: 'C', history: 'D매장 이동', note: '' },
    { no: 3, item: 'TV', spec: '삼성55IN', project: 'C', quantity: 20, year: 2022, price: 540000, condition: 'B', history: '', note: '' },
  ]);

  const openAddModal = () => {
    setShowAddModal(true);
    setFormData({
      item: '',
      spec: '',
      project: '',
      quantity: '',
      year: '',
      price: '',
      condition: '',
      history: '',
      note: ''
    });
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddAsset = () => {
    const newNo = assets.length > 0 ? Math.max(...assets.map(a => a.no)) + 1 : 1;
    const newAsset = {
      no: newNo,
      item: formData.item,
      spec: formData.spec,
      project: formData.project,
      quantity: parseInt(formData.quantity) || 0,
      year: parseInt(formData.year) || new Date().getFullYear(),
      price: parseInt(formData.price.replace(/,/g, '')) || 0,
      condition: formData.condition,
      history: formData.history,
      note: formData.note
    };

    setAssets([...assets, newAsset]);
    closeAddModal();
    alert('자산이 추가되었습니다.');
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(JSON.parse(JSON.stringify(assets)));
  };

  const handleSave = () => {
    setAssets(tempData);
    setIsEditing(false);
    setTempData([]);
    alert('저장되었습니다.');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempData([]);
  };

  const handleCellChange = (no, field, value) => {
    setTempData(prev => prev.map(asset =>
      asset.no === no ? { ...asset, [field]: value } : asset
    ));
  };

  const getCurrentData = () => {
    return isEditing ? tempData : assets;
  };

  return (
    <div className="asset-management">
      <div className="asset-header">
        <h2>자산관리</h2>
        <div className="search-controls">
          <select className="search-select">
            <option>시 (드릴다운)</option>
          </select>
          <select className="search-select">
            <option>구 (드릴다운)</option>
          </select>
          <select className="search-select">
            <option>아이템 (드릴다운)</option>
          </select>
          <select className="search-select">
            <option>프로젝트</option>
          </select>
          <div className="export-buttons">
            <button className="export-btn">출력</button>
            <button className="export-btn">엑셀 다운</button>
          </div>
        </div>
      </div>

      <div className="table-actions">
        {!isEditing ? (
          <>
            <button className="table-action-btn add" onClick={openAddModal}>추가</button>
            <button className="table-action-btn edit" onClick={handleEdit}>수정</button>
          </>
        ) : (
          <>
            <button className="table-action-btn add" onClick={handleSave}>저장</button>
            <button className="table-action-btn" onClick={handleCancel}>취소</button>
          </>
        )}
      </div>

      <div className="table-container">
        <table className="asset-table">
          <thead>
            <tr>
              <th>NO.</th>
              <th>아이템</th>
              <th>사양</th>
              <th>프로젝트</th>
              <th>수량</th>
              <th>구입년도</th>
              <th>금액</th>
              <th>컨디션</th>
              <th>히스토리</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentData().map((asset) => (
              <tr key={asset.no}>
                <td>{asset.no}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      className="asset-input"
                      value={asset.item}
                      onChange={(e) => handleCellChange(asset.no, 'item', e.target.value)}
                    />
                  ) : (
                    asset.item
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      className="asset-input"
                      value={asset.spec}
                      onChange={(e) => handleCellChange(asset.no, 'spec', e.target.value)}
                    />
                  ) : (
                    asset.spec
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      className="asset-input"
                      value={asset.project}
                      onChange={(e) => handleCellChange(asset.no, 'project', e.target.value)}
                    />
                  ) : (
                    asset.project
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      className="asset-input"
                      value={asset.quantity}
                      onChange={(e) => handleCellChange(asset.no, 'quantity', parseInt(e.target.value) || 0)}
                    />
                  ) : (
                    asset.quantity
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      className="asset-input"
                      value={asset.year}
                      onChange={(e) => handleCellChange(asset.no, 'year', parseInt(e.target.value) || 0)}
                    />
                  ) : (
                    asset.year
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      className="asset-input"
                      value={asset.price}
                      onChange={(e) => handleCellChange(asset.no, 'price', parseInt(e.target.value) || 0)}
                    />
                  ) : (
                    asset.price.toLocaleString()
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <select
                      className="asset-select"
                      value={asset.condition}
                      onChange={(e) => handleCellChange(asset.no, 'condition', e.target.value)}
                    >
                      <option value="">선택</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  ) : (
                    asset.condition
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      className="asset-input"
                      value={asset.history}
                      onChange={(e) => handleCellChange(asset.no, 'history', e.target.value)}
                    />
                  ) : (
                    asset.history
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      className="asset-input"
                      value={asset.note}
                      onChange={(e) => handleCellChange(asset.no, 'note', e.target.value)}
                    />
                  ) : (
                    asset.note
                  )}
                </td>
              </tr>
            ))}
            {!isEditing && Array(7).fill(null).map((_, index) => (
              <tr key={`empty-${index}`}>
                <td>{assets.length + 1 + index}</td>
                <td>.</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={closeAddModal}>
          <div className="asset-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAddModal}>×</button>

            <div className="modal-title">자산 추가</div>

            <div className="modal-content">
              <div className="form-group">
                <label>아이템 *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.item}
                  onChange={(e) => handleFormChange('item', e.target.value)}
                  placeholder="아이템명을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label>사양</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.spec}
                  onChange={(e) => handleFormChange('spec', e.target.value)}
                  placeholder="사양을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label>프로젝트 *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.project}
                  onChange={(e) => handleFormChange('project', e.target.value)}
                  placeholder="프로젝트명을 입력하세요"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>수량 *</label>
                  <input
                    type="number"
                    className="form-input"
                    value={formData.quantity}
                    onChange={(e) => handleFormChange('quantity', e.target.value)}
                    placeholder="수량"
                  />
                </div>

                <div className="form-group">
                  <label>구입년도 *</label>
                  <input
                    type="number"
                    className="form-input"
                    value={formData.year}
                    onChange={(e) => handleFormChange('year', e.target.value)}
                    placeholder="YYYY"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>금액 *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.price}
                    onChange={(e) => handleFormChange('price', e.target.value)}
                    placeholder="금액을 입력하세요"
                  />
                </div>

                <div className="form-group">
                  <label>컨디션 *</label>
                  <select
                    className="form-select"
                    value={formData.condition}
                    onChange={(e) => handleFormChange('condition', e.target.value)}
                  >
                    <option value="">선택하세요</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>히스토리</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.history}
                  onChange={(e) => handleFormChange('history', e.target.value)}
                  placeholder="히스토리를 입력하세요"
                />
              </div>

              <div className="form-group">
                <label>비고</label>
                <textarea
                  className="form-textarea"
                  value={formData.note}
                  onChange={(e) => handleFormChange('note', e.target.value)}
                  placeholder="비고사항을 입력하세요"
                  rows="3"
                />
              </div>
            </div>

            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={closeAddModal}>취소</button>
              <button className="modal-btn confirm" onClick={handleAddAsset}>추가</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetManagement;
