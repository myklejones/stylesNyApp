import React from 'react';
import { Route, Switch} from 'react-router'
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {Layout} from './components/Layout'
import NavigationBar from './components/Navigationbar'
import { Container } from 'react-bootstrap'


function App() {









  return (


    <>
    <Layout >

    <NavigationBar />
    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      
    </Switch>

    <Container>

    </Container>
    
    </Layout>
      

       
    </>
  );
}

export default App;
