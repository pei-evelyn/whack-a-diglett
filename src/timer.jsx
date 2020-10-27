import React from 'react';
import Modal from './modal'

const Timer = props => {

  const renderTime = props => {
    const time = props.seconds;
    if (time === 0) {
      return "00:00"
    } else if (time < 10) {
      return (`00:0${time}`)
    } else {
      return (`00:${time}`)
    }
  }

  const showModal = props => {
    return props.seconds === 0 ? 'show d-block' : 'hidden';
  }


  return (
    <>
      <Modal hidden={showModal(props)}
        restartGame={props.restartGame}
        score={props.score}
      />
      <div className="timer-container">
        <p>{renderTime(props)}</p>
      </div>
    </>
  )
}

export default Timer;
