import React, { Component } from 'react';
import { Container } from 'react-bulma-components';
import NavigationBar from './components/Navbar/Navbar';
import BlogPostList from  './components/BlogPostList/BlogPostList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Container fluid>
          <BlogPostList />
        </Container>
       
      </div>
    );
  }
}

export default App;
