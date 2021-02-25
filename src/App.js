import React, { Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from './components/main';
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