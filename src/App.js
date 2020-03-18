import React from 'react';
import { Route, Switch} from 'react-router'
import { Link} from 'react-router-dom'
import Login from './components/Login'
import {Layout} from './components/Layout'
import {NavigationBar} from './components/Navigationbar'


function App() {









  return (


    <>
    <Layout>

    <NavigationBar />
    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      
    </Switch>
    
    </Layout>
      

       
    </>
  );
}

export default App;
