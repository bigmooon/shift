import React, { useState, useRef } from 'react';
import './Header.scss';
import Logo from '../../assets/images/HeaderLogo.svg';
import NavBtn from '../../assets/images/NavBtn.svg';
import HamburgerMenu from '../Hamburger/HamburgerMenu';
import { Link } from 'react-router-dom';
import { loadUserData } from '../CookieUtils/SecureLocalStorageExtends';
import UseOutsideClick from '../Modal/UseOutsideClick';

const Header = () => {
  const name = loadUserData('name');
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const hamburgerMenuRef = useRef();

  const toggleHamburgerMenu = () => {
    if (isAnimating) return; // if animation is in progress, ignore

    if (showHamburgerMenu) {
      setIsAnimating(true);
      setIsClosing(true);
      setTimeout(() => {
        setShowHamburgerMenu(false);
        setIsAnimating(false);
        setIsClosing(false);
      }, 280);
    } else {
      setShowHamburgerMenu(true);
      setIsAnimating(true);
      setIsClosing(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  };

  UseOutsideClick(hamburgerMenuRef, () => {
    if (showHamburgerMenu && !isAnimating) {
      toggleHamburgerMenu();
    }
  });

  // prevent event propagation when clicking the hamburger button
  const handleHamburgerButtonClick = (e) => {
    e.stopPropagation();
    toggleHamburgerMenu();
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Link to="/">
          <img className="headerLogo" src={Logo} alt="mainLogo"></img>
        </Link>
      </div>
      <div className="headerRight">
        <div className="headerName">
          {name !== undefined && name !== null && <span>{name}님</span>}
        </div>
        <div className="headerBtnContainer">
          <button
            onClick={handleHamburgerButtonClick}
            style={{ position: 'relative', zIndex: 1001 }}
          >
            <img src={NavBtn} alt="navigationButton"></img>
          </button>
          {(showHamburgerMenu || isAnimating) && (
            <div ref={hamburgerMenuRef}>
              <HamburgerMenu
                isOpen={showHamburgerMenu}
                toggleMenu={toggleHamburgerMenu}
                isAnimating={isAnimating}
                isClosing={isClosing}
              />
            </div>
          )}
          {(showHamburgerMenu || isAnimating) && (
            <div
              className={`hamburgerBackground ${isClosing ? 'fade-out' : ''}`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
