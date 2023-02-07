import { CssBaseline } from '@mui/material';
import React from 'react';
import Experience from './components/Experience';
import GeneralInfo from './components/generalInfo';
import Header from './components/header';

function App() {
  return (
    <div>
      <CssBaseline>
          <Header/>
          <GeneralInfo/>
          <Experience/>
      </CssBaseline>
    </div>

  );
}

export default App;
