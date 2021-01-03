import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
class App extends Component {
  render() {
  return (
    <div className="bodycard">
<div className="demo-big-content">
    <Layout>
      <div class="headercss">
        <Header title="Richard B. Hall">
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        </div>
        <RemoveScrollBar />
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