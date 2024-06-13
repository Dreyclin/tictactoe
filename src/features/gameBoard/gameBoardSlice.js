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
        resetBoard(state, action) {
            state.board = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        }
    }
})

export const {setCell, resetBoard} = gameBoardSlice.actions

export default gameBoardSlice.reducer