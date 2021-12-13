// eslint-disable-next-line

// ================================================================

// Contents js

// Author : 박세연

// Summary : Router 값에 따른 페이지를 호출하기 위함

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './../contents/NotFound';

const Contents = memo(() => {

    return(
        <>
            <section>
                <Switch>
                    <Route exact path="/">

                    </Route>
                    
                    <Route exact path="/product/:id">
                        
                    </Route>
                    
                    <Route exact path="/academy">
                        
                    </Route>
                    
                    <Route exact path="/wwa">
                        
                    </Route>
                    
                    <Route exact path="/store:id">
                        
                    </Route>
                    
                    <Route exact path="/support">
                        
                    </Route>

                    <Route exact path="*">
                        
                        <NotFound />

                    </Route>

                </Switch>
            </section>
        </>
    )
});


export default Contents;
