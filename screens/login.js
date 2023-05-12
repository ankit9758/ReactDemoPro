import React, { useRef } from 'react';
import { View, Text, Dimensions, SafeAreaView, ImageBackground, ScrollView, KeyboardAvoidingView, Touchable, TouchableOpacity } from 'react-native';
import BackGround from '../components/BackgroundImage';
import stylesApp from '../utils/styles';
import { black, green, white } from '../utils/colors';
import AppInputFiled from '../components/AppInputField';
import AppButton from '../components/AppButton';
import { TextInput } from 'react-native-paper';
import { validateEmail, validateEmpty } from '../utils/validation';


export default LoginScreen = (props) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [email, setEmail] = React.useState('');




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("../src/assets/background.png")}
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
                <AppInputFiled placeholder={'Address'}
                  multiline={false} keyboardType={'email-address'}
                  isLast={true}
                />


                <Text style={[stylesApp.appTextBold20, {
                  color: green, alignSelf: 'flex-end',
                  marginTop: 20
                }]}>Forgot Password ?</Text>
                <View style={{ marginTop: 20 }}>
                  <AppButton title={'Login'} onPress={() => {
                    if (!validateEmpty(email)) {
                      console.warn('Please enter any text ')
                    } else if (isValidEmail(email)) {
                      console.warn('Please enter valid  text ')
                    }
                  }
                  } />
                </View>

                <View style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                  <Text style={[stylesApp.appTextBold16]}>Don't have account ? </Text>
                  <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
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