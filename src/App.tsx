import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import routes from './util/routes';
import Header from './components/organisms/Header';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  return (
    <ThemeProvider theme={theme}>      
        <div className="App min-h-screen">
          {showHeader && <Header />}          
          <Suspense
            fallback={
              <div style={{ marginTop: '40vh', textAlign: 'center' }}>
                <CircularProgress color="secondary" />
              </div>
            }
          >          
                <div className="md:p-5 ">
                    <Routes>                    
                        {routes.map((route) => (
                            <Route {...route} />
                        ))}          
                    </Routes>           
                </div>
            </Suspense>
        </div>      
    </ThemeProvider>
  );
}

export default App;
