import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { debounce } from 'lodash';
import Theme from './styles/Theme';
import Header from './components/common/Header';
import Screens from './screens/Screens';

function App() {

  const [clickSound, setClickSound] = useState(false);
  
  // function - window Click
  const debounceClick = debounce(() => {

      setClickSound(false);

  },200);

  const winClick = () => {

      setClickSound(true);

      debounceClick();

  }

  useEffect(() => {



  })

  return (

      <div id="container">
        
        <ThemeProvider theme={Theme} >
          <Screens onClick={ () => { winClick(); } } />
        </ThemeProvider>
          {
            clickSound && 
            <audio autoPlay={ clickSound } src="http://ppaxe.kr/profile/contents/sound/sound_click.mp3" />
          }
      
      </div>

  );
}

export default App;
