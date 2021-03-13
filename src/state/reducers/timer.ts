import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  intervalDuration: number
  shortBreakDuration: number
  longBreakDuration: number
  longBreakAfter: number
  timerRunning: boolean
}

const initialState: State = {
  intervalDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  longBreakAfter: 4,
  timerRunning: false
}

const intervalSlice = createSlice({
  name: 'intervalSlice',
  initialState,
  reducers: {
    setIntervalDuration: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload < 100) {
        state.intervalDuration = action.payload
      }
    },
    setShortBreakDuration: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload < 100) {
        state.shortBreakDuration = action.payload
      }
    },
    setLongBreakDuration: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload < 100) {
        state.longBreakDuration = action.payload
      }
    },
    setLongBreakAfter: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload < 20) {
        state.longBreakAfter = action.payload
      }
    },
    setTimerRunning: (state, action: PayloadAction<boolean>) => {
      state.timerRunning = action.payload
    }
  }
})

export const {
  setIntervalDuration,
  setShortBreakDuration,
  setLongBreakDuration,
  setLongBreakAfter,
  setTimerRunning
} = intervalSlice.actions

export default intervalSlice.reducer
