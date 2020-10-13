import React from 'react';
import Timerpage from './Screens/Timer-page';
import { NavigationBar } from './Components/Navbar/NavigationBar';
import Sidebar from './Components/Navbar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Statistics from './Screens/Statistics';
import ViewProject from './Screens/ViewProjects';
import NewProject from './Screens/NewProject';

export default function childApp(){
    return(
        <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/ViewProjects" component={ViewProject} />
          <Route exact path="/newProject" component={NewProject} />
          <Route exact path="/timer" component={Timerpage} />
        </Switch>
      </Router>
    </React.Fragment>
    )
}