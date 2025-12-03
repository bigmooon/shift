import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import SocialLogin from './pages/SocialLogin';
import KakaoCallback from './components/Login/SocialLoginCallback';
import TOS from './pages/TOS';
import Privacy from './pages/Privacy';
import Error from './pages/Error';
import Landing from './pages/Landing';

import StartHost from './pages/LinkSender/StartHost';
import InfoHost from './pages/LinkSender/InfoHost';
import MyIdentity from './pages/LinkSender/MyIdentity';
import MyAspiration from './pages/LinkSender/MyAspiration';
import PerceivedByOthers from './pages/LinkSender/PerceivedByOthers';
import CompleteHost from './pages/LinkSender/CompleteHost';

import StartGuest from './pages/LinkReceiver/StartGuest';
import InfoGuest from './pages/LinkReceiver/InfoGuest';
import SelectKeyword from './pages/LinkReceiver/SelectKeyword';
import Reasoning from './pages/LinkReceiver/Reasoning';
import OneLineDescription from './pages/LinkReceiver/OneLineDescription';
import CompleteGuest from './pages/LinkReceiver/CompleteGuest';

import ResultDashBoard from './pages/Result/ResultDashBoard';
import Result from './pages/Result/Result';

import { loadDataWithExpiration } from './components/CookieUtils/SecureLocalStorageExtends';

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user has visited landing page
  useEffect(() => {
    const hasVisitedLanding = loadDataWithExpiration('hasVisitedLanding');
    if (
      !hasVisitedLanding &&
      location.pathname === '/' &&
      location.state?.from !== '/landing'
    ) {
      navigate('/landing');
    }
  }, [location, navigate]);

  return (
    <Layout>
      <Routes>
        {/* Social Login Callback */}
        <Route path="/kakao_callback" element={<KakaoCallback />}></Route>

        {/* LinkSender */}
        <Route path="/" element={<StartHost />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/login" element={<SocialLogin />}></Route>
        <Route path="/host/info" element={<InfoHost />}></Route>
        <Route path="/host/identity" element={<MyIdentity />}></Route>
        <Route path="/host/aspiration" element={<MyAspiration />}></Route>
        <Route path="/host/perception" element={<PerceivedByOthers />}></Route>
        <Route path="/host/completion" element={<CompleteHost />}></Route>

        {/* LinkReceiver */}
        <Route path="/guest/:tid" element={<StartGuest />}></Route>
        <Route path="/guest/info/:tid" element={<InfoGuest />}></Route>
        <Route path="/guest/keyword/:tid" element={<SelectKeyword />}></Route>
        <Route path="/guest/reasoning/:tid" element={<Reasoning />}></Route>
        <Route
          path="/guest/description/:tid"
          element={<OneLineDescription />}
        ></Route>
        <Route path="/guest/completion/" element={<CompleteGuest />}></Route>

        {/* Result */}
        <Route path="/result/dashboard" element={<ResultDashBoard />}></Route>
        <Route path="/result/detail/" element={<Result />}></Route>

        {/* Footer Links */}
        <Route path="/terms" element={<TOS />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
