import { Button, CssBaseline, Grid } from '@mui/material';
import React, { useState } from 'react';
import Experience from './components/Experience';
import GeneralInfo from './components/generalInfo';
import Header from './components/header';
import Education from './components/Education';

function App() {
  
  const [expSection, setExpSection] = useState([]);
  const addExperienceSection = () =>{

      setExpSection(expSection.concat(<Experience key={expSection.length} />));
    

    }

  const [eduSection, setEduSection] = useState([]);
  const addEducationSection = () =>{

      setEduSection(eduSection.concat(<Education key={eduSection.length} />));
    
    }

  
  
  return (
    <div>
      <Header/>
     <Grid container align="center" spacing={1}>
        <Grid xs={3}></Grid>   
          <Grid xs={6}>
            <CssBaseline>
              <GeneralInfo/>
              {expSection}
              {eduSection}
              <Button onClick={addExperienceSection}>Add Experience Section</Button>
              <Button onClick={addEducationSection}>Add Education Section</Button>
            </CssBaseline>
          </Grid>
        <Grid xs={3}></Grid>
     </Grid>
    </div>

  );
}

export default App;
