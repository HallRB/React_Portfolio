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