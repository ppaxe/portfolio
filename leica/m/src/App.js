import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/contents/Main';
import Product from './components/contents/Product';
import Academy from './components/contents/Academy';
import Wwa from './components/contents/Wwa';
import Store from './components/contents/Store';
import Support from './components/contents/Support';
import { products, academys, stores, supports } from './Data';



function App() {

  return (
    <div id="container">
        {/*  contents */}
          <ThemeProvider theme={Theme}>
            <Header />
              <div id="contents">
                <section>
                  <h2 className="blind">메인 컨텐츠</h2>
                <Route exact path="/">

                  <Main product={ products } academy={ academys } />

                </Route>
                <Route path="/product/:id">

                  <Product product={products} />

                </Route>
                <Route path="/academy">

                  <Academy academy={academys} />

                </Route>
                <Route path="/wwa">

                  <Wwa />
                
                </Route>
                <Route path="/store/:id">

                  <Store store={stores} />

                </Route>
                <Route path="/support">

                  <Support support={supports} />

                </Route>
                </section>
              </div>
            <Footer />
        </ThemeProvider>
        {/*  // contents */}
    </div>
  );
}

export default App;
