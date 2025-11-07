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

  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <h1>STAY-G</h1>
        </div>
        <div className="header-right">
          <span className="date">{currentDate}</span>
          <span className="time">{currentTime}</span>
        </div>
      </header>

      <nav className="nav">
        <Link to="/" className={isActive('/') && location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
          홈
        </Link>
        <Link to="/branch" className={isActive('/branch') ? 'nav-item active' : 'nav-item'}>
          지점
        </Link>
        <Link to="/finance/revenue" className={isActive('/finance') ? 'nav-item active' : 'nav-item'}>
          재무
        </Link>
        <Link to="/assets" className={isActive('/assets') ? 'nav-item active' : 'nav-item'}>
          자산
        </Link>
        <Link to="/events/log" className={isActive('/events') ? 'nav-item active' : 'nav-item'}>
          이벤트
        </Link>
        <Link to="/settings" className={isActive('/settings') ? 'nav-item active' : 'nav-item'}>
          설정
        </Link>
      </nav>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
