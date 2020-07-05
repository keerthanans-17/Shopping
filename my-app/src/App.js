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
            <nav>
              <ul>
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
              </ul>
            </nav>
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