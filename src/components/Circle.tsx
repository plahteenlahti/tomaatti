import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { useInterval } from '../hooks/useInterval'
import Svg, { Path } from 'react-native-svg'
import { describeArc } from '../helpers/geometry'
import Animated from 'react-native-reanimated'
const AnimatedPath = Animated.createAnimatedComponent(Path)

const { width } = Dimensions.get('window')
const containerWidth = width - 80
const x = containerWidth / 2
const y = containerWidth / 2

const Circle = () => {
  const duration = 25 * 60 - 30
  const [count, setCount] = useState({ minutes: 25, seconds: 0 })

  useInterval(() => {
    let start = Date.now(),
      diff,
      minutes,
      seconds
    function timer() {
      diff = duration - ((Date.now() - start) / 1000 || 0)

      minutes = diff / 60 || 0
      seconds = diff % 60 || 0

      minutes = minutes < 10 ? 0 + minutes : minutes
      seconds = seconds < 10 ? 0 + seconds : seconds

      if (diff <= 0) {
        start = Date.now() + 1000
      }

      setCount({ minutes, seconds })
    }
    timer()
  }, 1000)

  const path = describeArc(x, y, x - 6, 0.001, 359.99).toString()

  const circles = Array(4)
    .fill(1)
    .map((_, index) => <Interval key={index} />)

  return (
    <FalseContainer>
      <TimerContainer>
        <SvgContainer height={containerWidth} width={containerWidth}>
          <Arc
            d={path}
            fill="none"
            stroke="blue"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </SvgContainer>
        <Counter>
          {count.minutes}:{count.seconds}
        </Counter>
        <Circles>{circles}</Circles>
      </TimerContainer>
    </FalseContainer>
  )
}

export default Circle

const TimerContainer = styled.View`
  width: ${containerWidth}px;
  height: ${containerWidth}px;
  border-radius: ${width}px;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 20px 20px 41px #c1c1c1;
  justify-content: center;
  align-items: center;
`

const FalseContainer = styled.View`
  box-shadow: -20px -20px 41px #ffffff;
`

const SvgContainer = styled(Svg)`
  position: absolute;
`

type ArcProps = {
  d: string
}

const Arc = styled(AnimatedPath).attrs<ArcProps>(({ theme }) => ({
  stroke: theme.accentColor
}))<ArcProps>``

const Counter = styled.Text`
  font-size: 54px;
  color: ${({ theme }) => theme.accentColor};
  text-align: center;
  font-family: ${({ theme }) => theme.fontBold};
`

const Circles = styled.View`
  flex-direction: row;
`

const Interval = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.accentColor}; */
  margin: 2px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.accentColor};
`
