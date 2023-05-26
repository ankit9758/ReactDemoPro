import React, { useRef } from 'react';
import { View, Text, Dimensions, SafeAreaView, ImageBackground, ScrollView, KeyboardAvoidingView, Touchable, TouchableOpacity } from 'react-native';
import BackGround from '../components/BackgroundImage';
import stylesApp from '../utils/styles';
import { black, green, white } from '../utils/colors';
import AppInputFiled from '../components/AppInputField';
import AppButton from '../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateEmail, validateEmpty } from '../utils/validation';


export default LoginScreen = (props) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  

  const saveJSONToAsyncStorage = async (key, data) => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonData);
      console.log('JSON value saved successfully.');
    } catch (error) {
      console.log('Error saving JSON value:', error);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('loginData')
      return jsonValue != null ? JSON.parse(jsonValue) : null; u
      if (jsonValue !== null) {
        // value previously stored
        console.log(jsonValue);
      }
      console.log('Hello ');
    } catch (e) {
      console.log(error);
    }
  }
  const getJSONFromAsyncStorage = async (key) => {
    try {
      const jsonData = await AsyncStorage.getItem(key);
      if (jsonData !== null) {
        const data = JSON.parse(jsonData);
        console.log('Retrieved JSON value:', data);
        const value = data['password'];
        console.log('Retrieved JSON value:', value);
        return data;
      }
    } catch (error) {
      console.log('Error retrieving JSON value:', error);
    }
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("../src/assets/images/background.png")}
        resizeMode='stretch' style={{ height: '100%', width: '100%' }}>
        <Text style={[stylesApp.appTextBold64, { alignSelf: 'center', marginTop: 30, fontStyle: 'italic' }]}>Login</Text>
        <View style={{
          marginTop: 20,
          backgroundColor: white, borderTopLeftRadius: 150,
          flex: 1, paddingVertical: 20,
          alignSelf: 'stretch',
          justifyContent: 'center',
          paddingHorizontal: 30,

        }}>
          <KeyboardAvoidingView>


            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <Text style={[stylesApp.appTextBold40, { color: green, alignSelf: 'center' }]}>Welcome Back</Text>
                <Text style={{
                  fontSize: 16, color: black, fontWeight: "bold",
                  alignSelf: 'center', marginBottom: 20
                }}>Login to your account</Text>

                <AppInputFiled placeholder={'Email /UserName'}
                  multiline={false} keyboardType={'email-address'} style={{ width: windowWidth }}

                  blurOnSubmit={false}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text)
                  }}

                />
                <AppInputFiled placeholder={'Password'}
                  multiline={false} keyboardType={'visible-password'}
                  isLast={true}
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    setPassword(text)
                  }}
                />


                <Text style={[stylesApp.appTextBold20, {
                  color: green, alignSelf: 'flex-end',
                  marginTop: 20
                }]}>Forgot Password ?</Text>
                <View style={{ marginTop: 20 }}>
                  <AppButton title={'Login'} onPress={() =>
                    // Usage example:

                    saveJSONToAsyncStorage('loginData', data1 = {
                      'email-adress': `${email}`,
                      'password': `${password}`,
                    })

                  } />
                </View>

                <View style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                  <Text style={[stylesApp.appTextBold16]}>Don't have account ? </Text>
                  <TouchableOpacity onPress={() => getJSONFromAsyncStorage('loginData')}>
                    <Text style={[stylesApp.appTextBold16, { color: green }]}>Signup</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>

        </View>

      </ImageBackground>

    </SafeAreaView>
  )
};