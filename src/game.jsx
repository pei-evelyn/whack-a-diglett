import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiglettClick = this.handleDiglettClick.bind(this);
    this.state = { isHit: false, currentPosition: null };
  }

  handleDiglettClick() {
    this.setState({ isHit: true });
    setTimeout(() => {
      this.setState({ currentPosition: null });
    }, 1600);
  }

  getDiglettPosition() {
    const position = ['position-1', 'position-2', 'position-3', 'position-4', 'position-5', 'position-6', 'position-7', 'position-8', 'position-9'];
    const randomNum = Math.floor((Math.random() * 9) + 1);
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
