import React, { useRef } from 'react';
import {
  View, Text, ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView
  , ScrollView, StyleSheet, TextInput
} from 'react-native';
import stylesApp from '../utils/styles';
import { white, black } from '../utils/colors';
import AppButton from '../components/AppButton';
import { validateEmpty,isValidEmail } from '../utils/validation';



export const SignUpScreen = () => {
  const [fname, setFirstName] = React.useState('');
  const [lname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('This Filed is Required*');

  const firstNameRef = React.useRef()
  const lastNameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const confirmPasswordRef = React.useRef()
  const phoneRef = React.useRef()

  return (<SafeAreaView style={{ flex: 1 }}>
    <ImageBackground source={require("../src/assets/background.png")}
      resizeMode='stretch' style={{ height: '100%', width: '100%' }}>
      <Text style={[stylesApp.appTextBold64, {
        alignSelf: 'center', marginTop: 30,
        fontStyle: 'italic'
      }]}>Signup</Text>
      <Text style={{
        fontSize: 16, color: white, fontWeight: "bold",
        alignSelf: 'center'
      }}>Create your  account</Text>
      <View style={{
        marginTop: 20,
        backgroundColor: white, borderTopLeftRadius: 150,
        flex: 1, paddingVertical: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 30,

      }}>



        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setFirstName(text)}
              value={fname}
              keyboardType='ascii-capable'
              returnKeyType='next'
              ref={firstNameRef}
              placeholder='First Name'
              autoCapitalize='words'
              blurOnSubmit={false}
              onSubmitEditing={
                () => lastNameRef.current.focus()
              }

            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setLastName(text)}
              value={lname}
              keyboardType='ascii-capable'
              returnKeyType='next'
              ref={lastNameRef}
              placeholder='Last Name'
              autoCapitalize='words'
              blurOnSubmit={false}
              onSubmitEditing={() => emailRef.current.focus()}

            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType='email-address'
              returnKeyType='next'
              ref={emailRef}
              placeholder='Email'
              autoCapitalize='words'
              blurOnSubmit={false}
              onSubmitEditing={() => phoneRef.current.focus()}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhoneNumber(text)}
              value={phone}
              keyboardType='number-pad'
              returnKeyType='next'
              ref={phoneRef}
              placeholder='Enter Phone Number'
              blurOnSubmit={false}
              onSubmitEditing={
                () => passwordRef.current.focus()
              }

            />
            <TextInput
            ref={passwordRef}
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Enter your password "
              keyboardType="visible-password"
              returnKeyType='next'
              onSubmitEditing={
                () => confirmPasswordRef.current.focus()
              }
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              returnKeyType='done'
              ref={confirmPasswordRef}
              placeholder="Re enter your password "
              keyboardType="visible-password"

            />


            <AppButton title={'SignUp'} onPress={() => {
               console.log(`hii.....${fname} ${email}`)
                 // Validate password
              if (validateEmpty(fname)) {
                setError('This Filed is Required*')
                console.log('This Filed is Required*',error)

              }else if (validateEmpty(email)) {
                setError('Email is required')
              } else if (!isValidEmail(email)) {
                setError('Invalid email format')
              }else{
                setError('')
              }
             

              // if (!validateEmsetFirstName.password.length < 6) {
              //   errors.password = 'Password must be at least 6 characters long';
              // }
              console.log("setError",error)
                   if(error==''){
                    
                      console.warn('Sucess')
                   }else{
                    console.warn(`Hwllo ${error}`)
                   }

            }
            } />
          </View>
        </ScrollView>

      </View>

    </ImageBackground>
  </SafeAreaView>)
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,

    padding: 10,
  },
});
