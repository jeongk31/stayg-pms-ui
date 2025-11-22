import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const location = useLocation();

  // Determine active tab from route
  const getActiveTab = () => {
    if (location.pathname.includes('/settings/room-type')) return 'room';
    if (location.pathname.includes('/settings/channel')) return 'channel';
    if (location.pathname.includes('/settings/user')) return 'user';
    if (location.pathname.includes('/settings/system')) return 'system';
    return 'project';
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'add' or 'edit'
  const [editingItem, setEditingItem] = useState(null);

  // 프로젝트 데이터
  const [projects, setProjects] = useState([
    { id: 1, name: '프로젝트 A', location: '서울 강남구', rooms: 20, status: '운영중' },
    { id: 2, name: '프로젝트 B', location: '서울 서초구', rooms: 15, status: '운영중' },
    { id: 3, name: '프로젝트 C', location: '서울 송파구', rooms: 25, status: '준비중' },
  ]);

  // 객실 타입 데이터
  const [roomTypes, setRoomTypes] = useState([
    { id: 1, type: '스탠다드', capacity: 2, basePrice: 80000, weekendPrice: 120000 },
    { id: 2, type: '디럭스', capacity: 3, basePrice: 120000, weekendPrice: 160000 },
    { id: 3, type: '스위트', capacity: 4, basePrice: 200000, weekendPrice: 280000 },
  ]);

  // 채널 데이터
  const [channels, setChannels] = useState([
    { id: 1, name: '야놀자', commission: 15, status: '활성', contact: '02-1234-5678' },
    { id: 2, name: '여기어때', commission: 15, status: '활성', contact: '02-2345-6789' },
    { id: 3, name: '네이버', commission: 12, status: '활성', contact: '02-3456-7890' },
    { id: 4, name: '아고다', commission: 18, status: '활성', contact: '02-4567-8901' },
    { id: 5, name: '부킹닷컴', commission: 20, status: '활성', contact: '02-5678-9012' },
  ]);

  // 사용자 데이터
  const [users, setUsers] = useState([
    { id: 1, name: '김철수', role: '관리자', email: 'kim@example.com', phone: '010-1234-5678', status: '활성' },
    { id: 2, name: '이영희', role: '매니저', email: 'lee@example.com', phone: '010-2345-6789', status: '활성' },
    { id: 3, name: '박민수', role: '직원', email: 'park@example.com', phone: '010-3456-7890', status: '활성' },
  ]);

  // 폼 데이터
  const [formData, setFormData] = useState({});

  const openAddModal = (type) => {
    setModalType('add');
    setShowModal(true);
    setEditingItem(null);
    setFormData({});
  };

  const openEditModal = (type, item) => {
    setModalType('edit');
    setShowModal(true);
    setEditingItem(item);
    setFormData({ ...item });
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({});
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (activeTab === 'project') {
      if (modalType === 'add') {
        const newProject = {
          id: projects.length + 1,
          ...formData
        };
        setProjects([...projects, newProject]);
      } else {
        setProjects(projects.map(p => p.id === editingItem.id ? { ...p, ...formData } : p));
      }
    } else if (activeTab === 'room') {
      if (modalType === 'add') {
        const newRoom = {
          id: roomTypes.length + 1,
          ...formData
        };
        setRoomTypes([...roomTypes, newRoom]);
      } else {
        setRoomTypes(roomTypes.map(r => r.id === editingItem.id ? { ...r, ...formData } : r));
      }
    } else if (activeTab === 'channel') {
      if (modalType === 'add') {
        const newChannel = {
          id: channels.length + 1,
          ...formData
        };
        setChannels([...channels, newChannel]);
      } else {
        setChannels(channels.map(c => c.id === editingItem.id ? { ...c, ...formData } : c));
      }
    } else if (activeTab === 'user') {
      if (modalType === 'add') {
        const newUser = {
          id: users.length + 1,
          ...formData
        };
        setUsers([...users, newUser]);
      } else {
        setUsers(users.map(u => u.id === editingItem.id ? { ...u, ...formData } : u));
      }
    }

    closeModal();
    alert(modalType === 'add' ? '추가되었습니다.' : '수정되었습니다.');
  };

  const handleDelete = (type, id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    if (type === 'project') {
      setProjects(projects.filter(p => p.id !== id));
    } else if (type === 'room') {
      setRoomTypes(roomTypes.filter(r => r.id !== id));
    } else if (type === 'channel') {
      setChannels(channels.filter(c => c.id !== id));
    } else if (type === 'user') {
      setUsers(users.filter(u => u.id !== id));
    }

    alert('삭제되었습니다.');
  };

  // Update activeTab when route changes
  React.useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location.pathname]);

  return (
    <div className="settings">
      <div className="settings-header">
        <h2>설정</h2>
      </div>

      <div className="settings-content">
        {/* 프로젝트 관리 */}
        {activeTab === 'project' && (
          <div className="settings-section">
            <div className="section-header">
              <h3>프로젝트 목록</h3>
              <button className="add-btn" onClick={() => openAddModal('project')}>
                + 프로젝트 추가
              </button>
            </div>

            <div className="table-container">
              <table className="settings-table">
                <thead>
                  <tr>
                    <th>프로젝트명</th>
                    <th>위치</th>
                    <th>객실 수</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{project.location}</td>
                      <td>{project.rooms}개</td>
                      <td>
                        <span className={`status-badge ${project.status === '운영중' ? 'active' : 'inactive'}`}>
                          {project.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn edit" onClick={() => openEditModal('project', project)}>수정</button>
                        <button className="action-btn delete" onClick={() => handleDelete('project', project.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 객실 타입 관리 */}
        {activeTab === 'room' && (
          <div className="settings-section">
            <div className="section-header">
              <h3>객실 타입 목록</h3>
              <button className="add-btn" onClick={() => openAddModal('room')}>
                + 객실 타입 추가
              </button>
            </div>

            <div className="table-container">
              <table className="settings-table">
                <thead>
                  <tr>
                    <th>객실 타입</th>
                    <th>수용 인원</th>
                    <th>평일 기본 요금</th>
                    <th>주말 요금</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {roomTypes.map(room => (
                    <tr key={room.id}>
                      <td>{room.type}</td>
                      <td>{room.capacity}명</td>
                      <td>{room.basePrice?.toLocaleString()}원</td>
                      <td>{room.weekendPrice?.toLocaleString()}원</td>
                      <td>
                        <button className="action-btn edit" onClick={() => openEditModal('room', room)}>수정</button>
                        <button className="action-btn delete" onClick={() => handleDelete('room', room.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 채널 관리 */}
        {activeTab === 'channel' && (
          <div className="settings-section">
            <div className="section-header">
              <h3>판매 채널 목록</h3>
              <button className="add-btn" onClick={() => openAddModal('channel')}>
                + 채널 추가
              </button>
            </div>

            <div className="table-container">
              <table className="settings-table">
                <thead>
                  <tr>
                    <th>채널명</th>
                    <th>수수료 (%)</th>
                    <th>연락처</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {channels.map(channel => (
                    <tr key={channel.id}>
                      <td>{channel.name}</td>
                      <td>{channel.commission}%</td>
                      <td>{channel.contact}</td>
                      <td>
                        <span className={`status-badge ${channel.status === '활성' ? 'active' : 'inactive'}`}>
                          {channel.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn edit" onClick={() => openEditModal('channel', channel)}>수정</button>
                        <button className="action-btn delete" onClick={() => handleDelete('channel', channel.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 사용자 관리 */}
        {activeTab === 'user' && (
          <div className="settings-section">
            <div className="section-header">
              <h3>사용자 목록</h3>
              <button className="add-btn" onClick={() => openAddModal('user')}>
                + 사용자 추가
              </button>
            </div>

            <div className="table-container">
              <table className="settings-table">
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>역할</th>
                    <th>이메일</th>
                    <th>전화번호</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.role}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <span className={`status-badge ${user.status === '활성' ? 'active' : 'inactive'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn edit" onClick={() => openEditModal('user', user)}>수정</button>
                        <button className="action-btn delete" onClick={() => handleDelete('user', user.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 시스템 설정 */}
        {activeTab === 'system' && (
          <div className="settings-section">
            <h3>시스템 설정</h3>

            <div className="system-settings">
              <div className="setting-item">
                <label>알림 설정</label>
                <select className="setting-select">
                  <option>모든 알림 받기</option>
                  <option>중요 알림만 받기</option>
                  <option>알림 끄기</option>
                </select>
              </div>

              <div className="setting-item">
                <label>언어 설정</label>
                <select className="setting-select">
                  <option>한국어</option>
                  <option>English</option>
                </select>
              </div>

              <div className="setting-item">
                <label>테마</label>
                <select className="setting-select">
                  <option>라이트 모드</option>
                  <option>다크 모드</option>
                </select>
              </div>

              <div className="setting-item">
                <label>데이터 백업</label>
                <div className="backup-controls">
                  <button className="system-btn">백업 실행</button>
                  <button className="system-btn">복원하기</button>
                </div>
              </div>

              <div className="setting-item">
                <label>시스템 정보</label>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">버전:</span>
                    <span className="info-value">v1.0.0</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">마지막 업데이트:</span>
                    <span className="info-value">2025-01-07</span>
                  </div>
                </div>
              </div>

              <div className="setting-actions">
                <button className="save-settings-btn">설정 저장</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-title">
              {modalType === 'add' ? '추가' : '수정'} -
              {activeTab === 'project' && ' 프로젝트'}
              {activeTab === 'room' && ' 객실 타입'}
              {activeTab === 'channel' && ' 채널'}
              {activeTab === 'user' && ' 사용자'}
            </div>

            <div className="modal-content">
              {/* 프로젝트 폼 */}
              {activeTab === 'project' && (
                <>
                  <div className="form-group">
                    <label>프로젝트명 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.name || ''}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      placeholder="프로젝트명을 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>위치 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.location || ''}
                      onChange={(e) => handleFormChange('location', e.target.value)}
                      placeholder="위치를 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>객실 수 *</label>
                    <input
                      type="number"
                      className="form-input"
                      value={formData.rooms || ''}
                      onChange={(e) => handleFormChange('rooms', parseInt(e.target.value) || 0)}
                      placeholder="객실 수"
                    />
                  </div>
                  <div className="form-group">
                    <label>상태 *</label>
                    <select
                      className="form-select"
                      value={formData.status || ''}
                      onChange={(e) => handleFormChange('status', e.target.value)}
                    >
                      <option value="">선택하세요</option>
                      <option value="운영중">운영중</option>
                      <option value="준비중">준비중</option>
                      <option value="중지">중지</option>
                    </select>
                  </div>
                </>
              )}

              {/* 객실 타입 폼 */}
              {activeTab === 'room' && (
                <>
                  <div className="form-group">
                    <label>객실 타입 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.type || ''}
                      onChange={(e) => handleFormChange('type', e.target.value)}
                      placeholder="객실 타입을 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>수용 인원 *</label>
                    <input
                      type="number"
                      className="form-input"
                      value={formData.capacity || ''}
                      onChange={(e) => handleFormChange('capacity', parseInt(e.target.value) || 0)}
                      placeholder="수용 인원"
                    />
                  </div>
                  <div className="form-group">
                    <label>평일 기본 요금 *</label>
                    <input
                      type="number"
                      className="form-input"
                      value={formData.basePrice || ''}
                      onChange={(e) => handleFormChange('basePrice', parseInt(e.target.value) || 0)}
                      placeholder="평일 기본 요금"
                    />
                  </div>
                  <div className="form-group">
                    <label>주말 요금 *</label>
                    <input
                      type="number"
                      className="form-input"
                      value={formData.weekendPrice || ''}
                      onChange={(e) => handleFormChange('weekendPrice', parseInt(e.target.value) || 0)}
                      placeholder="주말 요금"
                    />
                  </div>
                </>
              )}

              {/* 채널 폼 */}
              {activeTab === 'channel' && (
                <>
                  <div className="form-group">
                    <label>채널명 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.name || ''}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      placeholder="채널명을 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>수수료 (%) *</label>
                    <input
                      type="number"
                      className="form-input"
                      value={formData.commission || ''}
                      onChange={(e) => handleFormChange('commission', parseInt(e.target.value) || 0)}
                      placeholder="수수료"
                    />
                  </div>
                  <div className="form-group">
                    <label>연락처 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contact || ''}
                      onChange={(e) => handleFormChange('contact', e.target.value)}
                      placeholder="연락처를 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>상태 *</label>
                    <select
                      className="form-select"
                      value={formData.status || ''}
                      onChange={(e) => handleFormChange('status', e.target.value)}
                    >
                      <option value="">선택하세요</option>
                      <option value="활성">활성</option>
                      <option value="비활성">비활성</option>
                    </select>
                  </div>
                </>
              )}

              {/* 사용자 폼 */}
              {activeTab === 'user' && (
                <>
                  <div className="form-group">
                    <label>이름 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.name || ''}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>역할 *</label>
                    <select
                      className="form-select"
                      value={formData.role || ''}
                      onChange={(e) => handleFormChange('role', e.target.value)}
                    >
                      <option value="">선택하세요</option>
                      <option value="관리자">관리자</option>
                      <option value="매니저">매니저</option>
                      <option value="직원">직원</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>이메일 *</label>
                    <input
                      type="email"
                      className="form-input"
                      value={formData.email || ''}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>전화번호 *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.phone || ''}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      placeholder="전화번호를 입력하세요"
                    />
                  </div>
                  <div className="form-group">
                    <label>상태 *</label>
                    <select
                      className="form-select"
                      value={formData.status || ''}
                      onChange={(e) => handleFormChange('status', e.target.value)}
                    >
                      <option value="">선택하세요</option>
                      <option value="활성">활성</option>
                      <option value="비활성">비활성</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={closeModal}>취소</button>
              <button className="modal-btn confirm" onClick={handleSubmit}>
                {modalType === 'add' ? '추가' : '수정'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
