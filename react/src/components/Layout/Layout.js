import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import secureLocalStorage from 'react-secure-storage';
import {
  loadDataWithExpiration,
  saveDataWithExpiration,
} from '../CookieUtils/SecureLocalStorageExtends';
import './Layout.scss';

const Layout = ({ children }) => {
  const location = useLocation();
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  useEffect(() => {
    const hideHeaderPaths = ['/landing'];
    const shouldHide = hideHeaderPaths.some((path) =>
      location.pathname.startsWith(path)
    );
    const storedHideHeader = loadDataWithExpiration('hideHeader');
    const isHeaderHidden = shouldHide || storedHideHeader === 'true';
    setShouldHideHeader(isHeaderHidden);
    saveDataWithExpiration('hideHeader', isHeaderHidden);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check and clear data if version mismatch
  useEffect(() => {
    const version = secureLocalStorage.getItem('storageVersion');
    if (version !== process.env.REACT_APP_STORAGE_VERSION) {
      secureLocalStorage.clear();
      secureLocalStorage.setItem(
        'storageVersion',
        process.env.REACT_APP_STORAGE_VERSION
      );
    }
  }, []);

  return (
    <div
      className={`layout-container ${
        shouldHideHeader ? 'layout-no-header' : ''
      }`}
    >
      {!shouldHideHeader && (
        <div className="layout-header">
          <Header />
        </div>
      )}

      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;
