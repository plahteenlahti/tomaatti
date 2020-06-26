import { createAction } from '@reduxjs/toolkit';

const changeInterval = createAction('CHANGE_INTERVAL');

const initialState = {
  intervalDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  longBreakAfter: 4,
};
