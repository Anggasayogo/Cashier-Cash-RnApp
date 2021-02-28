import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Onboarding
import LaunchScreen from '../Containers/LaunchScreen'
import OnboardingScreen from '../Containers/OnboardingScreen'

// Auth
import Login from '../Containers/Auth/LoginScreen'
import Register from '../Containers/Auth/RegisterScreen'

// Main App
import BottomTabNavigator from './BottomNavigation'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
