import React, { useState } from 'react';
import './AuthTabs.scss';
import backgroundImage from '../../../assets/images/background.jpg'

const AuthTabs = () => {
    const [type, setType] = useState('login')
    return (
        <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="environment">DEV</div>
            <div className="container-wrapper-auth">
                <div className="tabs">
                    <div className="tabs-auth">
                        <ul className="tab-group">
                            <li className="tab active" onClick={() => setType('login')}>
                                <button className="login">登录</button>
                            </li>
                            <li className="tab" onClick={() => setType('signup')}>
                                <button className="signup">注册</button>
                            </li>
                        </ul>
                        {
                            type === 'login' && <div className="tab-item">login component</div>
                        }
                        {
                            type === 'signup' && <div className="tab-item">register component</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthTabs;
