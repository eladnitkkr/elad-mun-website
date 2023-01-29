import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import theme from './theme';
import Main from './components/Main';
import CollegeModal from './components/CollegeModal';
import Error from './components/Error';

import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Layout from './components/Layout';

function App() {
  localStorage.setItem('chakra-ui-color-mode', 'dark');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    console.log('App component mounted.');
    onOpen();
  }, [onOpen]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path='/'
              exact
              element={
                college ? (
                  <Main college={college} />
                ) : (
                  <CollegeModal
                    isOpen={isOpen}
                    onClose={onClose}
                    setCollege={setCollege}
                  />
                )
              }
            />
            <Route path='*' element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
