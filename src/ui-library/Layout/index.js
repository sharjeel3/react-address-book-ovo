import React from 'react';
import { Header } from '../Header';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// A dummy wrapper
const Wrapper = styled.div`
  position: relative;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
