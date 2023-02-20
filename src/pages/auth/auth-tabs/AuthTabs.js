import React from 'react';
import './AuthTabs.scss';

const AuthTabs = () => {
    return (
        <div className="container-wrapper">
            <div className="environment">DEV</div>
            <div className="container-wrapper-auth">
                <div className="tabs">
                    <div className="tabs-auth">
                        <ul className="tab-group">
                            <li className="tab active">
                                <button className="login">登录</button>
                            </li>
                            <li className="tab">
                                <button className="signup">注册</button>
                            </li>
                        </ul>
                        <div className="tab-item">login component</div>
                        <div className="tab-item">register component</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthTabs;
