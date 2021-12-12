import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Container from './screens/Container';

function App() {

  return (

      <div id="container">
        
        <ThemeProvider theme={Theme} >

            <Container />
            
        </ThemeProvider>
      
      </div>

  );
}

export default App;
