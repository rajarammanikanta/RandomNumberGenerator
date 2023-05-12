import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerate = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: getRandomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onClickGenerate}>
            Generate
          </button>
          <h1 className="initial-count">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
