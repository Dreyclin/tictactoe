import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    board: [[null, null, null],
            [null, null, null],
            [null, null, null]]
}

const gameBoardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setCell(state, action) {
            const {row, col, value} = action.payload
            state.board[row][col] = value
        },
    }
})

export const {setCell} = gameBoardSlice.actions

export default gameBoardSlice.reducer