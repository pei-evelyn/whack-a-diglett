import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiglettClick = this.handleDiglettClick.bind(this);
    this.state = { isHit: false, currentPosition: 'position-2' };
  }

  handleDiglettClick() {
    this.setState({ isHit: true });
    setTimeout(() => {
      this.setState({ currentPosition: null });
    }, 1600);
  }

  render() {
    if (!this.state.currentPosition) {
      return (
        <div className="diglett-container"></div>
      )
    }
    return (
      <div className="diglett-container">
        { this.state.isHit
        ? <img className={this.state.currentPosition} src="images/diglett-angry.png" />
        : <img className={this.state.currentPosition} src="images/diglett.png" onClick={this.handleDiglettClick} />
        }
      </div>
    )
  }
}

export default Game;
