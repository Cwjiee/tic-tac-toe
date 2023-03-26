import React from "react";
import './ResetButton.css';

export const Resetbutton = ({ reset }) => {
    return (
        <button className='resetButton' onClick={reset}>reset</button>
    )
}