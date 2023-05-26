import React from 'react';
import { View, Text, ImageBackground, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import BackGround from '../components/BackgroundImage';
import stylesApp from '../utils/styles';
import AppButton from '../components/AppButton';
import AppbuttonWithImage from '../components/AppbuttonWithImage';
import { black, green, white } from '../utils/colors';
import { useState } from 'react';
import { Overlay } from 'react-native-elements';


export const Homescreen = (props) => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
  }


  const closeModal = () => {
    setVisible(false);
  }

  return (
    <BackGround>
      <View style={[stylesApp, { marginHorizontal: 25, marginVertical: 60 }]}>
        <Overlay isVisible={true} ModalComponent={AllModals}>

        </Overlay>
        {/* <Overlay visible={true}  ModalComponent={AllModals}> 
      </Overlay>  */}
        <Text style={stylesApp.appTextBold64}>Hi My Name is Ankit</Text>
        <Text style={[stylesApp.appTextBold64, { marginBottom: 100, marginTop: 10 }]}>Lets Start </Text>
        <AppButton title={'Login'} onPress={() => props.navigation.navigate('Onboarding')} />
        <AppbuttonWithImage title={'Signup'} icon='https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'
          onPress={() => props.navigation.navigate('modals')} />
      </View>

    </BackGround>

  )
};



export const AllModals = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
      <TouchableOpacity onPress={() => { setVisible(false) }}>
        <View style={{
          width: 400, height: 200,
          backgroundColor: white, borderRadius: 20, justifyContent: 'center', alignItems: 'center'
        }}>
          <Text style={[stylesApp.appTextBold20, { marginTop: 10, color: black }]}>do you want to logout ? </Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ height: 70, flex: 1 }}>
              <AppButton title={'Lolhjkghjgjgin'} />
            </View>
            <View style={{ height: 70, flex: 1 }}>
              <AppButton title={'Signup'} onPress={() => console.warn('Hellddo')} />
            </View>


          </View>

        </View>
      </TouchableOpacity>
    </View>


  )

};

