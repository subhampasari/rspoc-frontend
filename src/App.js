import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Panel1 from './Panel1/Panel1';
import Panel2 from './Panel2/Panel2';
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Panel1 />
        <br></br>
        <Panel2 />
      </div>
    );
  }
}

export default App;
