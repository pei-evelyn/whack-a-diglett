import React from 'react';

const Start = props => {

  return (
      <div className="start-screen container">
        <div className="start-title row">
          <h4>Whack-a-Diglett</h4>
          <h6>Choose your player:</h6>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="choose-button"
              onClick={() => props.startGame('female')}>
                Pick Me
            </button>
          </div>
          <div className="col">
            <button
              className="choose-button"
              onClick={() => props.startGame('male')}>
                Pick Me
            </button>
          </div>
        </div>
      </div>
    )
}


export default Start
