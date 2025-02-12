import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/components/Screens/Onboarding';
import HomeScreen from './src/components/Screens/HomeScreen'; 
import LoginScreen from './src/components/Screens/LoginScreen';
import SignUpScreen from './src/components/Screens/SignUpScreen';
import BuscarScreen from './src/components/Screens/BuscarScreen';
import MinhaListaScreen from './src/components/Screens/MinhaListaScreen';
import PerfilScreen from './src/components/Screens/PerfilScreen';
import LivroScreen from './src/components/Screens/LivroScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
              name="SignUp" 
              component={SignUpScreen} 
              options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
           
          />
          <Stack.Screen
            name="Buscar"
            component={BuscarScreen}
          />
          {/* <Stack.Screen
            name="MinhaLista"
            component={MinhaListaScreen}
          />
          <Stack.Screen
            name="Perfil"
            component={PerfilScreen}
          /> */}
          <Stack.Screen
            name="Livro"
            component={LivroScreen}
            options={{ headerShown: false }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});