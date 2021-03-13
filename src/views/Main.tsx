import React, { FC } from 'react'
import styled from 'styled-components/native'
import StartButton from '../components/Button'
import Circle from '../components/Circle'
import { LargeTitle } from '../components/Primitives'
import SettingsButton from '../components/SettingsButton'
import TaskName from '../components/TaskName'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setTimerRunning } from '../state/reducers/timer'

export const Main: FC = () => {
  const { timerRunning } = useAppSelector((state) => state.timer)
  const dispatch = useAppDispatch()

  const toggleTimer = () => {
    if (timerRunning) {
      dispatch(setTimerRunning(false))
    } else {
      dispatch(setTimerRunning(true))
    }
  }

  return (
    <Container>
      <TitleRow>
        <LargeTitle>Tomaatti</LargeTitle>
        <SettingsButton />
      </TitleRow>
      <TaskName />
      <CircleContainer>
        <Circle />
      </CircleContainer>
      <StartButton onPress={toggleTimer} timerRunning={timerRunning} />
    </Container>
  )
}

const TitleRow = styled.View`
  margin: 28px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const CircleContainer = styled.View`
  flex: 1;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`

const Container = styled.SafeAreaView`
  flex: 1;
`
