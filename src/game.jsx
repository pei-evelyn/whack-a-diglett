import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiglettClick = this.handleDiglettClick.bind(this);
    this.state = { isHit: false, currentPosition: null };
  }

  handleDiglettClick() {
    this.setState({ isHit: true });
    setTimeout(() => {
      this.setState({ isHit: false, currentPosition: null });
      this.getDiglettPosition();
    }, 1000);
  }

  getDiglettPosition() {
    const position = ['position-1', 'position-2', 'position-3', 'position-4', 'position-5', 'position-6', 'position-7', 'position-8', 'position-9'];
    const randomNum = Math.floor((Math.random() * 9));
    this.setState({ currentPosition: position[randomNum] });
  }

  componentDidMount() {
    this.getDiglettPosition();
  }

  render() {
    if (!this.state.currentPosition) {
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
        { this.state.isHit
        ? <img className={this.state.currentPosition} src="images/diglett-angry.png" />
        : <img className={this.state.currentPosition} src="images/diglett.png" onClick={this.handleDiglettClick} />
        }
      </div>
        </>
    )
  }
}

export default Game;
