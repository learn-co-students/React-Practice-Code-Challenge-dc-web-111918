import React from 'react'

class Form extends React.Component {
  state = {
    amountToAdd: 0
  }

  handleChange = e => {
    this.setState({
      amountToAdd: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onAddMoney(this.state.amountToAdd)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        Add $ <input type="text" value={this.state.amountToAdd} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default Form
