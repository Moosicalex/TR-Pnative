import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from 'trip/pages/home.js'
import Profile from 'trip/pages/profile.js'
import MapPage from 'trip/pages/mappage.js';
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
            {props => (<Profile username={"Johnny"}/>)}
            </Stack.Screen>
            <Stack.Screen
                name="Map"
                component={MapPage}
                options={{'headerShown':false}}
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
