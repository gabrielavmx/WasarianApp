import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import userProfile from './src/pages/userProfile';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerShown: false,}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="UserProfile" component={userProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}