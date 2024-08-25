import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons'; // 
import userProfile from './src/pages/userProfile';
import SnackSearch from './src/pages/snackSearch';

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'SnackSearch') {
              icon = faUtensils;
            } else if (route.name === 'UserProfile') {
              icon = faUser;
            }

            return <FontAwesomeIcon icon={icon} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#10b981',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#171717',
            height: 50,
            paddingTop: 10
          },
        })}
      >
        <Tab.Screen name="SnackSearch" component={SnackSearch} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="UserProfile" component={userProfile} options={{ tabBarLabel: '' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}