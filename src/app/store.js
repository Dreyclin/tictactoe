import { configureStore } from "@reduxjs/toolkit"
import gameBoardSlice from "../features/gameBoard/gameBoardSlice"
import gameStatusSlice from "../features/gameStatus/gameStatusSlice"

export const store = configureStore({
    reducer: {
        gameBoard: gameBoardSlice,
        gameStatus: gameStatusSlice
    }
})