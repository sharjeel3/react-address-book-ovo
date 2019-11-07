import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from './ui-library/global';
import { AddressBookView } from './views/AddressBook';
import { Layout } from './ui-library/Layout';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AddressBookView />
      </Layout>
    </>
  );
}

export default App;
