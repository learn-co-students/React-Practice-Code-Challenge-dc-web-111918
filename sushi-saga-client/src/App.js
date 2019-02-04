import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    sushiOnTable: [],
    sushiIndex: 0,
    moneyRemaining: 70
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => {
        this.setState({
          sushi: sushiData
        })
      })
  }

  handleAddSushi = (sushiObj) => {
    //validation
    if (this.state.moneyRemaining >= sushiObj.price) {
      this.setState({
        sushiOnTable: [...this.state.sushiOnTable, sushiObj],
        moneyRemaining: this.state.moneyRemaining - sushiObj.price
      })
    }
  }

  handleMoreButton = () => {
    console.log('hiii')
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiArr={this.state.sushi}
          addSushi={this.handleAddSushi}
          sushiIndex={this.state.sushiIndex}
          renderSushi={this.handleMoreButton}
          sushiOnTable={this.state.sushiOnTable}
        />
        <Table
          sushiArr={this.state.sushiOnTable}
          moneyRemaining={this.state.moneyRemaining}
        />
      </div>
    );
  }
}

export default App;