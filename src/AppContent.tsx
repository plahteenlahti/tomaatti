import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Main } from './views/Main'
import { Settings } from './views/Settings'
const Stack = createStackNavigator()

export const AppContent: FC = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
