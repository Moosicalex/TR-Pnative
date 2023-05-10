import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from 'trip/pages/home.js'
import Profile from 'trip/pages/profile.js'
import Login from 'trip/pages/login.js'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {

const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{'headerShown':false}}
            />
            <Stack.Screen
                name="Profile"
                options={{'headerShown':false}}
            >
            {props => (<Login username={"Johnny"}/>)}
            </Stack.Screen>
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
