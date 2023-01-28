import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';

function Layout({ children }) {
  return (
    <Background src='images/globeOverlay.png'>
      <Header />
      {children}
      <Footer />
    </Background>
  );
}

export default Layout;
