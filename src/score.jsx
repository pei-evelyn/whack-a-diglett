import React from 'react'

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 1000
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore() {
    this.setState(state => ({
      score: state.score + 100
    }))
  }

  render() {
    return (
      <>
      <div className="score-container">
        <h6 className="score-heading">Score</h6>
        <p>{this.state.score}</p>
      </div>
      </>
    )
  }
}

export default Score;
