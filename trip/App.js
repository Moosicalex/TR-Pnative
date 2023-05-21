import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from 'trip/pages/home.js'
import Profile from 'trip/pages/profile.js'
import MapPage from 'trip/pages/mappage.js';
import Login from 'trip/pages/login.js'
import MapPage from 'trip/pages/mappage.js'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export default function App() {


  const db_authLink = setContext((_, { headers }) => {
    return {
    headers: {
         ...headers, 'x-hasura-admin-secret': '4oeaNs0xOCILPF6vILBi5XooarVjjRGHxpfgj07AYyRPxyF82kKnc7zTFWRe4xfu'
       }
     }
   });

const db_httpLink = createHttpLink({
    uri: 'https://great-bird-64.hasura.app/v1/graphql',
});

const db_client = new ApolloClient({
  cache: new InMemoryCache(),
  link: db_authLink.concat(db_httpLink),
  connectToDevTools: true,

  name: 'react-web-client',
  defaultOptions: {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
  },
},
})

const Stack = createNativeStackNavigator();
  return (
    <ApolloProvider client ={db_client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{'headerShown':false}}
          />
          <Stack.Screen
              name="Map"
              component={MapPage}
              options={{'headerShown':false}}
          />
          <Stack.Screen
              name="Login"
              options={{'headerShown':false}}
          >
          {props => (<Login username={"Johnny"}/>)}
          </Stack.Screen>
          <Stack.Screen
              name="Profile"
              options={{'headerShown':false}}
          >
          {props => (<Profile email={"moosicalex@gmail.com"}/>)}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
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
