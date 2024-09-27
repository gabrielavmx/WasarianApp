import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faUser, faGlassWater, faHome } from '@fortawesome/free-solid-svg-icons';
import userProfile from './src/pages/userProfile';
import SnackSearch from './src/pages/snackSearch';
import WaterConsumption from './src/pages/waterConsumption';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DietaryRestrictions from './src/pages/dietaryRestrictions';
import DietPlan from './src/pages/dietPlan';
import Login from './src/pages/login';
import Register from './src/pages/register';
import ForgottenPassword from './src/pages/forgottenPassword';
import HomeScreen from './src/pages/homeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={userProfile} options={{ headerShown: false }} />
      <Stack.Screen name="WaterConsumption" component={WaterConsumption} options={{ headerShown: false }} />
      <Stack.Screen name="DietPlan" component={DietPlan} options={{ headerShown: false }} />
      <Stack.Screen name="DietaryRestrictions" component={DietaryRestrictions} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SnackSearch" component={SnackSearch} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Definir o Tab Navigator
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let icon;

          if (route.name === 'Profile') {
            icon = faUser;
          } else if (route.name === 'HomeScreen') {
            icon = faHome;
          } else if (route.name === 'SnackSearch') {
            icon = faGlassWater; // Escolha um ícone apropriado
          }

          return <FontAwesomeIcon icon={icon} size={20} color={color} />;
        },
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#171717',
          height: 50,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="SnackSearch" component={SearchStack} options={{ tabBarLabel: '' }} />
    </Tab.Navigator>
  );
};

// Configuração do Stack Navigator para começar com Login
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
            } else if (route.name === 'Authentication') {
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
        <Tab.Screen name="Authentication" component={AuthenticationStack} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="SnackSearch" component={SnackSearch} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarLabel: '' }} />
      </Tab.Navigator>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}