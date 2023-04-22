// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTrueOrFalse: false, count: 0}

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onReset = () => {
    clearInterval(this.timer)
    this.setState({isTrueOrFalse: false, count: 0})
  }

  onStop = () => {
    clearInterval(this.timer)
    this.setState({isTrueOrFalse: false})
  }

  trick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onStart = () => {
    this.timer = setInterval(this.trick, 1000)
    this.setState({isTrueOrFalse: true})
  }

  renderSeconds = () => {
    const {count} = this.state
    const seconds = Math.floor(count % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }

    return seconds
  }

  renderMinutes = () => {
    const {count} = this.state

    const minutes = Math.floor(count / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }

    return minutes
  }

  render() {
    const {isTrueOrFalse} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">StopWatch</h1>
          <div className="stopwatch-sub-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="Image"
                alt="stopwatch"
              />
              <div>
                <h1 className="heading1">Timer</h1>
              </div>
            </div>
            <h1 className="heading1">{time}</h1>

            <div className="img-container">
              <button
                type="button"
                className="btn1"
                onClick={this.onStart}
                disabled={isTrueOrFalse}
              >
                Start
              </button>
              <button type="button" className="btn2" onClick={this.onStop}>
                Stop
              </button>

              <button type="button" className="btn3" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
