import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import routes from './util/routes';
import Header from './components/organisms/Header';
import { ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/organisms/Footer';

const theme = createTheme();


function App() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);    
    if (location.pathname == "/enterprise")
      document.documentElement.style.setProperty('--scrollBarColor', '#5290F2');
    else
      document.documentElement.style.setProperty('--scrollBarColor', '#917ebd');
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App min-h-screen mx-auto relative">
        <div className='mx-auto' style={{ maxWidth: '1400px' }}>
          {showHeader && <Header />}
          <Suspense
            fallback={
              <div style={{ marginTop: '40vh', textAlign: 'center' }}>
                <CircularProgress color="secondary" />
              </div>
            }
          >
            <div className="">
              <Routes>
                {routes.map((route) => (
                  <Route {...route} />
                ))}
              </Routes>
            </div>
          </Suspense>
        </div>
      </div>
      {showFooter && <Footer />}
    </ThemeProvider>
  );
}

export default App;
