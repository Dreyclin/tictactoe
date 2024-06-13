import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetBoard, setCell } from "../features/gameBoard/gameBoardSlice";
import { changePlayer, checkWinner, resetGame } from "../features/gameStatus/gameStatusSlice";

export default function Field() {

    const dispatch = useDispatch();
    const board = useSelector((state) => state.gameBoard.board)
    const activePlayer = useSelector((state) => state.gameStatus.activePlayer)
    const winner = useSelector((state) => state.gameStatus.winner)

    function handleCellClick(event, row, col) {
        const cellValue = board[row][col];
        if (!cellValue && !winner) {
            dispatch(setCell({ row, col, value: activePlayer.sign }))
            dispatch(changePlayer(activePlayer.number === 1 ? 1 : 0))
        }
    }
    
    function handleResetClick() {
        dispatch(resetBoard());
        dispatch(resetGame());
    }

    useEffect(() => {
        dispatch(checkWinner(board));
    }, [board, dispatch])

    return (
        <div className="container">
            {winner && <div className="winner-container">
                <h2>Winner: {winner}</h2>
                <button className="btn btn-lg btn-primary" onClick={handleResetClick}>
                    Start New Game
                </button>
            </div>}
            <h1>Tic Tac Toe</h1>
            <div className="field-container">
                {board.map((boardRow, boardRowId) =>
                    boardRow.map((boardCol, boardColId) =>
                        <div className="field-square" onClick={(event) => handleCellClick(event, boardRowId, boardColId)}>
                            {board[boardRowId][boardColId]}
                        </div>))}
            </div>
        </div>
    )
}