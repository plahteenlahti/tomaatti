import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { ThemeProvider } from 'styled-components/native'
import { AppContent } from './src/AppContent'
import { lightTheme } from './src/styles/themes'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/state/store'
import { Provider } from 'react-redux'

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
