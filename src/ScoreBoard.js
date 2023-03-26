import React from "react";
import './ScoreBoard.css';

export const ScoreBoard = ({scores}) => {
    const {oScore, xScore} = scores;


    return (
        <div className="status">
            <div className='score x-score'>X - {xScore}</div>
            <div className='score o-score'>O - {oScore}</div>
        </div>
    );
}

