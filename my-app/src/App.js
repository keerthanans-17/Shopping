import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../src/components/Welcome";
import Shops from "../src/components/Shops";
import AboutUs from "../src/components/AboutUs";
import Feedback from "../src/components/Feedback";
class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <div>
            <div className="fixed__header">
            <nav className="navbar">
              {/* <ul className="menu__items">
                <li>
                  <Link to="/">
                    OnileShopping
                  </Link>
                </li>
                <li>
                  <Link to="/Shops">
                    Shops
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link to="/Feedback">
                    Feedback
                  </Link>
                </li>
              </ul>  */}
              <a className="menu__items" href="/">OnileShopping</a>
              <a className="menu__items" href="/Shops">Shops</a>
              <a className="menu__items" href="/AboutUs">AboutUs</a>
              <a className="menu__items" href="/Feedback">Feedback</a>
            </nav>
            </div>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/Shops">
                <Shops />
              </Route>
              <Route path="/AboutUs">
                <AboutUs />
              </Route>
              <Route path="/Feedback">
                <Feedback />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App