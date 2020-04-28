import React, { Component } from "react";
import ScoreCounter from "../components/score/score.js";
import cardData from "../components/GameCard/cardData.json";
import GameCard from "../components/GameCard/Card";
import "./gameContainer.css"

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      cardData: cardData,
      score: 0,
      highscore: 0,
      message: "Click an image to get started! Don't click the same image twice though, or your score will reset!",
    };
    this.cardClick=this.cardClick.bind(this)
  }

  cardClick(id, clicked) {
    let cardOrderArray = this.state.cardData;

    if (clicked) {
      cardOrderArray.forEach((image, i) => {
        cardOrderArray[i].clicked = false;
      });
      this.shuffleCards(this.state.cardData)
      return this.setState({
        score: 0,
        message: "Womp, try again."
      });
    } else {
      cardOrderArray.forEach((image, index) => {
        if (id === image.id) {
          cardOrderArray[index].clicked = true;
        }
        this.shuffleCards(this.state.cardData)

        const { highscore, score } = this.state;
        const newScore = score + 1;
        const newHighscore = newScore > highscore ? newScore : highscore;
        return this.setState({
          message: "You Guessed Correctly!",
          score: newScore,
          highscore: newHighscore,
        });
      });
    }
  }

  shuffleCards = cardArray => {
    for (let i = cardArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArray[i], cardArray[j]] = [
        cardArray[j],
        cardArray[i],
      ];
    }
    return { cardOrder: cardArray };
  }

componentDidMount(){
  this.setState(
  this.shuffleCards(this.state.cardData)
  )
}

  render() {
    return (
      <div className="container-fluid game-container">
        <div className="text-center message-display">
          <h1>Planetside Clicky Game</h1>
          <ScoreCounter
            score={this.state.score}
            highscore={this.state.highscore}
          />
          <h2>{this.state.message}</h2>
        </div>

        <div className="container">
          <div className="row">
          {this.state.cardData.map(data => (
            <GameCard
              key={data.id}
              id={data.id}
              name={data.name}
              clicked={data.clicked}
              image={data.image}
              cardClick={this.cardClick}
            />
            ))}
            {console.log(this.state.cardData)}
          </div>
        </div>
      </div>
    );
  }
}
export default GameContainer;
