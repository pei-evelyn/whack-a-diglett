import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { difficulty : 'trainer' }
  }

  handleChange() {
    this.setState({ difficulty: event.target.value });
  }

  render() {
    return (
      <div className="start-screen container">
        <div className="start-title row">
          <h4>Whack-a-Diglett</h4>
          <h6>Choose your player:</h6>
        </div>
        <div className="row button-row">
          <div className="col">
            <button
              className="choose-button"
              onClick={() => this.props.startGame('female', this.state.difficulty)}>
              Select
          </button>
          </div>
          <div className="col">
            <button
              className="choose-button"
              onClick={() => this.props.startGame('male', this.state.difficulty)}>
              Select
          </button>
          {/* update */}
          <select onChange={this.handleChange}>
            <option value="trainer">Trainer</option>
            <option value="gymLeader">Gym Leader</option>
            <option value="eliteFour">Elite Four</option>
          </select>
          </div>
        </div>
        <div className="row mt-5 button-row">
          <SoundButton musicState={this.props.musicState} startMusic={this.props.startMusic} />
        </div>
      </div>
    )
  }
}

const SoundButton = props => {
  const musicPlaying = props.musicState;
  if (musicPlaying) {
    return <button className="choose-button p-2" onClick={props.startMusic}>Sound On</button>
  } else {
    return <button className="choose-button p-2" onClick={props.startMusic}>Sound Off</button>
  }
}

export default Start
