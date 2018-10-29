import React, { Component } from 'react';
import logo from '../logo.svg';
import {
  HashRouter ,
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

import MainContainer from './main/main'

const routes = [
  // {
  //     path: '/login',
  //     component: LoginContainer
  // },
  {
      path: '/main',
      component: MainContainer
  }
];


class App extends Component {
  render() {
    return (
    
        <BrowserRouter >
          <div id="routerWrap" className="wrap">
            <Switch>
            {routes.map((route, i) => (
                            <Route key={i} path={route.path} component={route.component}/>
                        ))}
            {/* <Redirect to="/main"/> */}
                       
            </Switch>

          </div>

        </BrowserRouter>
      
    );
  }
}

export default App;
