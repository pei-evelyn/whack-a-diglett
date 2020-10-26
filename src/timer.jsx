import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30
    }
    this.startCountdown = this.startCountdown.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  startCountdown() {
    this.timerId = setInterval(() => {
      this.setState({ seconds: this.state.seconds - 1 });
    }, 1000)
  }

  componentDidMount() {
    this.startCountdown();
  }

  renderTime() {
    const time = this.state.seconds;
    return (time < 10 ? `00:0${time}` : `00:${time}`)
  }

  endGame() {
    if (this.state.seconds === 0) {
      return (
        <div className="modal"></div>
      )
    }
  }

  render() {
    const countdownTimer = this.renderTime();
    const endGameModal = this.endGame();
    return (
      <div className="timer-container">
        {endGameModal}
        <img className="timer" src="images/Countdowntimer.png"></img>
        <div className="timer-text">
          {countdownTimer}
        </div>
      </div>
    )
  }
}
