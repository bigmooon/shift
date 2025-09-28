import { loadUserData } from '../CookieUtils/SecureLocalStorageExtends.js';

const HandleLogin = ({ assertLogin, navigate, toWhere, onLoginSuccess }) => {
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

  // if the login information is in the local storage, process immediately
  if (isLogin) {
    onLoginSuccess?.();
    navigate?.(toWhere);
    return;
  }

  loginFail();

  // server verification in the background (optional)
  // TryFetch(
  //   'verify_login',
  //   'GET',
  //   {},
  //   (data) => {
  //     if (data.expires_in && data.expires_in > 60) {
  //       const expires_in = data.expires_in - 10;
  //       saveUserData('isLogin', true, expires_in);
  //       saveUserData('name', data.name);
  //       // 이미 로그인 페이지로 이동했으므로 추가 처리 안함
  //     }
  //   },
  //   () => {
  //     // 서버 검증 실패는 무시 (이미 로컬에서 처리됨)
  //   }
  // );
};

export default HandleLogin;
