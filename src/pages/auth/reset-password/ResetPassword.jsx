import './ResetPassword.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/images/background.jpg';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { FaArrowLeft } from 'react-icons/fa';

const ResetPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs reset-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login reset-password">重置密码</div>
              </li>
            </ul>
            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts" role="alert">
                  Error message
                </div> */}
                <form className="reset-password-form">
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value=""
                      labelText="新密码"
                      placeholder="请输入新密码"
                      handleChange={() => {}}
                    />
                    <Input
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      value=""
                      labelText="再次输入新密码"
                      placeholder="请确认新密码"
                      handleChange={() => {}}
                    />
                  </div>
                  <Button label="重置" className="auth-button button" disabled={false} />

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
