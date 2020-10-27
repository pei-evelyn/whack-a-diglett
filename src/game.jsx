import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Timer from './timer';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiglettClick = this.handleDiglettClick.bind(this);
    this.state = { isHit: false, currentPosition: null };
  }

  handleDiglettClick() {
    this.setState({ isHit: true });
    this.props.increaseHits();
  }

  getDiglettPosition() {
    const position = ['position-1', 'position-2', 'position-3', 'position-4', 'position-5', 'position-6', 'position-7', 'position-8', 'position-9'];
    const randomNum = Math.floor((Math.random() * 9));
    if (position[randomNum] === this.state.currentPosition) {
      return this.getDiglettPosition();
    }
    this.setState({ currentPosition: position[randomNum], isHit: false });
  }

  componentDidMount() {
    let time = 0;
    if (this.props.difficulty === 'trainer') {
      time = 900;
    } else if (this.props.difficulty === 'gymLeader') {
      time = 800;
    } else if (this.props.difficulty === 'eliteFour') {
      time = 600;
    }
    this.getDiglettPosition();
    let int = setInterval(() => {
      if (this.props.seconds === 0) return clearInterval(int);
      this.getDiglettPosition();
    }, time)
    this.props.countdown();
  }

  render() {
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
            ? <img className={this.state.currentPosition} src="images/diglett-angry.png" />
            : <img className={this.state.currentPosition} src="images/diglett.png" onClick={this.handleDiglettClick} />
          }
        </div>
      </>
    )
  }
}

export default Game;
