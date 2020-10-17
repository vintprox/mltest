import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreProvider } from './context/StoreProvider.jsx';
import { LoginScreen } from './screens/LoginScreen.jsx';
import { HomeScreen } from './screens/HomeScreen.jsx';

const Stack = createStackNavigator();

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Вход'
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Добро пожаловать!'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default registerRootComponent(App);
