import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Loader from './components/common/Loader';
import Screens from './screens/Screens';

function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {

    if( localStorage.getItem('USER_LOADER') ){

      setLoader(false);

    }else{
      
      setTimeout(() => {

        localStorage.setItem('USER_LOADER','DONE');
        setLoader(false);

      },2000)

    }

  },[loader])

  return (

      <div id="container">
        
        <ThemeProvider theme={Theme} >
          {
            loader &&
            <Loader />
          }
            <Screens />
        </ThemeProvider>
      
      </div>

  );
}

export default App;
