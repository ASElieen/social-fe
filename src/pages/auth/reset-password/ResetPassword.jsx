import { useState } from 'react';
import { authService } from '@services/api/auth/auth.service';
import './ResetPassword.scss';
import { Link, useSearchParams } from 'react-router-dom';
import backgroundImage from '@/assets/images/background.jpg';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { FaArrowLeft } from 'react-icons/fa';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [respMessage, setRespMessage] = useState('');

  const [searchParam] = useSearchParams();

  const resetPassword = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const bdy = { password, confirmPassword };
      const resp = await authService.resetpassword(searchParam.get('token'), bdy);
      setLoading(false);
      setPassword('');
      setConfirmPassword('');
      setShowAlert(false);
      setAlertType('alert-success');
      setRespMessage(resp?.data?.message);
    } catch (error) {
      setAlertType('alert-error');
      setLoading(false);
      setShowAlert(true);
      setRespMessage(error?.response?.data?.message);
    }
  };
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs reset-password-tabs" style={{ height: `${respMessage ? '400px' : ''}` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login reset-password">重置密码</div>
              </li>
            </ul>
            <div className="tab-item">
              <div className="auth-inner">
                {respMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {respMessage}
                  </div>
                )}
                <form className="reset-password-form" onSubmit={resetPassword}>
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      labelText="新密码"
                      placeholder="请输入新密码"
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <Input
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      value={confirmPassword}
                      labelText="再次输入新密码"
                      placeholder="请确认新密码"
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  <Button
                    label={loading ? '正在处理中,请稍后.......' : '重置密码'}
                    className="auth-button button"
                    disabled={false}
                  />

                  <Link to={'/'}>
                    <span className="login">
                      <FaArrowLeft className="arrow-left" /> 返回登录页
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
