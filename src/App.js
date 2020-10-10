import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Styles/App.css';
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import Signup from './Screens/Signup';
import Signin from './Screens/Signin';
import ProjectList from './Screens/ProjectList';
import Timer from './Screens/Timer';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/projectlist" component={ProjectList} />
          <Route exact path="/timer" component={Timer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
