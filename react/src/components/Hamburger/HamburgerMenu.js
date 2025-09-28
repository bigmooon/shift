import React, { useState } from 'react';
import Arrow from '../../assets/images/headerArrow.svg';
import './Hamburger.scss';
import { Link, useNavigate } from 'react-router-dom';
import { loadUserData } from '../CookieUtils/SecureLocalStorageExtends';
import HandleLogout from '../Login/HandleLogout';

const HamburgerMenu = ({ toggleMenu, isOpen, isAnimating, isClosing }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(loadUserData('isLogin'));
  const navigate = useNavigate();

  // determine the animation class
  const getAnimationClass = () => {
    if (!isAnimating) return '';
    return isClosing ? 'slide-exit-active' : 'slide-enter-active';
  };

  const showPreparationAlert = () => {
    alert('준비중입니다!  다음 컨텐츠도 기대헤주세요 :)');
  };

  const handleLogoutSuccess = () => {
    setIsLogin(false);
    toggleMenu();
  };

  const handleLogoutClick = () => {
    HandleLogout({ navigate, onLogoutSuccess: handleLogoutSuccess });
  };

  return (
    <div className={`hamburgerContainer ${getAnimationClass()}`}>
      <ul className="hamburgerUl">
        <li
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className={`hamburgerLi ${isSubMenuOpen ? 'active' : ''}`}
        >
          <img src={Arrow} alt="arrow"></img>
          <span className="hamburgerLiSpan">자기이해 검사</span>
          {isSubMenuOpen && (
            <ul className="hamburgerSubUl">
              <Link to={'/'} onClick={toggleMenu}>
                <li className="hamburgerSubLi">
                  <span>남이 보는 나 ( MZ 버전 )</span>
                </li>
              </Link>
              <li className="hamburgerSubLi" onClick={showPreparationAlert}>
                <span>남이 보는 나 (대학생 버전)</span>
              </li>
            </ul>
          )}
        </li>
        <li className="hamburgerLi">
          <Link to={'/result/dashboard'} onClick={toggleMenu}>
            <span className="hamburgerLiSpan">결과 확인</span>
          </Link>
        </li>
        <li className="hamburgerLi" onClick={toggleMenu}>
          <a href="mailto:godsaenglab@gmail.com?subject=의견 보내기&body=여기에 의견을 작성해주세요.">
            <span className="hamburgerLiSpan">의견보내기</span>
          </a>
        </li>
        <li className="hamburgerLi">
          {isLogin ? (
            <span className="hamburgerLiSpan" onClick={handleLogoutClick}>
              로그아웃
            </span>
          ) : (
            <Link to={'/login'} onClick={toggleMenu}>
              <span className="hamburgerLiSpan">로그인</span>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
