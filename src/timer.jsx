import React from 'react';
import Modal from './modal'

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 45
    }
    this.startCountdown = this.startCountdown.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.showModal = this.showModal.bind(this);
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
      this.props.openModal();
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

  showModal() {
    if (this.props.isOpen) return 'show d-block'
  }

  render() {
    const countdownTimer = this.renderTime();
    const isOpen = this.props.isOpen;
    const showModal = this.showModal();
    let modal;
    if (isOpen) {
      modal = (
        <Modal hidden={showModal} restartGame={this.props.restartGame} />
      )
    }
    return (
      <>
        {modal}
        <div className="timer-container">
          <p>{countdownTimer}</p>
        </div>
      </>
    )
  }
}
