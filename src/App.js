import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Panel1 from './Panel1/Panel1';
import Panel3 from './Panel3/Panel3';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      products: [],
      features: []
    }
  }

  componentDidMount() {
    let exp=[], prod=[], feat=[];
    fetch('http://localhost:8080/getEntities')
        .then(res => res.json())
        .then(
            (result) => {
                result.forEach((value) => {
                    if(value.type === 'Experience')
                        exp.push(value);
                    else if(value.type === 'Product')
                        prod.push(value);
                    else if(value.type === 'Feature')
                        feat.push(value);
                    
                });
                this.setState({
                    experiences: exp,
                    products: prod,
                    features: feat
                });
                // console.log(this.state.experiences);
            },
            (error) => {
                console.log(error);
            }
        )
}

  render() {
    return (
      <div className="App">
        <Header />
        <Panel1 exp={this.state.experiences} prod={this.state.products} feat={this.state.features}/>
        <br></br>
        <Panel3 />
        <br></br><br></br>
      </div>
    );
  }
}

export default App;
