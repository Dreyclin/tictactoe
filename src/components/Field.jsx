import React from "react";
import { useState } from "react";

export default function Field() {

    const [clickedSquare, setClickedSquare] = useState(null);

    function handleClick(square) {
        setClickedSquare(square);
    }

    return(
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="field-container">
            <div className={`field-square top-left ${clickedSquare === "top-left" ? "clicked" : ""}`} onClick={() => handleClick("top-left")}>
                    {clickedSquare === "top-left" && <span>X</span>}
                </div>
                <div className={`field-square ${clickedSquare === "top" ? "clicked" : ""}`} onClick={() => handleClick("top")}>
                    {clickedSquare === "top" && <span>X</span>}
                </div>
                <div className={`field-square top-right ${clickedSquare === "top-right" ? "clicked" : ""}`} onClick={() => handleClick("top-right")}>
                    {clickedSquare === "top-right" && <span>X</span>}
                </div>
                <div className={`field-square ${clickedSquare === "left" ? "clicked" : ""}`} onClick={() => handleClick("left")}>
                    {clickedSquare === "left" && <span>X</span>}
                </div>
                <div className={`field-square ${clickedSquare === "center" ? "clicked" : ""}`} onClick={() => handleClick("center")}>
                    {clickedSquare === "center" && <span>X</span>}
                </div>
                <div className={`field-square ${clickedSquare === "right" ? "clicked" : ""}`} onClick={() => handleClick("right")}>
                    {clickedSquare === "right" && <span>X</span>}
                </div>
                <div className={`field-square bottom-left ${clickedSquare === "bottom-left" ? "clicked" : ""}`} onClick={() => handleClick("bottom-left")}>
                    {clickedSquare === "bottom-left" && <span>X</span>}
                </div>
                <div className={`field-square ${clickedSquare === "bottom" ? "clicked" : ""}`} onClick={() => handleClick("bottom")}>
                    {clickedSquare === "bottom" && <span>X</span>}
                </div>
                <div className={`field-square bottom-right ${clickedSquare === "bottom-right" ? "clicked" : ""}`} onClick={() => handleClick("bottom-right")}>
                    {clickedSquare === "bottom-right" && <span>X</span>}
                </div>
            </div>
        </div>
    )
}