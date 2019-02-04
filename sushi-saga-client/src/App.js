import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  componentDidMount() {
    fetch(API)
    .then(res=>res.json())
    .then(data=>
      this.setState({
        sushis: data
      })
    )
  }
  constructor(){
    super()
    this.state={
      sushis:[],
      sushiIndex:0,
      eaten:[],
      bill: 0
    }
  }

  displaySushi=()=>{
    return this.state.sushis.slice(
      this.state.sushiIndex,
      this.state.sushiIndex + 4
    )
  }

  moreSushiPlease=()=>{
    if (this.state.sushiIndex < this.state.sushis.length - 4){
      this.setState({
        sushiIndex: this.state.sushiIndex + 4
      })
    }
  }
  eatSushi=(sushiObj)=>{
    let copyOfSushis =[...this.state.sushis]
    let index = copyOfSushis.findIndex(sushi=>sushi===sushiObj)
    copyOfSushis.splice(index,1)
      // sushis: copyOfSushis,
    if (this.state.bill + sushiObj.price < 200){
      this.setState({
        eaten: [...this.state.eaten,sushiObj],
        bill: this.state.bill + sushiObj.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} displaySushi={this.displaySushi()} moreSushiPlease={this.moreSushiPlease} isSushiEaten={this.state.eaten}/>
        <Table updateMoney={this.state.bill} updatePlates={this.state.eaten}/>
      </div>
    );
  }
}


export default App;
