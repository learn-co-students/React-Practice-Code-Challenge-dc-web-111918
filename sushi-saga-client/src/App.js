import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushiList: [],
      eatenSushi: [],
      balance: 100, 
      startIndex: 0
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiData => {
      this.setState({sushiList: sushiData})
    })
  }

  handleMoreButton = () => {
    if (this.state.startIndex < this.state.sushiList.length - 4) {
      this.setState({
        startIndex: this.state.startIndex + 4
      })
    }else{
      this.setState({startIndex: 0})
    }
    
  }

  handleEatSushi = (sushiObj) =>{
    if (this.state.balance >= sushiObj.price && !this.state.eatenSushi.includes(sushiObj) ) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushiObj]
      })
      this.setState({
        balance: this.state.balance - sushiObj.price
      })
    }
  }

  handleBalanceRefill = (e) => {
    e.preventDefault()
    const amount = parseInt(e.target.input.value, 10)
    if (amount > 0) {
      this.setState({balance: this.state.balance + amount})
    }
    e.target.reset()
    
  }

  render() {
    return (
      <div className="app">
        <WalletForm refill={this.handleBalanceRefill}/>
        <SushiContainer 
          sushiList={this.state.sushiList.slice(this.state.startIndex, this.state.startIndex+4)} 
          moreSushi={() => this.handleMoreButton()} 
          eatSushi={this.handleEatSushi}
          eatenSushi={this.state.eatenSushi}
          />
        <Table 
          balance={this.state.balance}
          eatenSushi={this.state.eatenSushi}
        />
      </div>
    );
  }
}

export default App;