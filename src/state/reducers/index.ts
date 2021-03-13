import { combineReducers } from 'redux'
import timerReducer from './timer'

export default combineReducers({
  timer: timerReducer
})
