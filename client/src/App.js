import React from 'react'
import {
  BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Header from './components/Layout/Header'
import Home from './components/Home'
import Cow from './components/Cow'
import Buffalo from './components/Buffalo';
import './App.css'
import Post from './components/Post';
import Question from './components/question/Question';
import User from './components/user/User';
import Phone from './components/Layout/Phone';
import Otp from './components/Layout/Otp';
import Address from './components/Layout/Address';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cow" component={Cow} exact/>
        <Route path="/buffalo" component={Buffalo} exact />
        <Route path="/post"  component={Post}  exact />
        <Route path="/question"  component={Question} exact />
        <Route path="/user" component={User}  exact />
        <Route path="/phone" component={Phone} exact />
        <Route path="/otp" component={Otp} exact />
        <Route path="/address" component={Address} exact />
      </Switch>
    </Router>
  )
}

export default App
