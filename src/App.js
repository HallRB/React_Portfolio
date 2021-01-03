import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from './components/footer'
class App extends Component {
  render() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header title="Richard B. Hall" scroll>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <div class="foot">
          <Content>
            Richard B. Hall
        <Footer/>
          </Content>
        </div>
    </Layout>
</div>
  )
  }  
}
export default App;