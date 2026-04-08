import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>This optional component demonstrates state management in a class.</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>
          Increase class state
        </button>
      </div>
    )
  }
}

export default ClassComponent