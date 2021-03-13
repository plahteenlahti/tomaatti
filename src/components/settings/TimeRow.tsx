import React, { FC } from 'react'
import styled from 'styled-components/native'

type Props = {
  maxValue?: number
  minValue?: number
  value: number
  label: string
  edit: (type: 'increment' | 'decrement') => void
}

export const TimeRow: FC<Props> = ({ edit, value, label }) => {
  return (
    <Row>
      <Text>{label}</Text>
      <Buttons>
        <Minus onPress={() => edit('decrement')}>
          <ButtonText>-</ButtonText>
        </Minus>
        <Value>{value}</Value>
        <Plus onPress={() => edit('increment')}>
          <ButtonText>+</ButtonText>
        </Plus>
      </Buttons>
    </Row>
  )
}

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
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
  text-align: center;
  min-width: 40px;
  font-family: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.primaryColor};
`
