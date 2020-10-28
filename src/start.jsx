import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { difficulty: 'trainer' }
  }

  handleChange() {
    this.setState({ difficulty: event.target.value });
  }

  render() {
    return (
      <div className="start-screen container">
        <div className="row">
          <h4 className="col start-title mb-4">Whack-a-Diglett</h4>
        </div>
        <div className="row">
          <div className="col select-level">
            <h6 className="start-title mb-3">Choose your difficulty:</h6>
            <select className="levels mb-4" onChange={this.handleChange}>
              <option value="trainer">Trainer</option>
              <option value="gymLeader">Gym Leader</option>
              <option value="eliteFour">Elite Four</option>
            </select>
          </div>
        </div>
        <h6 className="start-title mb-3">Choose your player:</h6>
        <div className="row mb-5">
          <div className="col">
            <button
              className="choose-button"
              onClick={() => this.props.startGame('female', this.state.difficulty, false, true)}>
              Select
          </button>
          </div>
          <div className="col">
            <button
              className="choose-button"
              onClick={() => this.props.startGame('male', this.state.difficulty, false, true)}>
              Select
          </button>
          </div>
        </div>
        <div className="row mb-4">
          <SoundButton musicState={this.props.musicState} startMusic={this.props.startMusic} pauseMusic={this.props.pauseMusic} />
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
    return <button className="choose-button p-2" onClick={props.pauseMusic}>Sound Off</button>
  }
}

export default Start
