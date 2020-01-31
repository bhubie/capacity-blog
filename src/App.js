import React, { Component } from 'react';
import { Container, Section } from 'react-bulma-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './components/Navbar/Navbar';
import Home from  './components/Home/Home';
import BlogPost from './components/BlogPost/BlogPost';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Container fluid>
            <Section>
              <Switch>
                  <Route path="/:userID/:blogID">
                    <BlogPost />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
            </Section>
            
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
