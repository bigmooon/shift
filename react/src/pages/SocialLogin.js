import ShiftIcon from "../assets/images/ShiftIcon_transparent.png";
import ShiftLogo from '../assets/images/ShiftLogo_Purple.svg';
import Kakao from "../assets/images/kakao_login.png";
import { useLocation } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  // TODO: redirect to the privious page after login does not work
  const from = location.state?.from;
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_CALLBACK
  const KAKAO_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&prompt=select_account&response_type=code` + (from ? `&state=${from}` : "");

  const loginHandler = () => {
    window.location.href = KAKAO_LINK;
  };

  return (
    <div id="Container" className="socialContainer">
      <div className="socialWrapper">
        <div className="socialLogo">
          <img className="socialIconImg" src={ShiftIcon} alt="shiftIcon"/>
          <img className="socialLogoImg" src={ShiftLogo} alt="shiftLogo"/>
        </div>
        <div className="socialDes">
          <span>간편하게 로그인하고</span>
          <span>다양한 서비스를 이용해 보세요.</span>
        </div>
        <div className="kakaoLoginBox">
          <button onClick={loginHandler}>
            <img src={Kakao} alt="kakao login"></img>
          </button>
        </div>
      </div>
    </div>
  );

};

export default SocialLogin;
