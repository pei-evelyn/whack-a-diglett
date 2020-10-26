import React from 'react'

const Health = props => {
  return (
    <>
      <div className="diglett-health"></div>
      <div className="player-health"></div>
    </>
  )
}

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore() {
    this.setState(state => ({
      score: state.score + 5
    }))
  }

  render() {
    return (
      <>
      <Health />
      <div className="score-container">
        <h6 className="score-heading">Score</h6>
        <p>{this.state.score}</p>
      </div>
      </>
    )
  }
}

export default Score;
