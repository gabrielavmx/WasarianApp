import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faUser, faGlassWater } from '@fortawesome/free-solid-svg-icons';
import userProfile from './src/pages/userProfile';
import SnackSearch from './src/pages/snackSearch';
import WaterConsumption from './src/pages/waterConsumption';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DietaryRestrictions from './src/pages/dietaryRestrictions';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={userProfile} options={{ headerShown: false }} />
      <Stack.Screen name="WaterConsumption" component={WaterConsumption} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Desativa o cabeçalho nas abas
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'SnackSearch') {
              icon = faUtensils;
            } else if (route.name === 'Profile') {
              icon = faUser;
            } else if (route.name === 'DietaryRestrictions') {
              icon = faGlassWater;
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
        <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="DietaryRestrictions" component={DietaryRestrictions} options={{ tabBarLabel: '' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
