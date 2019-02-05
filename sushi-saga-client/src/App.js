import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    index: 0,
    balance: 100,
    eatenSushi: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
  }

  getFourSushis = () => {
    let i = this.state.index
    let fourSushi = this.state.sushis.slice(i, i + 4)
    return fourSushi
  }

  handleMoreClick = () => {
    let i = this.state.index
    if (i > 95) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: i + 4
      })
    }
  }

  handleEatSushi = (sushiObj) => {
    let copyOfSushis = [...this.state.sushis]
    let index = copyOfSushis.findIndex(sushi => sushi === sushiObj)
    copyOfSushis[index].img_url = ''
    this.setState({
      balance: this.state.balance - sushiObj.price,
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      sushis: copyOfSushis
    })
  }

  handleAddMoney = (addedAmt) => {
    this.setState({
      balance: this.state.balance + parseInt(addedAmt)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.getFourSushis()}
          onClickMore={this.handleMoreClick}
          onEatSushi={this.handleEatSushi}
          balance={this.state.balance}
          eatenSushi={this.state.eatenSushi}
        />
        <Table
          balance={this.state.balance}
          eatenSushi={this.state.eatenSushi}
          onAddMoney={this.handleAddMoney}
        />
      </div>
    );
  }
}

export default App;
