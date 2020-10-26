import React from 'react'

// class Score extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       score: 0
//     }
//     this.updateScore = this.updateScore.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.isHit !== prevProps.isHit) {
//       this.updateScore()
//     }
//   }

//   updateScore() {
//     this.setState(state => ({
//       score: state.score + 100
//     }))
//   }

//   render() {

const Score = props => {
  const hits = props.score * 100;
  return (
    <>
      <div className="score-container">
        <h6 className="score-heading">Score</h6>
        <p>{hits}</p>
      </div>
    </>
  )
}

export default Score;
