import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Splash from './Splash';
const Stack = createNativeStackNavigator ();
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            headerStyle: {
            backgroundColor: '#00b5ec',
            textAlign: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor:'white'
            }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;