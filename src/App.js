import React from "react";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { Layout } from "./components/Layout";
import NavigationBar from "./components/layouts/Navigationbar";
import Footer from "./components/layouts/Footer";
import Home from './components/pages/Home'
import News from './components/pages/News'
import Contacts from './components/pages/Contacts'
import Details from './components/pages/Details'
import NotFoundpage from './components/pages/NotFoundPage'


function App() {
  return (
    <>
      {/* <Layout> */}
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/details" component={Details}/>
          <Route  component={NotFoundpage}/>

        </Switch>
        <Footer />
      {/* </Layout> */}
    </>
  );
}

export default App;
