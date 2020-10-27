import React from 'react'

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
