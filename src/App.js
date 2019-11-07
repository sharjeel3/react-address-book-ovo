import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from './ui-library/global';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

function App() {
  return (
    <>
      <GlobalStyles />
    </>
  );
}

export default App;
