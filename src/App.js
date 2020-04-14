import React from 'react';
import { Route, Switch} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {Layout} from './components/Layout'
import NavigationBar from './components/layouts/Navigationbar'
import Footer from './components/layouts/Footer'
import { Container } from 'react-bootstrap'


function App() {









  return (


    <>
    <Layout >

    <NavigationBar />
    <br />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, voluptate! Ea inventore dignissimos, adipisci unde ducimus expedita, non aperiam distinctio dolores quae nisi!

    <Footer /> 




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
