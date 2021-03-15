import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Wrapper = styled.div`
  min-height: 82vh;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default Layout;
