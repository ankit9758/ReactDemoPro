import React, { useRef, useEffect, useState } from 'react';
import {
  View, Text, ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView
  , ScrollView, StyleSheet, TextInput, ActivityIndicator
} from 'react-native';
import stylesApp from '../utils/styles';
import { white, black, red } from '../utils/colors';
import AppButton from '../components/AppButton';
import { validateEmpty, isValidEmail, validateFirstName ,validateLastName,validateNumber,validatePassword, validateName} from '../utils/validation';



export const SignUpScreen = () => {
  const [fname, setFirstName] = React.useState('');
  const [lname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');


  const firstNameRef = React.useRef()
  const lastNameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const confirmPasswordRef = React.useRef()
  const phoneRef = React.useRef()
  const [loading, setLoading] = useState(false);

  let error = '';

  const displayLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }



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
        alignContent: 'center',
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

            {
              loading ? 
              <View style={styles.cneterdView}>
 
              <ActivityIndicator size="large" color="#0000ff"
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: '#555',
                  borderRadius: 12,
                  justifyContent: 'center', 
                  flex: 1,
                  alignContent: 'center', alignSelf: 'center'
                }} animating={loading} /> 
                </View>: null
            }



            <AppButton title={'SignUp'} onPress={() => {
              error = ''
              if (validateEmpty(fname)) {
                error = 'First Name is required'
              }else if (!validateName(fname)) {
                error = 'Invalid First  Name'
              
              }else if (validateEmpty(lname)) {
                error = 'Last Name is required'
              } 
              else if (!validateName(lname)) {
                error = 'Invalid Last  Name'
              
              }else if (validateEmpty(email)) {
                error = 'Email is Required*'
              } else if (!isValidEmail(email)) {
                error = 'Invalid email format'
              }
              else if (validateEmpty(phone)) {
                error = 'Phone no  is Required*'
              }
              else if (validateNumber(phone)) {
                error = 'Invalid Phone no,.'
              } else if (validateEmpty(password)) {
                error = 'Password is required is Required*'
              }else if (validateEmpty(confirmPassword)) {
                error = 'Confirm Pasword  is Required*'
              }  else {
                error = ''
              }
              if (error == '') {

                console.warn('Sucess')
              } else {
                displayLoader();
                console.warn(`${error}`)
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
  cneterdView : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },
});
