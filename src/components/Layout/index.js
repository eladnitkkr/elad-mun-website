import React from 'react';
import Header from '../Header';
import Background from '../Background';

function Layout({ children }) {
  return (
    <Background src='/globeOverlay.png'>
      <Header />
      {children}
    </Background>
  );
}

export default Layout;
