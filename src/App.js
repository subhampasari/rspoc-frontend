import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Panel1 from './Panel1/Panel1';
import Panel2 from './Panel2/Panel2';
import Panel3 from './Panel3/Panel3';
import Panel4 from './Panel4/Panel4';
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
        <br></br>
        <Panel3 />
        <br></br>
        <Panel4 />

        <br></br><br></br>
      </div>
    );
  }
}

export default App;
