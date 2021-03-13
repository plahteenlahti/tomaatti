import React from 'react'
import { SvgXml } from 'react-native-svg'
import styled from 'styled-components/native'
import settingsButton from '../assets/settings-icon.svg'
import { useNavigation } from '@react-navigation/core'

const SettingsButton = () => {
  const navigation = useNavigation()

  const openSettings = () => {
    navigation.navigate('Settings')
  }

  return (
    <Container>
      <Button onPress={openSettings}>
        <InnerContainer>
          <Icon xml={settingsButton} />
        </InnerContainer>
      </Button>
    </Container>
  )
}

export default SettingsButton

const Button = styled.TouchableOpacity`
  border-radius: 9px;
  width: 65px;
  height: 65px;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 20px 20px 41px #c1c1c1;
`

const InnerContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: -20px -20px 41px #ffffff;
`

const Icon = styled(SvgXml).attrs(({ theme }) => ({
  height: 30,
  fill: theme.accentColor
}))``

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
