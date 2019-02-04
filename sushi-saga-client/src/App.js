import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushiData: [],
      currentPlate: [],
      emptyPlates: [],
      budget: 100,
      currentSushiIndex: 0
    }
  }


  fetchSushi(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushiData: data
      })
    })
  }

  componentDidMount(){
    this.fetchSushi()
  }

  moreSushi = () => {
     var newSushiArray = this.state.sushiData
     var servedSushi = newSushiArray.splice(this.state.currentSushiIndex,4)

     this.setState({
       sushiData: newSushiArray,
       currentPlate: servedSushi,
       currentSushiIndex: this.state.currentSushiIndex + 4
     })
   }

  eatSushi = (event) => {
    let eatenSushi = this.state.currentPlate.find(thisSushi => (event.target.id == thisSushi.id))

    if (eatenSushi.price <= this.state.budget){
      let remainingSushi = this.state.currentPlate.filter(thisSushi => (event.target.id != thisSushi.id))
      let newEmptyPlate = this.state.emptyPlates

      newEmptyPlate.push(eatenSushi)


      this.setState({
        currentPlate: remainingSushi,
        emptyPlates: newEmptyPlate,
        budget: this.state.budget - eatenSushi.price
      })
    }
  }

  moreFunds = () => {
    this.setState({
      budget: this.state.budget + 10
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer  moreFunds={this.moreFunds} sushiData={this.state.sushiData} servedSushi={this.state.currentPlate} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
        <Table sushiData={this.state.sushiData} emptyPlates={this.state.emptyPlates} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
