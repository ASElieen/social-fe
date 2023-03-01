import React, { useState } from 'react';
import './AuthTabs.scss';
import backgroundImage from '@/assets/images/background.jpg';
import { Login, Register } from '../AuthIndex';

const AuthTabs = () => {
  const [type, setType] = useState('login');
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li
                className={`tab ${type === 'login' ? 'active' : ''}`}
                onClick={() => {
                  setType('login');
                }}
              >
                <button className="login">登录</button>
              </li>
              <li
                className={`tab ${type === 'signup' ? 'active' : ''}`}
                onClick={() => {
                  setType('signup');
                }}
              >
                <button className="signup">注册</button>
              </li>
            </ul>
            {type === 'login' && (
              <div className="tab-item">
                <Login />
              </div>
            )}
            {type === 'signup' && (
              <div className="tab-item">
                <Register />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
