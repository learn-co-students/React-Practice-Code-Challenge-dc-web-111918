import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      "allSushi": [],
      "eatenSushi": [],
      "wallet": 100,
      "conveyorPosition": 0
    }
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => this.setState(
      {
        "allSushi": sushis,
      }
    ))
  }

  handleClickMoreBtn = () => {
    let currentPosition = this.state.conveyorPosition
    this.setState({
      "conveyorPosition": currentPosition+4,
    })
  }

  eatSushi = (eatenSushi) => {
    if(this.state.wallet >= eatenSushi.price && !this.state.eatenSushi.includes(eatenSushi)){
    this.setState({
      "eatenSushi": [...this.state.eatenSushi, eatenSushi],
      "wallet": this.state.wallet - eatenSushi.price,
    })
    console.log('trying to eat', eatenSushi.name)
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          allSushi = {this.state.allSushi}
          start = {this.state.conveyorPosition}
          clickMore = {this.handleClickMoreBtn}
          eatSushi = {this.eatSushi}
          eatenSushi ={this.state.eatenSushi}
          />
          
        <Table 
          remainingMoney = {this.state.wallet}
          eatenSushi ={this.state.eatenSushi}
          />
      </div>
    );
  }
}

export default App;