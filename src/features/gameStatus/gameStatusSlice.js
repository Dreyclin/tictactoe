import { createSlice } from "@reduxjs/toolkit";

const players = [{ number: 1, sign: "X" }, { number: 2, sign: "O" }];

const initialState = {
    players: players,
    activePlayer: players[0],
    winner: null
}

const gameStatusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        changePlayer(state, action) {
            state.activePlayer = players[action.payload]
        },
        checkWinner(state, action) {
            const board = action.payload;

            let lines = [
                // horizontal
                
                [board[0][0], board[0][1], board[0][2]],
                [board[1][0], board[1][1], board[1][2]],
                [board[2][0], board[2][1], board[2][2]],
                
                // vertical
                
                [board[0][0], board[1][0], board[2][0]],
                [board[0][1], board[1][1], board[2][1]],
                [board[0][2], board[1][2], board[2][2]],
                
                // diagonal
                
                [board[0][0], board[1][1], board[2][2]],
                [board[2][0], board[1][1], board[0][2]]
            ]
            console.log(lines);
            lines.map(line => {
                if(line[0] && line[0] === line[1] && line[0] === line[2]){
                    state.winner = line[0];
                }
            })
        }
    }
})

export const {changePlayer, checkWinner} = gameStatusSlice.actions

export default gameStatusSlice.reducer