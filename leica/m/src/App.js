import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Container from './screens/Container';

function App() {

  return (
    <div id="container">
        {/*  contents */}
          <ThemeProvider theme={Theme}>
            <Container />
          </ThemeProvider>
        {/*  // contents */}
    </div>
  );
}


export default App;
