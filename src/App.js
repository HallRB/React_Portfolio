import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
  return (
    <div className="bodycard">
<div className="demo-big-content">
    <Layout>
      <div class="headercss">
        <Header title="Richard B. Hall">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">About Me</Link>
            </Navigation>
        </Header>
        </div>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
</div>
  )
  }  
}
export default App;