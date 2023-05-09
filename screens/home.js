import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import BackGround from '../components/BackgroundImage';
import stylesApp from '../utils/styles';
import AppButton from '../components/AppButton';


export const Homescreen = (props) => {
  return (
    <BackGround>
      <View style={[stylesApp, { marginHorizontal: 25, marginVertical: 60 }]}>
        <Text style={stylesApp.appTextBold64}>Hi My Name is Ankit</Text>
        <Text style={[stylesApp.appTextBold64,{marginBottom:100,marginTop:10}]}>Lets Start </Text>
        <AppButton title={'Login '} onPress={() => props.navigation.navigate('Login')} />
        <AppButton title={'Signup '} onPress={() => props.navigation.navigate('SignUp')} />
      </View>

    </BackGround>)
};
