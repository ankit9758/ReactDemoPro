import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import { ForgotPasswordScreen } from './screens/forgotpassword';
import { SignUpScreen } from './screens/signup';
import { Homescreen } from './screens/home';
import SplashScreen from 'react-native-splash-screen';

const stack = createNativeStackNavigator();


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (<NavigationContainer>
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name='Home' component={Homescreen} />
      <stack.Screen name='Login' component={LoginScreen} />
      <stack.Screen name='SignUp' component={SignUpScreen} />
      <stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />

    </stack.Navigator>
  </NavigationContainer>)
};

export default App;
