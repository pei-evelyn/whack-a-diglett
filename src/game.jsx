import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiglettClick = this.handleDiglettClick.bind(this);
    this.state = { isHit: false, isHere: true };
  }

  handleDiglettClick() {
    this.setState({ isHit: true });
    setTimeout(() => {
      this.setState({ isHere: false });
    }, 2000);
  }

  render() {
    if (!this.state.isHere) {
      return (
        <div className="diglett-container"></div>
      )
    }
    return (
      <>
        <ReactAudioPlayer
          src="../dist/music/battle.ogg"
          src="../dist/music/battle.mp3"
          autoPlay
          loop
        />
        <div className="diglett-container">
          {this.state.isHit
            ? <img className="diglett-angry" src="images/diglett-angry.png" />
            : <img className="diglett" src="images/diglett.png" onClick={this.handleDiglettClick} />
          }
        </div>
      </>
    )
  }
}

export default Game;
