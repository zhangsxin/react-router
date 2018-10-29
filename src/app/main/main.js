import React,{Component} from 'react'
import {
    HashRouter ,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'


import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'

const routes = [
  // {
  //     'name':'首页',
  //     path: '/home',
  //     component: HomeContainer
  // },
  {
      'name':'page1',
      path: '/page1',
      component: Page1
  },
  {
      'name':'page2',
      path: '/page2',
      component: Page2
  },
  {
      'name':'page3',
      path: '/page3',
      component: Page3
  }
];

class Container extends Component {
    render() {
        return (
            <div>
            <header>头部</header>
            <div id="routerWrap" className="wrap">
            <ul>
                <li><Link to="/main/page1">page1</Link></li>
                <li><Link to="/main/page2">page2</Link></li>
                <li><Link to="/main/page3">page3</Link></li>
            </ul>
            <div className="page">

            <Switch>
                        {routes.map((route, i) => {
                            return (
                                <Route key={i} path={this.props.match.url+route.path} component={route.component}/>
                            )})}
                        {/* <Redirect to={this.props.match.url+"/home"}/> */}
            </Switch>

            
            </div>
            

          </div>
        </div>
        )
        
    }
}


export default Container 