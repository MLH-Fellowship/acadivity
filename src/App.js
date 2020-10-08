import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Screens/Signup';
import Signin from './Screens/Signin';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
