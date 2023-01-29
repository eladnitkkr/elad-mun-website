import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Main from './components/Main';
import Error from './components/Error';

import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Layout from './components/Layout';

function App() {
  localStorage.setItem('chakra-ui-color-mode', 'dark');
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' exact element={<Main />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
