import { clearUserData } from '../CookieUtils/SecureLocalStorageExtends';
import { mockApi, isDemoMode } from '../../mocks/mockApi';

const MAX_RETRIES = 3;
// Timeout, Bad Gateway, Service Unavailable, Gateway Timeout, Connection Timed Out, A Timeout Occurred
const RETRY_CODES = [408, 502, 503, 504, 522, 524];

// mapping for demo mode
const DEMO_ROUTES = {
  kakao_callback: () => mockApi.login(),
  verify_login: () => mockApi.verifyLogin(),
  logout: () => mockApi.logout(),
  total_num: () => mockApi.getTotalNum(),
  get_epa_keywords: () => mockApi.getEpaKeywords(),
  my_tests: () => mockApi.getMyTests(),
  save_epa: (body) => mockApi.saveEpaTest(body),
  save_epa_reply: (body) => mockApi.saveEpaReply(body),
  'result/epa': () => mockApi.getEpaResult(),
};

const matchEpaTestReply = (route) => {
  const match = route.match(/epa_test_reply\/(\d+)/);
  if (match) return () => mockApi.getEpaTestReply(match[1]);
  return null;
};

function TryFetch(route, method, body, onSuccess, onFail) {
  if (isDemoMode) {
    console.log(`[DEMO MODE] ${method} /${route}`, body);

    const handler = DEMO_ROUTES[route] || matchEpaTestReply(route);

    if (handler) {
      handler(body)
        .then((data) => {
          console.log(`[DEMO MODE] Response:`, data);
          onSuccess?.(data);
        })
        .catch((error) => {
          console.error(`[DEMO MODE] Error:`, error);
          onFail?.(error);
        });
      return;
    }

    // if the route is not mapped, print a warning
    console.warn(`[DEMO MODE] Unhandled route: ${route}`);
    onFail?.(new Error('Unhandled demo route'));
    return;
  }

  // actual server request
  const fetchData = async (retryCount = 0) => {
    try {
      const options = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      };
      if (method !== 'GET') {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/${route}`,
        options
      );
      if (response.ok) {
        const data = await response.json();
        onSuccess?.(data);
      } else {
        if (response.status === 401 || response.status === 403) {
          // when user is not authorized, clear the user data
          clearUserData();
          onFail?.(new Error('Unauthorized'));
        } else if (
          RETRY_CODES.includes(response.status) &&
          retryCount < MAX_RETRIES
        ) {
          setTimeout(() => fetchData(retryCount + 1), 3000);
        } else {
          onFail?.(
            new Error(`Request failed with status code ${response.status}`)
          );
        }
      }
    } catch (error) {
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => fetchData(retryCount + 1), 3000);
      } else {
        onFail?.(error);
      }
    }
  };

  fetchData();

  return null;
}

export default TryFetch;
