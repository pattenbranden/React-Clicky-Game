import React from "react";

const ScoreCounter = ({score, highscore}) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <h3>Score: {score}</h3>

      </div>
      <div className="col-sm-6">
       <h3>Highscore: {highscore}</h3> 

      </div>

    </div>
    
  );
}

export default ScoreCounter;
