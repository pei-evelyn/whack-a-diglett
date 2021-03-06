import React from 'react';
import Game from './game';
import Start from './start';
import Timer from './timer'
import Score from './score';
import Health from './health';

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
    this.pauseTitleMusic = this.pauseTitleMusic.bind(this);
    this.playBattleMusic = this.playBattleMusic.bind(this);
    this.playDiglettCry = this.playDiglettCry.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.titleMusic = new Audio('music/title-screen.ogg');
    this.battleMusic = new Audio('music/battle.ogg');
    this.diglettCry = new Audio('music/diglettcry2.ogg');
  }

  startGame(gender, difficulty) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      gender: gender,
      hits: 0,
      seconds: 45,
      difficulty: difficulty,
    }))
    this.titleMusic.pause();
    this.playBattleMusic();
  }

  restartGame() {
    this.setState(state => ({
      isStarted: !state.isStarted,
      hits: 0,
      seconds: 45,
    }))
    if (!this.state.paused) {
      this.playTitleMusic();
    }
    this.battleMusic.pause();
  }

  playTitleMusic() {
    this.titleMusic.volume = 0.1;
    this.titleMusic.loop = true;
    this.titleMusic.play();
    this.setState(state => ({
      paused: false
    }))
  }

  pauseTitleMusic() {
    this.titleMusic.pause();
    this.setState(state => ({
      paused: true
    }))
  }

  playBattleMusic() {
    if (!this.state.paused) {
      this.battleMusic.volume = 0.1;
      this.battleMusic.loop = true;
      this.battleMusic.play();
      this.setState(state => ({
        paused: false
      }))
    }
  }

  pauseBattleMusic() {
    if (!this.state.paused) {
      this.battleMusic.pause();
      this.setState(state => ({
        paused: true
      }))
    }
  }

  playDiglettCry() {
    if (!this.state.paused) {
      this.diglettCry.volume = 0.1;
      this.diglettCry.play();
    }
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
          pauseMusic={this.pauseTitleMusic}
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
          diglettSound={this.playDiglettCry}
        />
        <Timer
          restartGame={this.restartGame}
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
