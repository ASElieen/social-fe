import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/images/background.jpg';
import { authService } from '../../../services/api/auth/auth.service';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [respMessage, setRespMessage] = useState('');

  const forgotPassword = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const resp = await authService.forgotpassword(email);
      setLoading(false);
      setEmail('');
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
        {/* 给个高度防止显示信息时到底下方按钮溢出 */}
        <div className="tabs forgot-password-tabs" style={{ height: `${respMessage ? '300px' : ''}` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">忘记密码</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {respMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {respMessage}
                  </div>
                )}
                <form className="forgot-password-form" onSubmit={forgotPassword}>
                  <div className="form-input-container">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value={email}
                      labelText="Email"
                      placeholder="请输入您的邮箱地址"
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <Button
                    label={loading ? '正在处理中,请稍后.......' : '忘记密码'}
                    className="auth-button button"
                    disabled={true}
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

export default ForgotPassword;
