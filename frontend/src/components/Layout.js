import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const [currentDate] = useState(new Date().toLocaleDateString('ko-KR'));
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('ko-KR'));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('ko-KR'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const menuItems = [
    {
      label: '홈',
      path: '/home',
      submenu: [
        { label: '실시간', path: '/home/realtime' },
        { label: '당월 누적매출', path: '/home/monthly-revenue' },
        { label: 'OCC율', path: '/home/occupancy' }
      ]
    },
    {
      label: '지점',
      path: '/branch',
      submenu: [
        { label: 'PMS', path: '/branch/pms/1' },
        { label: '판매일보', path: '/branch/sales/1' },
        { label: '예약현황', path: '/branch/reservation/1' },
        { label: '직원관리', path: '/branch/staff/1' }
      ]
    },
    {
      label: '재무',
      path: '/finance',
      submenu: [
        { label: '매출', path: '/finance/revenue' },
        { label: '원가', path: '/finance/cost' },
        { label: '자금 유동성', path: '/finance/cash-flow' }
      ]
    },
    {
      label: '이벤트',
      path: '/events',
      submenu: [
        { label: '사용자 로그', path: '/events/user-log' },
        { label: 'CCTV', path: '/events/cctv' }
      ]
    },
    {
      label: '설정',
      path: '/settings',
      submenu: [
        { label: '프로젝트 관리', path: '/settings/project' },
        { label: '객실 타입 관리', path: '/settings/room-type' },
        { label: '채널 관리', path: '/settings/channel' },
        { label: '사용자 관리', path: '/settings/user' },
        { label: '시스템 설정', path: '/settings/system' }
      ]
    }
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>STAY-G</h1>
          </Link>
        </div>

        <nav className="header-nav">
          {menuItems.map((menu, index) => (
            <div key={index} className={`nav-dropdown ${isActive(menu.path) ? 'active' : ''}`}>
              <span className="nav-label">{menu.label}</span>
              <div className="dropdown-menu">
                {menu.submenu.map((item, subIndex) => (
                  <Link
                    key={subIndex}
                    to={item.path}
                    className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="header-right">
          <span className="date">{currentDate}</span>
          <span className="time">{currentTime}</span>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
