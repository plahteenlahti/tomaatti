import React from 'react';
import { StatusBar } from 'react-native';
import Circle from './src/components/Circle';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from './src/styles/themes';
import { LargeTitle, SafeAreaView } from './src/components/Primitives';
import StartButton from './src/components/Button';
import styled from 'styled-components/native';
import TaskName from './src/components/TaskName';
import SettingsButton from './src/components/SettingsButton';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TitleRow>
            <LargeTitle>Tomaatti</LargeTitle>
            <SettingsButton />
          </TitleRow>
          <TaskName />
          <CircleContainer>
            <Circle />
          </CircleContainer>
          <StartButton disabled={true} />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const TitleRow = styled.View`
  margin: 28px 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CircleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
