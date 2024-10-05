// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GiaiPT from "./Screen/GiaiPT";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GiaiPT"  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GiaiPT" component={GiaiPT} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

