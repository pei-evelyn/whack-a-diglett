import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Start = props => {
  const musicPlaying = props.musicState;
  const soundButton = props => {
    if (musicPlaying) {
      return <button className="choose-button p-2" onClick={props.startMusic}>Sound On</button>
    } else {
      return <button className="choose-button p-2" onClick={props.startMusic}>Sound Off</button>
    }
  }
  return (
    <>
      <div className="start-screen container">
        <div className="start-title row">
          <h4>Whack-a-Diglett</h4>
          <h6>Choose your player:</h6>
        </div>
        <div className="row button-row">
          <div className="col">
            <button
              className="choose-button"
              onClick={() => props.startGame('female')}>
              Select
          </button>
          </div>
          <div className="col">
            <button
              className="choose-button"
              onClick={() => props.startGame('male')}>
              Select
          </button>
          </div>
        </div>
        <div className="row mt-5 button-row">
          {soundButton(props)}
        </div>
      </div>
    </>
  )
}

export default Start
