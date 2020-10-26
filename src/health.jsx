import React from 'react';

class Health extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      healthLevel: 5,
      timeRemaining: 44
    };
    this.countdownTime = this.countdownTime.bind(this)
  }

  componentDidMount() {
    const intervalId = setInterval(this.countdownTime, 1000);
    this.setState({
      intervalId: intervalId
    })
  }

  countdownTime() {
    if (this.state.timeRemaining === 0) {
      clearInterval(this.state.intervalId)
    } else {
      this.setState(state => {
        if (state.timeRemaining % 9 === 0) {
          return ({
            timeRemaining: state.timeRemaining - 1,
            healthLevel: state.healthLevel - 1
          })
        }
        return ({
          timeRemaining: state.timeRemaining - 1
        })
      })
    }
  }

  render() {
    return (
      <>
        <div className={`diglett-health health-${this.state.healthLevel}`}></div>
        <div className="player-health"></div>
      </>
    )
  }

}

export default Health;
