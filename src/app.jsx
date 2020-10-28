import React from 'react';
import Game from './game';
import Start from './start';
import Timer from './timer'
import Score from './score';
import Health from './health';
import ReactAudioPlayer from 'react-audio-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      gender: null,
      hits: 0,
      seconds: 45,
      paused: true,
      difficulty: 'trainer'
    };
    this.startGame = this.startGame.bind(this);
    this.increaseHits = this.increaseHits.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.playTitleMusic = this.playTitleMusic.bind(this);
    this.titleMusic = new Audio('music/title-screen.ogg');
  }

  startGame(gender, difficulty) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      gender: gender,
      hits: 0,
      seconds: 45,
      difficulty: difficulty
    }))
  }

  playTitleMusic() {
    const musicState = this.state.paused
    if (musicState) {
      this.titleMusic.play();
      this.titleMusic.loop = true;
    } else {
      this.titleMusic.paused;
      this.titleMusic.pause();
    }
    this.setState(state => ({
      paused: !state.paused
    }))
  }

  increaseHits() {
    this.setState(state => ({
      hits: state.hits + 1
    }))
  }

  startCountdown() {
    setTimeout(() => {
      this.setState({ seconds: this.state.seconds - 1 })
      if (this.state.seconds === 0) {
        return;
      }
      this.startCountdown();
    }, 1000)
  }

  render() {
    if (!this.state.isStarted) {
      return (
        <Start
          startGame={this.startGame}
          startMusic={this.playTitleMusic}
          musicState={this.state.paused}
        />)
    }
    return (
      <div className={`game-background ${this.state.gender}`}>
        <div className="diglett-name">Diglett</div>
        <div className="diglett-lvl">9</div>
        <div className="trainer-name">Trainer</div>
        <div className="trainer-lvl">62</div>
        <div className="trainer-atr">114 114</div>
        <Score score={this.state.hits} />
        <Health />
        <Game
          increaseHits={this.increaseHits}
          seconds={this.state.seconds}
          countdown={this.startCountdown}
          difficulty={this.state.difficulty}
        />
        <Timer
          restartGame={this.startGame}
          openModal={this.openModal}
          isOpen={this.state.isOpen}
          score={this.state.hits}
          seconds={this.state.seconds}
        />
      </div>
    )
  }
}

export default App;
