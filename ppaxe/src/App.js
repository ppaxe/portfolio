import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Screens from './screens/Screens';

function App() {

  useEffect(() => {



  })

  return (

      <div id="container">
        
        <ThemeProvider theme={Theme} >
          <Screens />
        </ThemeProvider>
      
      </div>

  );
}

export default App;
