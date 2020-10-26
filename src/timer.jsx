import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10,
      isOpen: false
    }
    this.startCountdown = this.startCountdown.bind(this);
    this.renderTime = this.renderTime.bind(this);
  }

  startCountdown() {
    setTimeout(() => {
      this.setState({ seconds: this.state.seconds - 1 })
      if (this.state.seconds === 0) {
        return;
      }
      this.startCountdown();
    }, 1000)
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 1) {
      this.setState({ isOpen: true })
    }
  }

  renderTime() {
    const time = this.state.seconds;
    if (time === 0) {
      return "00:00"
    } else if (time < 10) {
      return (`00:0${time}`)
    } else {
      return (`00:${time}`)
    }
  }

  render() {
    const countdownTimer = this.renderTime();
    const isOpen = this.state.isOpen;
    return (
      <>
        <div>
          <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
          >
            <img src="images/Countdowntimer.png"></img>
          </ReactModal>
        </div>
        <div className="timer-container">
          <img className="timer" src="images/Countdowntimer.png"></img>
          <div className="timer-text">
            {countdownTimer}
          </div>
        </div>
      </>
    )
  }
}
