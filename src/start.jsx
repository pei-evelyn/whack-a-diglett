import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Start = props => {
  return (
    <div className="start-screen container">
      <ReactAudioPlayer
        src="../dist/music/title-screen.ogg"
        src="../dist/music/title-screen.mp3"
        autoPlay
      />
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
    </div>
  )
}

export default Start
