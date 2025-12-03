import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveDataWithExpiration } from '../CookieUtils/SecureLocalStorageExtends.js';
import { mockApi, isDemoMode } from '../../mocks/mockApi';

const SocialLoginCallback = () => {
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);

  const code = urlParams.get('code');
  const error = urlParams.get('error');
  const error_description = urlParams.get('error_description');
  const state = urlParams.get('state');

  const data = {};
  if (code) {
    data.code = code;
  }
  if (error) {
    data.error = error;
  }
  if (error_description) {
    data.error_description = error_description;
  }

  const verifyLogin = async () => {
    try {
      // if demo mode, use mock data
      if (isDemoMode) {
        const resp_data = await mockApi.login();
        for (let key in resp_data) {
          saveDataWithExpiration(key, resp_data[key]);
        }
        saveDataWithExpiration('isLogin', true, 3600);
        if (state) {
          navigate(state);
        } else {
          navigate('/');
        }
        return;
      }

      // 실제 서버 요청
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/kakao_callback`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          credentials: 'include',
        }
      );
      if (response.status === 200 || response.status === 201) {
        const resp_data = await response.json();
        for (let key in resp_data) {
          saveDataWithExpiration(key, resp_data[key]);
        }
        if (state) {
          navigate(state);
        } else {
          navigate('/');
        }
      } else {
        alert('Failed to login. Please try again.');
        navigate('/login', { state: { from: state } });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    verifyLogin();
  }, []);

  return null; // This component does not render anything
};

export default SocialLoginCallback;
