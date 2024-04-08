
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen,LoginPage,Home } from './src/screens'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen name="home" component={ Home} />
        <Stack.Screen name="login" component={ LoginScreen} />
        <Stack.Screen name="loginPage" component={ LoginPage} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

