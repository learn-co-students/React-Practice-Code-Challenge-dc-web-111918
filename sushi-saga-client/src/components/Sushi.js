import React, { Fragment } from 'react'

class Sushi extends React.Component {

  handleClickASushi = () => {
    if (this.props.balance >= this.props.sushi.price && !this.props.eatenSushi.includes(this.props.sushi)) {
      this.props.onEatSushi(this.props.sushi)
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleClickASushi}>
          <img src={this.props.sushi.img_url} width="100%" />
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
