import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../ct1/src/screens/login.tsx';
import splash from './src/screens/splash.tsx';
import dashboard from './src/screens/dashboard.tsx';

const animal_stack = createNativeStackNavigator()


export default function App() {
  return (
      <NavigationContainer>
    <animal_stack.Navigator initialRouteName='Splash' screenOptions={{
    headerShown: false
  }}>
        <animal_stack.Screen name='Splash' component={splash} />
        <animal_stack.Screen name='Login' component={Login} />
        <animal_stack.Screen name='Dashboard' component={dashboard} />
    </animal_stack.Navigator>
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
