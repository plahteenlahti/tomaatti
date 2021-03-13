import React from 'react'
import styled from 'styled-components/native'
import { LargeTitle } from '../components/Primitives'
import { TimeRow } from '../components/settings/TimeRow'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setIntervalDuration } from '../state/reducers/timer'

export const Settings = () => {
  const dispatch = useAppDispatch()
  const {
    intervalDuration,
    shortBreakDuration,
    longBreakAfter,
    longBreakDuration
  } = useAppSelector((state) => state.timer)

  const changeIntervalDuration = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      dispatch(setIntervalDuration(intervalDuration + 1))
    } else {
      dispatch(setIntervalDuration(intervalDuration - 1))
    }
  }

  const changeShortBreakDuration = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      dispatch(setIntervalDuration(intervalDuration + 1))
    } else {
      dispatch(setIntervalDuration(intervalDuration - 1))
    }
  }

  return (
    <Container>
      <LargeTitle>Settings</LargeTitle>
      <TimeRow
        label="Interval duration"
        value={intervalDuration}
        edit={changeIntervalDuration}
      />
      <TimeRow
        label="Short break duration"
        value={shortBreakDuration}
        edit={changeShortBreakDuration}
      />
      <TimeRow label="Long break duration" value={longBreakAfter} />
      <TimeRow label="Long break after" value={longBreakDuration} />
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 32px 16px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

const Text = styled.Text`
  flex: 1;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.primaryColor};
`

const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.bgPrimary};
`
const Minus = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 8px;
`
const Plus = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 8px;
`

const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontMedium};
  color: white;
  font-size: 32px;
  width: 40px;
  height: 40px;
  text-align: center;
`

const Value = styled.Text`
  padding: 8px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.primaryColor};
`
