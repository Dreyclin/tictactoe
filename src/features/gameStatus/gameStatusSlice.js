import { createSlice } from "@reduxjs/toolkit";

const players = [{ number: 1, sign: "X" }, { number: 2, sign: "O" }];

const initialState = {
    players: players,
    activePlayer: players[0]
}

const gameStatusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        changePlayer(state, action) {
            state.activePlayer = players[action.payload]
        }
    }
})

export const {changePlayer} = gameStatusSlice.actions

export default gameStatusSlice.reducer