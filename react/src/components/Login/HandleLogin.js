import {
  loadUserData,
  saveDataWithExpiration,
} from '../CookieUtils/SecureLocalStorageExtends.js';
import { isDemoMode } from '../../mocks/mockApi.js';

const HandleLogin = ({ assertLogin, navigate, toWhere, onLoginSuccess }) => {
  // Demo 모드에서는 항상 로그인 상태
  if (isDemoMode) {
    const demoUser = {
      isLogin: true,
      name: '김민지',
      platform_type: 'DEMO',
    };

    saveDataWithExpiration('isLogin', true, 3600);
    saveDataWithExpiration('name', demoUser.name);
    saveDataWithExpiration('platform_type', demoUser.platform_type);

    onLoginSuccess?.();
    navigate?.(toWhere);
    return;
  }

  // actual login logic
  const isLogin = loadUserData('isLogin');

  const loginFail = (alertString = '로그인이 필요합니다.') => {
    if (assertLogin) {
      setTimeout(() => alert(alertString), 0);
      if (navigate) {
        navigate('/login', { state: { from: toWhere } });
      } else {
        window.location.href = '/login';
      }
    }
  };

  if (isLogin) {
    onLoginSuccess?.();
    navigate?.(toWhere);
    return;
  }

  loginFail();
};

export default HandleLogin;
