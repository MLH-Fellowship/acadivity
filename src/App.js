import React from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Styles/App.css';
// import Home from './Screens/Home';
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './Screens/Signup';
import Signin from './Screens/Signin';
import ProjectList from './Screens/ProjectList';
import Statistics from './Screens/Statistics';
import ViewProject from './Screens/ViewProjects';
import NewProject from './Screens/NewProject';
import LandingPage from './Screens/Landing-Page/Page/Home'
import Timerpage from './Screens/Timer-page';
import { NavigationBar } from './Components/Navbar/NavigationBar';
import Sidebar from './Components/Navbar/Sidebar';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Switch>
//           <Route path='/' exact component={LandingPage}/>
//         </Switch>
//         {/* <Navbar/> */}
//         <Switch>
//           {/* <Route exact path="/" component={Home}/> */}
//           <Route exact path="/signup" component={Signup} />
//           <Route exact path="/signin" component={Signin} />
//           {/* <Route exact path="/projectlist" component={ProjectList} /> */}
//           <Route exact path="/timer" component={Timerpage} />
//         </Switch>
//         <Switch>
//           <Route path='/statistics' exact component={Statistics}/>
//         </Switch>
//         <Switch>
//           <Route path='/ViewProjects' exact component={ViewProject}/>
//         </Switch>
//         <Switch>
//           <Route path='/newProject' exact component={NewProject}/>
//         </Switch>
//       </BrowserRouter>
//     </> 
//   );
// }

function App() {
  return (
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
  );
}

export default App;
